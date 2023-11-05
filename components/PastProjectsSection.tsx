import Image from "next/image"

const projects = [
  {
    image: "/past-projects/desiner-themes.png",
  },
  {
    image: "/past-projects/romerscen.png",
  },
  {
    image: "/past-projects/sky-micro-tech.png",
  },
  {
    image: "/past-projects/real-designer.png",
  },
  {
    image: "/past-projects/task-force-dispatcher-mobile.png",
  },
  {
    image: "/past-projects/bigs-logo.png",
  },
  {
    image: "/past-projects/technologyarena.png",
  },
  {
    image: "/past-projects/sastideal.pk.png",
  },
]

const PastProjectsSection = () => {
  
  return (
    <section id="pastProjects" className="my-16 md:my-20">
      <div className="grid grid-cols-4 gap-2 items-center md:px-52 px-20 ">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
                <div className="flex flex-col  md:flex-row md:space-x-12">

                  <div className="mb-4">
                    <Image
                      src={project.image}
                      alt="past-projects"
                      width={115}
                      height={115}
                      className="filter grayscale opacity-70 hover:filter-none hover:opacity-100 transition duration-300 cursor-pointer"
                    />
                  </div>

                </div>
            </div>
          )
        })}   
        
      </div>
      <Image
          src="/past-projects/past-projects.png"
          alt="past-projects"
          width={970}
          height={90}
          className="mx-auto"
        />
    </section>
  )
}

export default PastProjectsSection
