import path from "path";
import { promises } from "fs";
import { readFile } from "fs/promises";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
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

export async function getPostData(fileName: string): Promise<PostData> {
  const posts = await getPosts();
  const post = posts.find((post) => post.path === fileName);

  const postPath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const content = await readFile(postPath, "utf-8");

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  // const index = posts.indexOf(post);
  // const next = index > 0 ? posts[index - 1] : null;
  // const prev = index < posts.length ? posts[index + 1] : null;

  return { ...post, content };
}
