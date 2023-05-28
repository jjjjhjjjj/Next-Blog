import ContactForm from "@/components/ContactForm";
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
      <ContactForm />
    </section>
  );
}
