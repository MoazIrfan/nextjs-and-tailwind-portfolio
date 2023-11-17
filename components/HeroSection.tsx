"use client"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import localFont from '@next/font/local'

const archivo = localFont({
  src: [
    {
      path: '../public/archivo-narrow/ArchivoNarrow-VariableFont_wght.ttf',
      weight: '400',
    }
  ],
  variable: '--font-archivo'
})


const HeroSection = () => {
  return (
    <section id="home" className="mx-auto max-w-3xl  md:max-w-6xl">
      <div className="flex flex-col items-center justify-center animate-fadeIn animation-delay-2 my-8 py-16 sm:py-32  md:flex-row md:space-x-4 md:text-left">

        <div style={archivo.style} className="pb-8 md:pr-8 md:w-1/2">
          <p className="mt-4 mb-6 text-36 leading-48 tracking-.8">
            I&#39;m Moaz Irfan, a Web Engineer. I&#39;m focused on creating scalable, easy-to-maintain, and performant web applications.
          </p>
          <p className="text-lg tracking-wide font-thin opacity-75">
            Recent Projects: <a className="hover:underline hover:underline-offset-4" target="_blank" rel="noreferrer" href="https://github.com/MoazIrfan/react-tailwind-app">react-tailwind-app</a>, <a className="hover:underline hover:underline-offset-4" target="_blank" rel="noreferrer" href="https://github.com/MoazIrfan/next-blog-app">next-blog-app</a>, <a className="hover:underline hover:underline-offset-4" target="_blank" rel="noreferrer" href="https://github.com/MoazIrfan/cwc-cli">cwc-cli</a>, <a className="hover:underline hover:underline-offset-4" target="_blank" rel="noreferrer" href="https://github.com/MoazIrfan/NestJS-Authentication-Login-Signup">NestJS auth</a>, <a className="hover:underline hover:underline-offset-4" target="_blank" rel="noreferrer" href="https://github.com/MoazIrfan/JavaScript-code-snippets">JavaScript code snippets</a>
          </p>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/moazirfan.jpeg"
            alt="Moaz Irfan Pretending Working"
            width={570}
            height={428}
            className="rounded-lg"
          />
        </div>

      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
