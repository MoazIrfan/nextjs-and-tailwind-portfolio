import Image from "next/image"
import Link from 'next/link'

export default function productivityApp() {

  return (
  <div className="mx-auto md:px-4 max-w-3xl sm:px-6 md:max-w-6xl">

    <div className="my-12  flex flex-col  rounded-lg bg-[url('/productivity-app/productivity-app-bg.jpg')] h-[500px]">

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-black text-5xl font-bold mb-3 md:mt-0 mt-4">
          Productivity App
        </h1>
        <h2 className="text-center text-black text-1xl font-bold mb-6">
          Organize it all with Productivity App.
        </h2>

        <div className="flex row">
          <Link href="https://productivity-app-d5ed8.web.app" target="_blank" rel="noopener noreferrer">
            <button className="rounded text-white text-xs bg-e44232 font-bold mr-4 md:mb-0 px-5 py-3  w-fit">Demo</button>
          </Link>
          <Link href="https://github.com/MoazIrfan/Productivity-App" target="_blank" rel="noopener noreferrer">
            <button className="rounded border border-red-600 focus:outline-red-600 outline-1 text-red-600 text-xs font-bold md:mb-0 px-5 py-3 w-fit">Download</button>
          </Link>
        </div>
      </div>
      
    </div>
    

    <div className="flex flex-col md:flex-row  px-4 md:px-0">
      <div className="md:w-1/2">
        <Image
          src="/productivity-app/productivity-app-add-task.jpg"
          alt="productivity-app-add-task"
          width={475}
          height={271}
          className="rounded-lg"
        />
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">        
        <h3 className="text-2xl font-bold mb-2">
          Free up your mental space
        </h3>
        <p>
          Everything&#39;s organized and accounted for, so you can make progress on the things that are important to you.
        </p>
        <br />
        <p>
          Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list.
        </p>
        <br />
        <p>
          Quick Add &#8211; lets you capture and organize tasks in seconds.
        </p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row mt-12 px-4 md:px-0">
      <div className="md:w-1/2 mb-6 md:mb-0 ">        
        <h3 className="text-2xl font-bold mb-2">
          Projects & tasks
        </h3>
        <p>
          Easily organize your tasks and projects so you can focus on the right things.
        </p>
        <br />
        <p>
          Task status &#8211; know exactly what task been going on and what to work on next.
        </p>
        <br />
        <p>
          Make Project &#8211; keep key projects top of mind.
        </p>
      </div>
      <div className="md:w-1/2 md:pl-10 md:flex md:justify-end">
        <Image
          src="/productivity-app/productivity-app-dashboard.png"
          alt="productivity-app-dashboard"
          width={475}
          height={271}
          className="rounded-lg"
        />
      </div>
    </div>

    <div className="md:w-1/2 md:pr-10 mt-12 px-4 md:px-0">
      <h3 className="text-2xl font-bold mb-2">
        Tech Stack
      </h3>
      <p>
        Build Productivity App from Scratch Using React (Custom Hooks, Context), Firebase.
      </p>
    </div>

  </div>
  )
}
