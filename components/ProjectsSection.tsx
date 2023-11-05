import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const myProjects = [
  {
    name: "Productivity App",
    image: "/projects/Productivity-App_Thumbnail@3x.png",
    link: "/projects/productivity-app",
  },
  {
    name: "JavaScript Code Snippets",
    image: "/projects/JavaScript-Code-Snippets_Thumbnail@3x.png",
    link: "https://marketplace.visualstudio.com/items?itemName=MoazIrfan.javascript-code-snippets",
  },
  {
    name: "DevNetwork",
    image: "/projects/Task-Force-Dispatcher_Thumbnail@3x.png",
    link: "/projects/task-force-dispatcher",
  },
  {
    name: "Task Force Dispatcher",
    image: "/projects/DevNetwork_Thumbnail@3x.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "/projects/devnetwork",
  },
  {
    name: "Designer Themes",
    image: "/projects/Designer-Themes_Thumbnail@3x.png",
    link: "/projects/designer-themes",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="my-16 ">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 md:mb-36">
        {myProjects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col align-bottom animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">

                  <div>
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt="project"
                        width={1000}
                        height={1000}
                        className="cursor-pointer rounded-lg shadow-xl"
                      />
                    </Link>
                  </div>      

                </div>
              </SlideUp>
            </div>
          )
        })}   
      </div>
      <hr />
    </section>
  )
}

export default ProjectsSection
