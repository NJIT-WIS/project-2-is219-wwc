import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/RichTextComponents";
import MetaTags from "../../../components/metatags";


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
  const baseUrl = "https://njit-wis.github.io/project-2-is219-wwc/";
  const postUrl = `${baseUrl}/post/${post.slug}`;
  const postTitle = `${post.title} - MyWebClass`;
  const postDescription = ""; // Replace with 'post.summary' field from form data
  const postImageURL = urlFor(post.mainImage).url();
  const openFacebookSharePopup = (url) => {
    window.open(url, "facebook-share", "width=640,height=320");
  };
  const openTwitterSharePopup = (url) => {
    window.open(url, "twitter-share", "width=640,height=320");
  };

  return (
    <>
      <MetaTags
        title={postTitle}
        description={postDescription}
        imageURL={postImageURL}
        imageAlt={post.author ? post.author.name : "Unknown"}
        url={postUrl}
      />
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight post-title">
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
          <div className="flex py-2 justify-between items-center">
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
            <div>
              {/* Facebook Share Button */}
              <button
                className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded facebook-share-button"
                onClick={() => {
                  const postUrl = encodeURIComponent(
                    `${baseUrl}/post/${post.slug}`
                  );
                  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`;
                  openFacebookSharePopup(facebookShareUrl);
                }}
              >
                <svg
                  className="w-5 h-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              {/* Twitter Share Button */}
              <button
                className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded twitter-share-button"
                onClick={() => {
                  const postUrl = encodeURIComponent(
                    `${baseUrl}/post/${post.slug}`
                  );
                  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${postUrl}&text=${encodeURIComponent(
                    post.title
                  )}`;
                  openTwitterSharePopup(twitterShareUrl);
                }}
              >
                <svg
                  className="w-5 h-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v-.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4 post-content">
            <PortableText value={post.body} components={RichTextComponents} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
    ...,
    author->,
    categories[]->,
    "slug": slug.current
    }
    `;
  const post = await client.fetch(query, { slug });

  return {
    props: {
      post,
    },
    revalidate: 60, // revalidating the page every 60 seconds
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
