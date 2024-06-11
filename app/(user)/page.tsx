import BlogList from "@/components/BlogList";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";

const query = groq`
  *[_type == 'post' && !(_id in path("drafts.**"))] {
    ...,
    author->,
    categories[]->
  } | order(publishedAt asc)
`;

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const posts = await client.fetch(query);
  console.log("Fetched posts:", posts);
  return <BlogList posts={posts} />;
}
