import Image from "next/image"
import Link from 'next/link'

export default function devnetwork() {

  return (
  <div>

    <div className="mb-12 pb-12 md:pt-16 md:pb-48 bg-gradient">
      <div className="mx-auto md:px-4 max-w-3xl  sm:px-6 md:max-w-6xl  flex flex-col md:p-0 md:flex-row md:text-left ">

        <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start md:text-left mt-8 md:mt-0">
          <h1 className="text-center text-white text-5xl font-bold mb-3 md:text-left">
            DevNetwork
          </h1>
          <h2 className="text-center text-white text-1xl font-bold mb-6 md:text-left">
            WHERE DEVELOPERS LEARN, SHARE & BUILD CAREER.
          </h2>
          <Link href="https://github.com/MoazIrfan/DevNetwork" target="_blank" rel="noopener noreferrer">
            <button className="rounded-full text-black text-xs bg-white mb-4 md:mb-0 px-5 py-3 hover:bg-gray w-fit">
              Download
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 px-4 flex justify-center">        
          <Image
            src="/devNetwork/dev-network.png"
            alt="devNetwork"
            width={660}
            height={372}
            className="rounded-lg"
          />
        </div>
        
      </div>
    </div>

    <div className="mx-auto max-w-3xl px-4 md:px-4 sm:px-6 md:max-w-6xl flex flex-col  md:flex-row md:text-left">

      <div className="md:w-2/3 flex flex-col md:items-start md:text-left md:pr-20">
        <h3 className="text-2xl font-bold mb-4">
          DevNetwork
        </h3>
        <p className="mb-10 ">
          A Stack Overflow inspired app built with the MERN stack, where developers Learn, Share & Build Career.

          You can do everything form creating your own profile, to adding forms of experience, education, social media, and the option to show your latest repositories if you have a github account.

          Additionally, you are able to add question, like, and reply to comments, and look up other&#39;s profiles
        </p>
      </div>

      <div className="md:w-1/3">        
        <h3 className="text-2xl font-bold mb-2">
          Tech Stack
        </h3>
        <p className="mb-4">Mern Stack, React, Redux, NodeJS, Express</p>
        <h3 className="text-2xl font-bold mb-2">
          Date
        </h3>
        <p>June 19, 2019</p>
      </div>

    </div>

  </div>  
  )
}
