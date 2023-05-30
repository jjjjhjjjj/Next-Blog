import Link from "next/link";

const pages = ["home", "about", "posts", "contact"];

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">
        <Link href="/">My blog</Link>
      </h1>
      <nav className="text-xl">
        {pages.map((page) => (
          <Link href={page === "home" ? "/" : `/${page}`} className="px-2">
            {page}
          </Link>
        ))}
      </nav>
    </header>
  );
}
