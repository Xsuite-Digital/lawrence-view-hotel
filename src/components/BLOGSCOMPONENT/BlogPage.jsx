import { useState } from "react";
import { motion } from "framer-motion";
import BlogPosts from "./BlogPosts";
import Pagination from "./Pagination";
import BlogSidebar from "./BlogSidebar";
import { blogPosts } from "./Data";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // Calculate current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white min-h-screen">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 md:py-12"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <BlogPosts posts={currentPosts} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={blogPosts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
          <div className="w-full lg:w-1/3">
            <BlogSidebar />
          </div>
        </div>
      </motion.div>
    </div>
  );
}