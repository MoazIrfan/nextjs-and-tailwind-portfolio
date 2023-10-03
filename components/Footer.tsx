import React from "react"
import Link from 'next/link'
import {
  RiTwitterXFill,
  RiLinkedinFill,
  RiGithubFill
} from "react-icons/ri"
import localFont from '@next/font/local'

const garamond = localFont({
  src: [
    {
      path: '../public/EB_Garamond/EBGaramond-VariableFont_wght.ttf',
      weight: '500',
    }
  ],
  variable: '--font-garamond'
})

const Footer = () => {
  return (
    <footer className="mx-auto mt-12 w-full ">
      <hr className="w-full"></hr>
      <div className="mx-auto  p-4 py-12 text-center text-neutral-900 dark:text-neutral-100">
        
        <h2 style={garamond.style} className="text-2xl bolder mb-2 ">Let&#39;s Connect</h2>
        
        <p className=" leading-loose">If you are interested in working with me, drop me a message!</p>
        <Link href="mailto:irfanmoaz@gmail.com" target="_blank">
          <p className=" hover:underline">irfanmoaz@gmail.com</p>
        </Link><br />

        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          
          <a
            href="https://www.linkedin.com/in/moazirfan"
            rel="noreferrer"
            target="_blank"
          >
            <RiLinkedinFill
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          
          <a
            href="https://twitter.com/MoazIrfan"
            rel="noreferrer"
            target="_blank"
            className="px-4"
          >
            <RiTwitterXFill
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a href="https://github.com/moazirfan" rel="noreferrer" target="_blank">
            <RiGithubFill
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer
