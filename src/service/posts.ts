import path from "path";
import fs, { promises } from "fs";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await promises.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();

  return posts;
}

export function getPost(postId: string) {
  const postPath = path.join(process.cwd(), "data", "posts", `${postId}.md`);
  const fileContents = fs.readFileSync(postPath, "utf8");

  return fileContents;
}
