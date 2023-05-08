// Remove 'use client' as it's not necessary
import { usePreview } from "../lib/sanity.preview";
import BlogList from "./BlogList";

function PreviewBlogList({ query }) {
  const posts = usePreview(null, query);
  return <BlogList posts={posts} />;
}

export default PreviewBlogList;
