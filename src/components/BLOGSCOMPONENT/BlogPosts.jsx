"use client"

import { motion } from "framer-motion"
import { Calendar, User, MessageSquare, Tag } from "lucide-react"
import { Link } from "react-router-dom"



export default function BlogPosts({ posts }) {
  return (
    <div className="space-y-12">
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border-b border-gray-200 pb-12 last:border-0"
        >
          <Link to={`/blog/${post.slug}`}>
            <div className="relative h-[300px] md:h-[400px] mb-6 overflow-hidden rounded-lg">
              <img
                src={post.image }
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Link>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 hover:text-[#c8a45e] transition-colors">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>

          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-4">
            <div className="flex items-center">
              <Calendar size={16} className="mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-1" />
              <span>{post.author}</span>
            </div>
            {post.comments && (
              <div className="flex items-center">
                <MessageSquare size={16} className="mr-1" />
                <span>{post.comments} Comments</span>
              </div>
            )}
            {post.category && (
              <div className="flex items-center">
                <Tag size={16} className="mr-1" />
                <span>{post.category}</span>
              </div>
            )}
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

          <Link to={`/blog/${post.slug}`} className="inline-block text-[#c8a45e] font-medium hover:underline">
            Read more
          </Link>
        </motion.article>
      ))}
    </div>
  )
}

