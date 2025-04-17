"use client";

import { FormEvent } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const handleEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          Swal.fire({
            title: "Good job!",
            text: "Email sent successfully!",
            icon: "success",
          });
          form.reset();
        },
        () => {
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong. Please try again.",
            icon: "error",
          });
        }
      );
  };

  return (
    <div>
      <form
        onSubmit={handleEmail}
        className="grid md:grid-cols-2 gap-4 px-6 py-3 max-w-3xl w-full mx-auto"
      >
        <input
          type="text"
          name="first"
          placeholder="First Name *"
          className="px-6 py-3 rounded-full w-full border bg-white"
          required
        />
        <input
          type="text"
          name="last"
          placeholder="Last Name *"
          className="px-6 py-3 rounded-full w-full border bg-white"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          className="px-6 py-3 rounded-full w-full border bg-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          className="px-6 py-3 rounded-full w-full border bg-white"
          required
        />
        <textarea
          name="message"
          placeholder="Message *"
          className="px-6 py-3 rounded-lg w-full h-48 md:col-span-2 resize-none border bg-white"
          required
        />
        <Button type="submit" className="col-span-2">
          Send Mail
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
