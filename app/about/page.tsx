import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

export default function About() {
  return (
    <div className="my-24 mx-auto max-w-3xl px-4 md:px-0 sm:px-6 md:max-w-6xl flex flex-col  md:flex-row md:text-left">

      <div className="flex flex-col md:flex-row  px-4">
        <div className="md:w-1/2 md:pr-16">
          <h1 className="text-3xl font-bold mb-6 md:text-left">
            Front-End Focused, Full-Stack Adept
          </h1>
          <p>
            Hi, I&#39;m Moaz Irfan. I&#39;ve been developing digital products for over half a decade. In my career, I&#39;ve had the opportunity to work on impactful projects for Fortune 100 companies. Authored software tools used by thousands of users. See them on <a target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700" href="https://github.com/moazirfan">GitHub</a>.
          </p>
          <br />
          <p>
            I&#39;ve always loved Computer Science and my passion for computer science naturally led me to pursue a career as a software engineer.
          </p>
          <br />
          <p>
            I focus on creating performant web applications, where I use my computer science background to craft software that is maintainable, scalable, and a pleasure to use.
          </p>
          <br />
          
        </div>

        <div className="md:w-1/2 md:flex md:justify-end">
          <Image
            src="/moaz-irfan.jpeg"
            alt="moaz-irfan"
            width={470}
            height={571}
            className="rounded"
          />
        </div>
      </div>
      
    </div>
  )
}
