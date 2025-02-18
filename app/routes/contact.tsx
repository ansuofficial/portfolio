import NavBar from "~/components/NavBar";
import { BiPhone, BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { MetaFunction } from "@remix-run/node";

import { json } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Form, useActionData } from "@remix-run/react";
import { Resend } from "resend";
import { useEffect, useState } from "react";


export const meta: MetaFunction = () => {
  return [
    { title: "Contact" },
    {
      name: "Connect with ansu",
      content:
        "Ansumana Badjie contact information, contact Ansu Gambia, Contact Ansumana Badjie Gambian developer, connect with JassehCodeCamp developer, Ansu's contact information, Ansu Badjie gambian developer contact info",
    },
  ];
};

const resend = new Resend("REMOVED_RESEND_API_KEY");
export async function action({ request }: any) {
  let formData = await request.formData();
  let name = formData.get("name");
  let email = formData.get("email");
  let message = formData.get("message");

  if (!name || !email || !message) {
    return json({ error: "All fields are required." }, { status: 400 });
  }

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "badjieansu165@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return json({ isSubmitted: true, success: "Message sent successfully!" });
  } catch (error) {
    return json(
      { isSubmitted: true, error: "Failed to send email." },
      { status: 500 }
    );
  }
}

function contact() {
  const actionData: any = useActionData();
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (actionData?.isSubmitted) {
      setShowMessage(true);
      setIsLoading(false); // Reset loading state
      setFormData({ name: "", email: "", message: "" }); // Reset form fields

      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 7000);

      return () => clearTimeout(timer);
    }

    if (actionData?.error) {
      setIsLoading(false);
    }
  }, [actionData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
  setIsLoading(true); // Set loading state on submit
};

  return (
    <main
      className={`bg-dark bg-cover bg-center bg-no-repeat min-h-screen absolute left-0 right-0 bg-fixed`}
    >
      {showMessage && (
        <div
          className={`bg-gradient-to-l from-transparent ${
            actionData?.success ? "to-green-400" : "to-red-500"
          } px-4 py-2 max-w-lg mx-auto rounded-sm absolute bottom-0`}
        >
          <p className="tracking-wider text-white text-sm font-bold capitalize">
            {actionData?.success || actionData?.error}
          </p>
        </div>
      )}
      <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-4 mb-8">
        <NavBar />
        {/* STL */}
        <div className="flex sm:flex-row flex-col sm:gap-x-6  justify-center items-center mx-auto">
          <div className="flex">
            <div className="flex gap-x-6">
              <div className="text-center flex flex-col justify-between py-6">
                <div>
                  <BiPhone className="md:w-5 md:h-5 w-3 h-3 text-white mx-auto" />
                  <span className="uppercase text-sm font-bold text-white">
                    Phone
                  </span>
                </div>
                <p className="tracking-wide text-white md:text-sm text-xs">
                  +220 3338111
                </p>
              </div>
              <div className="mx-4 h-28 w-[1px]  bg-gradient-to-t from-transparent to-primary"></div>
            </div>
            <div className="flex">
              <div className="text-center flex flex-col justify-between py-6 sm:px-4">
                <div>
                  <MdEmail className="md:w-5 md:h-5 w-3 h-3 text-white mx-auto" />
                  <span className="uppercase text-sm font-bold text-white ">
                    Email
                  </span>
                </div>
                <p className="tracking-wide text-white md:text-sm text-xs">
                  ansucoder@gmail.com
                </p>
              </div>
              <div className="sm:mx-4 h-28 w-[1px] bg-gradient-to-t from-transparent to-primary hidden sm:grid"></div>
            </div>
          </div>
          <div className="space-y-6 hidden sm:flex flex-col items-center">
            <div className="text-center flex flex-col justify-between py-6">
              <div>
                <BiLocationPlus className="md:w-5 md:h-5 w-3 h-3 text-white mx-auto" />
                <span className="uppercase text-sm font-bold text-white">
                  Address
                </span>
              </div>
              <p className="tracking-wide text-white md:text-sm text-xs">
                Serrekunda, The Gambia
              </p>
            </div>
            <div className="w-28 h-[1px] bg-gradient-to-t from-transparent to-primary sm:hidden"></div>
          </div>
        </div>
        <div className="lg:flex lg:items-start gap-x-12 justify-between space-y-2">
          <Form method="post" className="space-y-6 mb-6 lg:mb-0 w-full" onSubmit={handleSubmit}>
            <div className="mb-2">
              <h4 className="text-white tracking-wide uppercase">
                I'd love to chat!
              </h4>
            </div>
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="px-4 p-2 w-full rounded-lg bg-gray-100/25 text-white ring-1 ring-green-100/25 outline-none"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="px-4 p-2 w-full rounded-lg bg-gray-100/25 text-white ring-1 ring-green-100/25 outline-none"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                rows={5}
                name="message"
                placeholder="Message"
                required
                className="px-4 p-2 w-full rounded-lg bg-gray-100/25 text-white ring-1 ring-green-100/25 outline-none"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary text-white md:text-sm text-xs uppercase font-bold tracking-wider p-4 rounded-lg"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </Form>

          <div className="flex flex-col gap-y-6 items-end w-full">
            <div className="p-4 rounded-lg space-y-4 bg-green-100/70 backdrop-blur">
              <p className="lg:text-sm text-gray-950 w-full">
                As a software developer, I'm always open to connecting with
                fellow professionals and discussing potential collaborations.
                Feel free to reach out via email or connect with me on social
                media to stay updated on my latest projects and insights.
              </p>
            </div>
            <div className="p-4 space-y-6 bg-green-100/70 rounded-md w-full">
              <div className="space-y-2">
                <h4 className="text-gray-950 tracking-wide uppercase">
                  Let's connect
                </h4>
                <div className="flex gap-x-4">
                  <Link
                    to={"https://www.linkedin.com/in/ansu-badjie-3a979b280/"}
                    target="_blank"
                  >
                    <LiaLinkedin className="w-5 h-5 text-gray-950" />
                  </Link>
                  <Link to={"https://x.com/ansucoder"} target="_blank">
                    <BsTwitterX className="w-5 h-5 text-gray-950" />
                  </Link>
                  <Link to={"https://github.com/ansuofficial"} target="_blank">
                    <FaGithub className="w-5 h-5 text-gray-950" />
                  </Link>
                </div>
              </div>
              <p className="text-gray-950 tracking-wide uppercase text-xs md">
                I hope to hear from you soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default contact;
