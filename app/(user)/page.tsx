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



export default async function HomePage() {
   
//     draftMode().disable()
//      console.log(draftMode().isEnabled);
//   if (draftMode().isEnabled) {
//     return <div>Preview Mode</div>;
//   }

  const posts = await client.fetch(query);
  console.log(posts.length)
  return (
        <BlogList posts={posts}/>
  );
}
