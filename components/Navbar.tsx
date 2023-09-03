"use client"
import React from "react"
import Link from 'next/link'
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Recent Blogs",
    page: "blog",
  },
  {
    label: "Contact",
    page: "mailto:irfanmoaz@gmail.com",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto sm:px-20  ">
      <div className="justify-between md:items-center md:flex px-4 md:max-w-6xl mx-auto   bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl ">
                  Moaz Irfan
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <React.Fragment key={idx}>
                    {item.page.startsWith("mailto:") ? (
                      <a
                        href={item.page}
                        className="block lg:inline-block text-neutral-400 hover:text-neutral-500 dark:text-neutral-100"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setNavbar(!navbar)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.page}
                        className="block lg:inline-block text-neutral-400 hover:text-neutral-500 dark:text-neutral-100"
                        // activeClass="active"
                        // spy={true}
                        // smooth={true}
                        // offset={-100}
                        // duration={500}
                        onClick={() => setNavbar(!navbar)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </React.Fragment>
                )
              })}
              {/* {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
