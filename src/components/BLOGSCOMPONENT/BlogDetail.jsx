import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./Data";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-red-500 text-xl py-10 bg-red-50 px-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-2">Post Not Found</h2>
          <p>
            The blog post you're looking for doesn't exist or has been removed.
          </p>
        </motion.div>
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
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold pt-24 text-gray-900 mb-4"
        >
          {post.title}
        </motion.h1>

        {/* Author and Meta Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center mb-6"
        >
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">{post.author}</p>
            <p className="text-gray-600 text-sm">
              {post.date} • {post.category} • {post.comments} Comments
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Image */}
      {post.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-10"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      )}

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10"
      >
        {/* Render HTML content safely */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-600 mb-3">TAGS</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary-50 hover:text-primary-600 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Gallery Section */}
      {post.galleryImages && post.galleryImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-5xl mx-auto mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Photo Gallery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {post.galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Author Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="max-w-4xl mx-auto mt-12 bg-gray-50 rounded-xl p-6 shadow-sm"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          About the Author
        </h3>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-24 h-24 rounded-full mb-4 md:mb-0 md:mr-6 object-cover"
          />
          <div>
            <h4 className="text-lg font-semibold mb-2">{post.author}</h4>
            <p className="text-gray-600">{post.authorBio}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogDetail;
