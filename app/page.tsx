import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import PastProjectsSection from "@/components/PastProjectsSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl ">
      <HeroSection />
      <ProjectsSection />
      <PastProjectsSection />
    </main>
  )
}
