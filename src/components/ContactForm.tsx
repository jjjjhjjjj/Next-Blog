"use client";

import { useState } from "react";

type ContactFormData = {
  email: string;
  subject: string;
  message: string;
};

type ShowType = "success" | "error" | "none";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initForm);
  const [isShow, setIsShow] = useState<ShowType>("none");

  const { email, subject, message } = form;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const toggleMessage = (status: ShowType) => {
    setIsShow(status);

    setTimeout(() => setIsShow("none"), 7000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await submitForm(form);
    toggleMessage(response.message);
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
      {isShow !== "none" && (
        <p className="mt-3 text-lg">
          {isShow === "success"
            ? "✅메일이 성공적으로 전송되었습니다."
            : "⛔오류가 발생했습니다. 다시 시도해주세요."}
        </p>
      )}
    </>
  );
}

const initForm = {
  email: "",
  subject: "",
  message: "",
};

async function submitForm(formData: ContactFormData) {
  const res = await fetch(`/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return res.json();
}
