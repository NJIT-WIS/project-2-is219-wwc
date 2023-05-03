import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/RichTextComponents";

export const revalidate = 60; //revalitating the page every 60 seconds

export async function generateStaticParams() {
  const query = groq`
    *[_type=='post'][0]
    {
      slug
    }
    `;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

function Post({ post }) {
  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border-[#3b82f6] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top0 w-4 h-4 opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-left lg:object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author ? post.author.name : "Unknown"}
              fill
            />
          </div>
          <section className="p-5 bg-black w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {post.author && post.author.image && (
                  <Image
                    className="rounded-full"
                    src={urlFor(post.author.image).url()}
                    alt={post.author ? post.author.name : "By: Unknown"}
                    height={40}
                    width={40}
                  />
                )}
                <div>
                  <h3 className="text-lg font-bold">
                    {post.author ? post.author.name : "By: Unknown"}
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <div className="bg-white text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                    <p>{category.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
    ...,
    author->,
    categories[]->
    }
    `;
  const post = await client.fetch(query, { slug });

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const query = groq`*[_type=='post']{ 'slug': slug.current }`;
  const slugs = await client.fetch(query);
  const paths = slugs.map((slug) => ({ params: { slug: slug.slug } }));

  return {
    paths,
    fallback: false,
  };
}

export default Post;
