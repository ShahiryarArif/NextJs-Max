import React from "react";

const BlogPostPage = ({ params }) => {
  return (
    <main>
      <h1>BlogPostPage</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default BlogPostPage;
