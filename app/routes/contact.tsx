import { memo, useEffect, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, useActionData, Link } from "@remix-run/react";
import { Resend } from "resend";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact | Ansu Badjie" },
    {
      name: "description",
      content:
        "Get in touch with Ansumana Badjie - Frontend Developer. Available for strategic projects, collaborations, and discussions about modern web development.",
    },
  ];
};

const resend = new Resend("REMOVED_RESEND_API_KEY");

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const projectType = formData.get("projectType") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return json({ error: "All fields are required." }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "badjieansu165@gmail.com",
      subject: `New Contact: ${projectType || "General Inquiry"} from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return json({ isSubmitted: true, success: "Message sent successfully!" });
  } catch (error) {
    return json(
      { isSubmitted: true, error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  as?: "input" | "textarea" | "select";
  rows?: number;
  options?: Array<{ value: string; label: string }>;
}

const FormField = memo(({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  error,
  as = "input",
  rows = 5,
  options,
}: FormFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          isFocused || hasValue
            ? "top-2 text-xs text-primary"
            : "top-4 text-sm text-white/60"
        }`}
      >
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 pt-6 pb-3 rounded-xl bg-white/5 text-white border border-white/10 outline-none transition-all duration-200 resize-none ${
            isFocused
              ? "border-primary ring-2 ring-primary/20 bg-white/8"
              : "hover:border-white/15"
          } ${error ? "border-red-500/50" : ""}`}
        />
      ) : as === "select" ? (
        <div className="relative">
          <select
            id={name}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`w-full px-4 pt-6 pb-3 rounded-xl bg-white/5 text-white border border-white/10 outline-none transition-all duration-200 appearance-none cursor-pointer ${
              isFocused
                ? "border-primary ring-2 ring-primary/20 bg-white/8"
                : "hover:border-white/15"
            } ${error ? "border-red-500/50" : ""} ${
              !hasValue && !isFocused ? "text-transparent" : "text-white"
            }`}
          >
            <option value="" disabled hidden className="bg-slate-900 text-white/40">
              Select project type
            </option>
            {options?.map((option) => (
              <option key={option.value} value={option.value} className="bg-slate-900 text-white">
                {option.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className={`w-5 h-5 text-white/60 transition-transform duration-200 ${
                isFocused ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 pt-6 pb-3 rounded-xl bg-white/5 text-white border border-white/10 outline-none transition-all duration-200 ${
            isFocused
              ? "border-primary ring-2 ring-primary/20 bg-white/8"
              : "hover:border-white/15"
          } ${error ? "border-red-500/50" : ""}`}
        />
      )}
      {error && (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

FormField.displayName = "FormField";

type ActionData = 
  | { error: string }
  | { isSubmitted: boolean; success: string }
  | { isSubmitted: boolean; error: string }
  | undefined;

function Contact() {
  const actionData = useActionData<typeof action>() as ActionData;
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    if (actionData && "isSubmitted" in actionData) {
      setShowMessage(true);
      setIsLoading(false);
      if ("success" in actionData && actionData.success) {
        setFormData({ name: "", email: "", projectType: "", message: "" });
      }

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }

    if (actionData && "error" in actionData && !("isSubmitted" in actionData)) {
      setIsLoading(false);
    }
  }, [actionData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    setIsLoading(true);
  };

  const projectTypes = [
    { value: "web-app", label: "Web Application" },
    { value: "website", label: "Website / Landing Page" },
    { value: "consultation", label: "Technical Consultation" },
    { value: "collaboration", label: "Collaboration Opportunity" },
    { value: "other", label: "Other" },
  ];

  return (
    <main className="mt-8">
      {/* Success/Error Message */}
      {showMessage && (
        <div
          className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-xl backdrop-blur-xl border transition-all duration-300 ${
            actionData && "success" in actionData
              ? "bg-primary/20 border-primary/30 text-white"
              : "bg-red-500/20 border-red-500/30 text-white"
          }`}
          role="alert"
        >
          <p className="text-sm font-semibold">
            {(actionData && "success" in actionData && actionData.success) ||
              (actionData && "error" in actionData && actionData.error)}
          </p>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Compelling Content */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Let's Build Something
                <span className="block text-primary">Exceptional</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                I specialize in crafting high-performance, visually engaging digital
                experiences. Whether you're launching a new product or elevating an
                existing platform, let's discuss how we can bring your vision to life.
              </p>
            </div>

            {/* Trust-Building Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold">Strategic Development</p>
                  <p className="text-white/60 text-sm">
                    Focused on scalable solutions that deliver real business impact
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold">Modern Stack</p>
                  <p className="text-white/60 text-sm">
                    React, Remix, TypeScript, and cutting-edge UI technologies
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="text-white font-semibold">Fast Response</p>
                  <p className="text-white/60 text-sm">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Availability & Contact Info */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
                <span className="text-white font-semibold">Available for Projects</span>
              </div>
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:ansucoder@gmail.com"
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    ansucoder@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide mb-2">
                    Connect
                  </p>
                  <div className="flex gap-4">
                    <Link
                      to="https://www.linkedin.com/in/ansu-badjie-3a979b280/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-primary transition-all duration-200 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <LiaLinkedin className="w-5 h-5" />
                    </Link>
                    <Link
                      to="https://x.com/ansucoder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-primary transition-all duration-200 hover:scale-110"
                      aria-label="Twitter"
                    >
                      <BsTwitterX className="w-5 h-5" />
                    </Link>
                    <Link
                      to="https://github.com/ansuofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-primary transition-all duration-200 hover:scale-110"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="glass rounded-2xl p-8 space-y-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/20">
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-2">
                  Start a Conversation
                </h2>
                <p className="text-white/60 text-sm">
                  Share your project details and I'll get back to you promptly.
                </p>
              </div>

              <Form method="post" className="space-y-5" onSubmit={handleSubmit}>
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  error={actionData && "error" in actionData && !("isSubmitted" in actionData) && !formData.name ? "Name is required" : undefined}
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  error={actionData && "error" in actionData && !("isSubmitted" in actionData) && !formData.email ? "Email is required" : undefined}
                />

                <FormField
                  label="Project Type"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  as="select"
                  options={projectTypes}
                />

                <FormField
                  label="Project Details"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  as="textarea"
                  rows={6}
                  error={actionData && "error" in actionData && !("isSubmitted" in actionData) && !formData.message ? "Message is required" : undefined}
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-primary/20"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default memo(Contact);
