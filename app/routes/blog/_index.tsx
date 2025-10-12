import { Link } from '@remix-run/react'
import { BiRightArrowAlt } from 'react-icons/bi'
import React from 'react'

const blogs = [
    {
        id: 1,
        slug: "event-bubbling-in-javascript",
        title: "Event Bubbling in JavaScript",
        "blog-description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis ipsa dolore voluptate qui. Eaque magni aut dolores ad ducimus tempore, explicabo vero expedita? Vitae nulla incidunt sit laborum dignissimos."
    },
     {
        id: 2,
        slug: "event-loops",
        title: "Event Loops",
        "blog-description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis ipsa dolore voluptate qui. Eaque magni aut dolores ad ducimus tempore, explicabo vero expedita? Vitae nulla incidunt sit laborum dignissimos."
    },
    
    {
        id: 3,
        slug: "event-bubbling-in-javascript",
        title: "Event Bubbling in JavaScript",
        "blog-description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis ipsa dolore voluptate qui. Eaque magni aut dolores ad ducimus tempore, explicabo vero expedita? Vitae nulla incidunt sit laborum dignissimos."
    },
     {
        id: 4,
        slug: "event-loops",
        title: "Event Loops",
        "blog-description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis ipsa dolore voluptate qui. Eaque magni aut dolores ad ducimus tempore, explicabo vero expedita? Vitae nulla incidunt sit laborum dignissimos."
    },
]

function blog() {
  return (
  <main>
    <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 space-y-4 mb-8">
        <div>
        <h1 className="text-white text-xl font-bold">Blogs</h1>
        <p className="text-white text-sm leading-6 tracking-wide"> Over the years I’ve published a few dozen articles — some more noteworthy than others. </p>
        <p className="text-white text-sm leading-6 tracking-wide">Over the years I’ve published a few dozen articles — some more noteworthy than others. </p>
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
                      Read this blog <BiRightArrowAlt className="group-hover:translate-x-2 duration-500 ease-in-out"/>
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