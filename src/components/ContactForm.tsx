"use client";

import { useState } from "react";
import Banner, { BannerData } from "./Banner";
import { ContactFormData, submitForm } from "@/service/contact";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initForm);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const { email, subject, message } = form;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    submitForm(form)
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 보냈습니다.",
          state: "success",
        });
        setForm(initForm);
      })
      .catch((error) => {
        console.error(error);
        setBanner({
          message: "메일전송에 실패했습니다. 다시 시도해 주세요",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <>
      <form className="flex flex-col mt-10 bg-slate-700 p-5 rounded-lg w-1/3">
        <label htmlFor="email" className="text-lg text-white mb-2">
          Your Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="subject" className="text-lg text-white my-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={handleChange}
        />
        <label htmlFor="message" className="text-lg text-white my-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={10}
          value={message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          onClick={handleSubmit}
          className="p-1 mt-4 bg-yellow-300 hover:bg-yellow-400 ease-in-out duration-300 text-xl"
        >
          Submit
        </button>
      </form>
      {banner && <Banner banner={banner} />}
    </>
  );
}

const initForm = {
  email: "",
  subject: "",
  message: "",
};
