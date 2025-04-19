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

  const inputField =
    "px-4 py-3 rounded-full w-full border dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none";

  return (
    <form
      onSubmit={handleEmail}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6 md:p-8 max-w-4xl w-full mx-auto"
      data-aos="fade-up"
    >
      <input
        type="text"
        name="first"
        placeholder="First Name *"
        className={inputField}
        required
      />
      <input
        type="text"
        name="last"
        placeholder="Last Name *"
        className={inputField}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number *"
        className={inputField}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        className={inputField}
        required
      />
      <textarea
        name="message"
        placeholder="Message *"
        className={`px-4 py-3 rounded-lg w-full border dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none h-48 resize-none sm:col-span-2`}
        required
      />
      <Button type="submit" className="sm:col-span-2 h-10 w-full">
        Send Mail
      </Button>
    </form>
  );
};

export default ContactForm;
