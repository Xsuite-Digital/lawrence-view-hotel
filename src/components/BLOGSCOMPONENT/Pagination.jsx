import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"


export default function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex justify-center mt-12"
    >
      <nav className="flex items-center">
        <button
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-md border border-gray-300 mr-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex space-x-1">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
                currentPage === number ? "bg-[#c8a45e] text-white" : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        <button
          onClick={() => currentPage < pageNumbers.length && paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
          className="p-2 rounded-md border border-gray-300 ml-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          aria-label="Next page"
        >
          <ChevronRight size={18} />
        </button>
      </nav>
    </motion.div>
  )
}

