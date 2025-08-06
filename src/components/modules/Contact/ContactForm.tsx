/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await axios.post(
        "https://server.shrlbd.com/api/v1/contact/create",
        data
      );

      console.log("Response:", response.data);
      reset();
      toast.success("Message Sent Successfully!");
    } catch (error: any) {
      console.error("Submission Error:", error);
      toast.error("Failed to send message. Please try again later");
    }
  };

  const inputField =
    "px-4 py-3 rounded-full w-full border dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-6 md:p-8 max-w-4xl w-full mx-auto"
      data-aos="fade-up"
    >
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
        className={inputField}
      />

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: true })}
        className={inputField}
      />

      <input
        type="text"
        placeholder="Subject"
        {...register("subject", { required: true })}
        className={`${inputField} sm:col-span-2`}
      />

      <textarea
        placeholder="Message *"
        {...register("message", { required: true })}
        className={`px-4 py-3 rounded-lg w-full border dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none h-48 resize-none sm:col-span-2`}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="sm:col-span-2 h-10 w-full"
      >
        {isSubmitting ? "Sending..." : "Send Mail"}
      </Button>
    </form>
  );
};

export default ContactForm;
