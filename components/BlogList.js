import urlFor from "../lib/urlFor";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
function BlogList({ posts }) {
  return (
    <div className="container px-4 py-16 mx-auto">
      <div className="flex flex-wrap -m-2">
        {posts.map((post) => (
          <div key={post._id} className="p-2 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <Image
                className="lg:h-32 md:h-24 w-full object-cover object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author ? post.author.name : "Unknown"}
                layout="responsive"
                width="720"
                height="360"
              />
              <div className="p-4">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {post.categories.map((category) => category.title).join(", ")}
                </h2>
                <h1 className="title-font text-md font-medium text-gray-900 mb-2">
                  {post.title}
                </h1>
                <p className="leading-relaxed mb-2 text-sm">{post.description}</p>
                <div className="flex items-center flex-wrap">
                  <ClientSideRoute route={`/post/${post.slug.current}`}>
                    <a className="text-indigo-500 inline-flex items-center md:mb-1 lg:mb-0 text-sm">
                      Learn More
                      <svg
                        className="w-3 h-3 ml-1"
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
                  {/* Additional elements, such as view count or comment count, can be added here */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
