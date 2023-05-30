"use client";

import { Post } from "@/service/posts";
import Posts from "./Posts";
import PostsCategory from "./PostsCategory";
import { useState } from "react";

type Props = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";

export default function PostsWithCategory({ posts, categories }: Props) {
  const [selected, setSelected] = useState<string>(ALL_POSTS);

  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <article className="flex py-10 px-3">
      <section className="w-4/5">
        <Posts posts={filtered} />
      </section>
      <section className="w-1/5 mt-10">
        <PostsCategory
          categories={[ALL_POSTS, ...categories]}
          onClick={setSelected}
          selected={selected}
        />
      </section>
    </article>
  );
}
