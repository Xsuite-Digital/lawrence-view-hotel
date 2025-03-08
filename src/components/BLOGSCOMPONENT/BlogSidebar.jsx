import { useState } from "react"

import { motion } from "framer-motion"
import { Search, Calendar } from "lucide-react"
import { Link } from "react-router-dom"
import { categories, recentPosts } from "./Data"
import BlogSearch from "./BlogSearch"

export default function BlogSidebar() {
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [filteredPosts, setFilteredPosts] = useState(recentPosts);

  const handleSearch = (query) => {
    setSearchQuery(query);

    const filteredCats = categories.filter((cat) =>
      cat.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCategories(filteredCats);

    const filteredRecent = recentPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filteredRecent);
  };

 
  return (
    <div className="space-y-8">
   <div>
    <BlogSearch />
   </div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gray-50 p-6 rounded-lg"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-900">CATEGORIES</h3>
        <ul className="space-y-3">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <li
                key={category.id}
                className="border-b border-gray-200 pb-2 last:border-0"
              >
                <Link
                  to={`/category/${category.slug}`}
                  className="flex justify-between items-center group"
                >
                  <span className="text-gray-700 group-hover:text-[#c8a45e] transition-colors">
                    {category.name}
                  </span>
                  <span className="bg-[#c8a45e] text-white text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Link>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No categories found.</p>
          )}
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
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="flex gap-3 group">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
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
            ))
          ) : (
            <p className="text-gray-500 text-sm">No posts found.</p>
          )}
        </div>
      </motion.div>
    </div>
  )
}

