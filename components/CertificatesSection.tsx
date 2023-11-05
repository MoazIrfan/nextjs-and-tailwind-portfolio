import React from "react"
import Image from "next/image"

const myCertificates = [
  {
    name: "HackerRank JavaScript Skill Certification",
    image: "/certificates/HackerRank-JavaScript.png",
    link: "https://www.hackerrank.com/certificates/00d6f2bcec65",
  },
  {
    name: "HackerRank Software Engineer Role Certification",
    image: "/certificates/HackerRank-SoftwareEngineering.png",
    link: "https://www.hackerrank.com/certificates/041d0d8cb1d1",
  },
  {
    name: "HackerRank JavaScript Skill Certification II",
    image: "/certificates/HackerRank_JavaScript.png",
    link: "https://www.hackerrank.com/certificates/8f6039d3bb07",
  },
]

const CertificatesSection = () => {
  return (
    <section id="certificates" className="my-16 ">

      <div className="grid grid-cols-3 md:gap-16 gap-8 items-center  mt-24 mb-24 ">
        {myCertificates.map((certificate, idx) => {
          return (
            <div key={idx}>     
              <div className="flex flex-col align-bottom  md:flex-row md:space-x-12">

                <div>
                  <a target="_blank" href={certificate.link} rel="noopener noreferrer">
                    <Image
                      src={certificate.image}
                      alt="certificate"
                      width={450}
                      height={350}
                      className="filter grayscale opacity-70 hover:filter-none hover:opacity-100 transition duration-300 cursor-pointer rounded-lg"
                    />
                  </a>
                </div>      

              </div>
            </div>
          )
        })}   
      </div>
      
    </section>
  )
}

export default CertificatesSection
