import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "../../components/SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const myBlogs = [
  {
    title: "NestJS App with Authentication: Login and Signup",
    description: "Published an article on creating NestJS App with Authentication. We'll dive into building login and sign-up functionalities, connecting to PostgreSQL, and using TypeORM for database management. Follow this tutorial to learn how to authenticate users and perform authorization using access tokens.",
    date: "August 20, 2023",
    image: "/blog/nestjs-article-moazrfan.png",
    link: "https://www.linkedin.com/pulse/nestjs-app-authentication-login-signup-moaz-irfan",
  },
  
]

const ProjectsSection = () => {
  return (
    <div className="my-24 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl md:px-52">

      <div className="grid grid-cols-1 md:grid-cols-1 gap-16 mb-24 md:mb-36">
        {myBlogs.map((blog, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col align-bottom animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">

                  
                    <Link href={blog.link} target="_blank">
                      <Image
                        src={blog.image}
                        alt=""
                        width={780}
                        height={400}
                        className="cursor-pointer rounded-lg shadow-xl"
                      />
                      <h1 className="text-3xl font-bold my-4 ">
                        {blog.title}
                      </h1>
                      <p className="mb-2 text-gray-500">
                        {blog.date}
                      </p>
                      <p>
                        {blog.description}
                      </p>
                      <h4 className="text-blue-500 hover:text-blue-700 transition duration-300 my-2">
                        Read on LinkedIn
                      </h4>
                      
                    </Link>
                      

                </div>
              </SlideUp>
            </div>
          )
        })}   
      </div>
    </div>
  )
}

export default ProjectsSection
