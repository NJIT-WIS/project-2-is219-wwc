import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/RichTextComponents";

export const revalidate = 60; // revalidating the page every 60 seconds

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
    <main className="mt-10">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            {post.title}
          </h2>
          {post.categories.map((category) => (
            <a
              key={category._id}
              className="py-2 text-indigo-600 inline-flex items-center justify-center mb-2"
            >
              {category.title}
            </a>
          ))}
        </div>
        <div className="relative w-full h-80 lg:rounded font-bold">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.author ? post.author.name : "Unknown"}
            layout="fill"
            objectFit="cover"
            className="lg:rounded"
          />
        </div>
        <div className="flex py-2">
          {post.author && post.author.image && (
            <Image
              className="h-10 w-10 rounded-full mr-2 object-cover"
              src={urlFor(post.author.image).url()}
              alt={post.author ? post.author.name : "By: Unknown"}
              height={40}
              width={40}
            />
          )}
          <div>
            <p className="font-semibold text-gray-700 text-sm">
              {post.author ? post.author.name : "By: Unknown"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
      </div>
    </main>
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
