// pages/sample-blog-post.js
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout'
import TableOfContents from '../../components/sidepanel';

const tocItems = [
  {
    id: 'introduction',
    title: 'Introduction',
  },
  {
    id: 'section-1',
    title: 'Section 1',
    subitems: [
      {
        id: 'subsection-1-1',
        title: 'Subsection 1.1',
      },
      {
        id: 'subsection-1-2',
        title: 'Subsection 1.2',
      },
    ],
  },
  {
    id: 'section-2',
    title: 'Section 2',
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
  },
];

const SampleBlogPost = () => {
  return (
    <>
      <Head>
        <title>Sample Blog Post</title>
      </Head>
      <TableOfContents items={tocItems} />
      <article>
        <section id="introduction">
          <h1>Introduction</h1>
          <p>Welcome to our sample blog post. This post demonstrates the use of nested navigation with a Table of Contents component.</p>
        </section>
        <section id="section-1">
          <h2>Section 1</h2>
          <p>Section 1 content goes here.</p>
          <section id="subsection-1-1">
            <h3>Subsection 1.1</h3>
            <p>Subsection 1.1 content goes here.</p>
          </section>
          <section id="subsection-1-2">
            <h3>Subsection 1.2</h3>
            <p>Subsection 1.2 content goes here.</p>
          </section>
        </section>
        <section id="section-2">
          <h2>Section 2</h2>
          <p>Section 2 content goes here.</p>
        </section>
        <section id="conclusion">
          <h2>Conclusion</h2>
          <p>That's the end of our sample blog post. We hope you found the nested navigation useful!</p>
        </section>
      </article>
    </>
  );
};

export default SampleBlogPost;