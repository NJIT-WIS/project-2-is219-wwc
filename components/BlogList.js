import urlFor from "../lib/urlFor";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
function BlogList({ posts }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {posts.map((post) => (
            <div key={post._id} className="py-8 flex flex-wrap md:flex-nowrap blog-post">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700">
                  {post.categories.map((category) => category.title).join(", ")}
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2" id={`post-${post._id}`}>
                  {post.title}
                </h2>
                <p className="leading-relaxed">{post.description}</p>
                <ClientSideRoute route={`/post/${post.slug.current}`}>
                  <a className="text-indigo-500 inline-flex items-center mt-4">
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </ClientSideRoute>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;
