import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Resend } from "resend";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "REMOVED_RESEND_API_KEY";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  if (entry.count >= 10) return false;
  entry.count++;
  return true;
}

export async function action({ request }: ActionFunctionArgs) {
  const ip =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  const contentType = request.headers.get("content-type") || "";
  let intent: string;
  let formData: FormData;

  if (contentType.includes("multipart/form-data")) {
    formData = await request.formData();
    intent = formData.get("intent") as string;
  } else {
    formData = await request.formData();
    intent = formData.get("intent") as string;
  }

  if (intent === "rewrite") {
    return handleRewrite(formData);
  }

  if (intent === "submit") {
    return handleSubmit(formData);
  }

  return json({ error: "Invalid request." }, { status: 400 });
}

async function handleRewrite(formData: FormData) {
  const message = formData.get("message") as string;

  if (!message?.trim()) {
    return json({ error: "Please enter a message first." }, { status: 400 });
  }

  if (!GEMINI_API_KEY) {
    return json(
      { error: "AI service is not configured. Please contact directly." },
      { status: 500 }
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `You are helping a potential client articulate their business problem to a software engineer. 
    
The client wrote this rough description of their needs:
"${message}"

Rewrite this message to be:
1. Clear and well-structured
2. Professional but conversational
3. Specific about the business problem
4. Focused on what they need (not how to build it)
5. Brief — 3-5 sentences max

Return ONLY the rewritten message, nothing else. No quotes, no preamble, no explanation.`;

    const result = await model.generateContent(prompt);
    const rewritten = result.response.text().trim();

    return json({ rewritten });
  } catch (error) {
    console.error("Gemini API error:", error);
    return json(
      { error: "Failed to improve message. Please try again." },
      { status: 500 }
    );
  }
}

async function handleSubmit(formData: FormData) {
  const message = formData.get("message") as string;
  const budget = formData.get("budget") as string;
  const files = formData.getAll("files") as File[];

  if (!message?.trim()) {
    return json({ error: "Message is required." }, { status: 400 });
  }

  if (!budget) {
    return json(
      { error: "Please select a budget range." },
      { status: 400 }
    );
  }

  try {
    const resend = new Resend(RESEND_API_KEY);

    const budgetLabel =
      {
        "500-1000": "$500 — $1,000",
        "1000-3000": "$1,000 — $3,000",
        "3000-5000": "$3,000 — $5,000",
        "5000-10000": "$5,000 — $10,000",
        "10000+": "$10,000+",
        discuss: "Let's discuss",
      }[budget] || budget;

    const fileNames = files
      .filter((f) => f.size > 0)
      .map((f) => f.name)
      .join(", ");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "badjieansu165@gmail.com",
      subject: `New Inquiry — Budget: ${budgetLabel}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10a882; margin-bottom: 4px;">New Portfolio Inquiry</h2>
          <p style="color: #666; font-size: 14px; margin-top: 0;">via AI-powered inquiry form</p>
          
          <div style="background: #f9fafb; border-radius: 12px; padding: 20px; margin: 20px 0;">
            <h3 style="margin-top: 0; font-size: 14px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
            <p style="color: #333; line-height: 1.6; font-size: 15px;">${message}</p>
          </div>

          <div style="background: #f9fafb; border-radius: 12px; padding: 20px; margin: 20px 0;">
            <h3 style="margin-top: 0; font-size: 14px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Budget Range</h3>
            <p style="color: #10a882; font-weight: 600; font-size: 18px;">${budgetLabel}</p>
          </div>

          ${
            fileNames
              ? `<div style="background: #f9fafb; border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; font-size: 14px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Attached Files</h3>
              <p style="color: #333; font-size: 14px;">${fileNames}</p>
            </div>`
              : ""
          }
        </div>
      `,
    });

    return json({
      success:
        "Your inquiry has been sent! I'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return json(
      { error: "Failed to send inquiry. Please try again or contact directly." },
      { status: 500 }
    );
  }
}
