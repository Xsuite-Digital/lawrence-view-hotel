import { useState } from "react"

import { motion } from "framer-motion"
import { Search, Calendar } from "lucide-react"
import { Link } from "react-router-dom"
import { categories, recentPosts } from "./Data"

export default function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="space-y-8">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 p-6 rounded-lg"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-900">SEARCH</h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#c8a45e] focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#c8a45e]"
          >
            <Search size={18} />
          </button>
        </form>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gray-50 p-6 rounded-lg"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-900">CATEGORIES</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.id} className="border-b border-gray-200 pb-2 last:border-0">
              <Link to={`/category/${category.slug}`} className="flex justify-between items-center group">
                <span className="text-gray-700 group-hover:text-[#c8a45e] transition-colors">{category.name}</span>
                <span className="bg-[#c8a45e] text-white text-xs px-2 py-1 rounded-full">{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Recent Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-50 p-6 rounded-lg"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-900">RECENT POSTS</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="flex gap-3 group">
              <div className="relative w-20 h-20 flex-shrink-0">
                <img
                  src={post.image }
                  alt={post.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#c8a45e] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Calendar size={12} className="mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

