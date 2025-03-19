import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts } from "./Data";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Navigation */}
    
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4 text-sm text-gray-600 mb-4"
          >
            <span className="bg-[#c8a45e] text-white px-3 py-1 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              {post.comments} Comments
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Author and Meta Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center mb-8"
          >
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">{post.author}</p>
              <p className="text-gray-600 text-sm">Travel Journalist & Hotel Critic</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 leading-relaxed mb-8"
          >
            {post.excerpt}
          </motion.p>
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[600px] object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full">
              Featured Image
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10"
        >
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#c8a45e] prose-a:text-blue-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-5xl mx-auto mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Photo Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {post.galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="relative group"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-  full h-64 object-cover rounded-lg shadow-md group-hover:shadow-xl transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 rounded-lg" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tags Section */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Related Topics</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-[#c8a45e] hover:text-white cursor-pointer transition duration-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Author Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="max-w-4xl mx-auto mt-16 bg-gray-50 rounded-xl p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-800">About the Author</h3>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold mb-2">{post.author}</h4>
              <p className="text-gray-600 leading-relaxed">{post.authorBio}</p>
              <div className="mt-4 flex gap-4">
                <button className="text-[#c8a45e] hover:text-[#a88544] transition">
                  View Profile
                </button>
                <button className="text-[#c8a45e] hover:text-[#a88544] transition">
                  More Articles
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogDetail;