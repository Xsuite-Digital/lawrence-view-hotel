import React from 'react'
import BlogPage from '../components/BLOGSCOMPONENT/BlogPage'

const Blogs = () => {
  return (
    <div>
       <div className="bg-black text-white p-12 text-center">
        <h1 className="text-4xl text-white md:text-5xl mt-24  font-serif mb-2">Our Blog</h1>
        <p className="text-[#b89628] italic">Discover stories from Lawrence View Hotel</p>
      </div>

      <BlogPage />
    </div>
  )
}

export default Blogs
