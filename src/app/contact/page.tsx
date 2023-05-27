import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";

export default function ConatctPage() {
  return (
    <section className="p-10 flex flex-col items-center justify-center">
      <strong className="text-3xl">Contact Me</strong>
      <p className="mt-1">testemail@mail.com</p>
      <ul className="grid grid-cols-3 gap-3 text-5xl mt-5">
        <li>
          <AiFillGithub />
        </li>
        <li>
          <FaPhoneSquareAlt />
        </li>
        <li>
          <AiFillYoutube />
        </li>
      </ul>
      <strong className="mt-16 text-3xl">Or Send me an email!</strong>
      <form
        action="/"
        method="post"
        className="flex flex-col mt-10 bg-slate-700 p-5 rounded-lg w-1/3"
      >
        <label htmlFor="email" className="text-lg text-white mb-2">
          Your Email
        </label>
        <input type="text" id="email" name="email" />
        <label htmlFor="subject" className="text-lg text-white my-2">
          Subject
        </label>
        <input type="text" id="subject" name="subject" />
        <label htmlFor="message" className="text-lg text-white my-2">
          Message
        </label>
        <textarea name="message" id="message" rows={10}></textarea>
        <button
          type="submit"
          className="p-1 mt-4 bg-yellow-300 hover:bg-yellow-400 ease-in-out duration-300 text-xl"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
