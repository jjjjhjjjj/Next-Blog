"use client";

import { Post } from "@/service/posts";
import Posts from "./Posts";
import PostsCategory from "./PostsCategory";
import { useState } from "react";

type Props = {
  posts: Post[];
};

export default function PostsWithClient({ posts }: Props) {
  const [selected, setSelected] = useState<string>("All Posts");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected((e.target as HTMLLIElement).innerText);
  };

  const filtered = () => {
    if (selected === "All Posts") return posts;

    return posts.filter((post) => post.category === selected);
  };

  return (
    <section className="flex py-10 px-3">
      <Posts posts={filtered()} />
      <div className="flex flex-col items-center w-1/5 mt-10">
        <strong className="text-xl border-b-2 border-b-cyan-400">
          Category
        </strong>
        <PostsCategory onClick={handleClick} selected={selected} />
      </div>
    </section>
  );
}
