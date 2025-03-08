import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./Data";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="text-center text-red-500 text-xl py-10">
        Post Not Found
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 md:py-12"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold pt-24 text-gray-900 mb-4">
          {post.title}
        </h1>
        <p className="text-gray-600 text-sm mb-2">
          By {post.author} | {post.date} | {post.comments} Comments
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover rounded-lg shadow-md mb-6"
          />
        )}
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </motion.div>
  );
};

export default BlogDetail;
