import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  { id: 1, title: "10 EXCEPTIONAL FEATURES THAT MAKE LAWRENCE VIEW HOTEL YOUR PREMIER DESTINATION", path: "/blog/10-exceptional-features" },
  { id: 2, title: "SERENITY REDEFINED: THE TRANSFORMATIVE WELLNESS JOURNEY AT LAWRENCE VIEW HOTEL", path: "/blog/wellness-sanctuary-experience" },
  // { id: 3, title: "Why Choose Lawrence View Hotel?", path: "/why-choose-us" },
  // { id: 4, title: "Top 5 Attractions Near Lawrence View Hotel", path: "/top-attractions" },
  // { id: 5, title: "Our Exclusive Suites and Services", path: "/exclusive-suites" },
  // { id: 6, title: "Customer Experiences and Testimonials", path: "/customer-experiences" },
];

export default function BlogSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredBlogs(blogs);
    } else {
      const filtered = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto"
    >
      <h3 className="text-xl font-bold mb-4 text-gray-900">Search Blogs</h3>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none  focus:border-transparent"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
      </div>
      <ul className="divide-y divide-gray-200">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <li key={blog.id} className="py-3">
              <Link to={blog.path} className="text-[#c4a053] hover:underline">
                {blog.title}
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No blogs found.</p>
        )}
      </ul>
    </motion.div>
  );
}
