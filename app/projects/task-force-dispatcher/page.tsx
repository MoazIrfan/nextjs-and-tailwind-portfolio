import Image from "next/image"

export default function taskForceDispatcher() {

  return (
  <div>

    <div className="my-12 mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl  flex flex-col md:flex-row md:text-left ">
      <video src={'/task-force-dispatcher/task-force-dispatcher-demo.mp4'} poster="/task-force-dispatcher/task-force-dispatcher-web.png" controls height="100%" width="100%"></video>
    </div>

    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-6xl flex flex-col  md:flex-row md:text-left">
      {/* Column One */}
      <div className="md:w-2/3 flex flex-col md:items-start md:text-left md:pr-20">
        <h3 className="text-4xl font-bold mb-4">
          Task Force Dispatcher
        </h3>
        <h4 className="text-1xl font-bold mb-4">
          SEE YOUR MOBILE TEAM IN REAL TIME & ASSIGN THEM JOB ACCORDINGLY
        </h4>
        <p>
          “Task Force Dispatcher” is a management tool that improves the efficiency of your mobile teams. Agents are shown on a map, making it easy to assign jobs to the nearest available team member. By getting real-time visibility into where teams are, work can be scheduled in a smarter, more efficient way.
        </p>
        <br />
        <p>
          Two portions are involved in the project:
        </p>
        <br />
        <ul>
          <li>Mobile Agents</li>
          <li>Dispatcher Side</li>
        </ul>
        <br />
        
        {/* Mobile Agents */}
        <h3 className="text-2xl font-bold mb-4">
          Mobile Agents
        </h3>
        <div className="flex flex-col md:flex-row">
          <p className="md:w-1/2">
            These agents will have mobile-app on their mobiles(agents could be your company&#39;s employee).Agents location will be send to dispatcher side using their mobile gps. Agents can see themselves moving on the map so they can keep track of where they are going.
          </p>
          <Image
            src="/task-force-dispatcher/task-force-dispatcher-mobile.png"
            alt="task-force-dispatcher-mobile-view"
            width={300}
            height={206}
            className="rounded-lg mb-4"
          />
        </div>
        <p>
          Mobile agents can also view jobs on app assigned by the dispatcher/operational team. When dispatcher will set a job for particular agent, it will automatically be updated on agent&#39;s mobile so he may keep in touch with dispatcher team.
        </p>
        <br />
        
        {/* Dispatcher Side */}
        <h3 className="text-2xl font-bold mb-4">
          Dispatcher Side
        </h3>
        <p>
          Dispatcher side is online web based portal, Dispatcher/operational team can view dozen&#39;s of multiple mobile agents in real-time on their appearing map & can keep track of each agent location.
        </p>
        <br />
        <p>
          Dispatcher team can create job with address of location and client&#39;s detail & assign in to a particular mobile agent accordingly (nearest available). Dispatcher/operational team can also view the job history to keep track of the jobs.
        </p>
        <br />
        <Image
          src="/task-force-dispatcher/task-force-dispatcher-web.png"
          alt="task-force-dispatcher-web-view"
          width={600}
          height={338}
          className="rounded-lg pb-8"
        />

        {/* Project Scope */}
        <h3 className="text-2xl font-bold mb-4">
          Scope of a project
        </h3>
        <p>
          When a problem arises, Dispatcher team can assign job to the nearest available worker. Mobile agents using app on his phone to see an update job, make it easy to organize & stay in touch with operational team back in home ways. Using “Task Force Dispatcher” right person will get the right assignment at right time.
        </p>
        <br />
        <p>
          Business/organization can use it to keep track of their employee. Companies who deliver packages or install connections can use this management tool to keep track of their work-force.
        </p>
        <br />

      </div>

      {/* Column Two */}
      <div className="md:w-1/3">        
        <h3 className="text-2xl font-bold mb-2">
          Overview
        </h3>
        <p className="mb-4">
          TFD was my own idea for FYP & I individually pursue that idea, challenge was I have to work on multiple things i.e. APIs and tons of javascript, & perform testing on both platform mobile & desktop
        </p>

        <h3 className="text-2xl font-bold mb-2">
          Date
        </h3>
        <p>June 22, 2016</p>
      </div>

    </div>

  </div>  
  )
}
