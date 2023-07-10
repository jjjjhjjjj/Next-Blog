import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <article className="flex flex-col items-center ">
      <Image
        src="./images/jordy2.png"
        width={180}
        height={180}
        alt="Profile"
        className="rounded-full drop-shadow-xl"
      />
      <h3 className="text-2xl">Hi, This is My Blog</h3>
      <p className="text-lg">Study Next.js</p>
      <Link
        href="/contact"
        className="mt-2 px-3 py-1 rounded-lg font-semibold bg-yellow-300 hover:bg-yellow-400"
      >
        Contact Me
      </Link>
    </article>
  );
}
