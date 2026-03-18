import { Link } from '@remix-run/react'
import { BiRightArrowAlt } from 'react-icons/bi'
import React from 'react'

const blogs = [
    {
        id: 1,
        slug: "event-bubbling-in-javascript",
        title: "Event Bubbling in JavaScript",
        "blog-description": "A practical breakdown of event bubbling, propagation, and how to debug unexpected handler behavior in real applications."
    },
     {
        id: 2,
        slug: "event-loops",
        title: "Event Loops",
        "blog-description": "How the JavaScript event loop actually schedules work—microtasks vs macrotasks, and why it matters for UI responsiveness."
    },
    
    {
        id: 3,
        slug: "event-bubbling-in-javascript",
        title: "Event Bubbling in JavaScript",
        "blog-description": "Real-world patterns for working with events in component-heavy UIs, including delegation and predictable interaction handling."
    },
     {
        id: 4,
        slug: "event-loops",
        title: "Event Loops",
        "blog-description": "A deeper look at async behavior and rendering: avoiding jank, preventing race conditions, and keeping interfaces responsive."
    },
]

function blog() {
  return (
  <main>
    <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-4 mb-8">
        <div>
        <h1 className="text-white text-xl font-bold">Blogs</h1>
        <p className="text-white text-sm leading-6 tracking-wide"> Notes on frontend engineering: performance, architecture, and the details that make products reliable. </p>
        <p className="text-white text-sm leading-6 tracking-wide"> Short, practical write-ups focused on how things work—and how to debug them. </p>
        </div>

        <div className='flex flex-col gap-y-12'>
            {blogs.map((blog) => {
                return   <div>
                    <div className="bg-green-100/55 backdrop-blur px-4 py-2 rounded-lg">
                      <Link to={`/blog/${blog.id}`} className="text-gray-950 uppercase font-bold tracking-wide hover:underline decoration-primary">
                        {blog.title}
                      </Link>
                      <p className="text-gray-950 text-sm leading-6">
                        {blog['blog-description']}
                      </p>
                      <Link to={`/blog/${blog.slug}`} className="flex items-center gap-2 mt-6 hover:underline decoration-primary group ">
                      Read article <BiRightArrowAlt className="group-hover:translate-x-2 duration-500 ease-in-out"/>
                      </Link>
                    </div>
                  </div>
            })}
        </div>
    </div>
  </main>
  )
}

export default blog