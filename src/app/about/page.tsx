'use client'

import { bebasNeue, ibmPlex } from "@/components/sections/Profile"
import { Button } from "@/components/ui/button"



export default function AboutMe() {
    return(
        <section className="min-h-screen bg-[#F4F4F4] px-6 py-12 flex flex-col justify-center">

            <div className="flex flex-col justify-between items-start lg:items-center gap-5 w-full max-w-7xl mx-auto">
        {/* Left Section: Text */}
        <div className="flex-1 space-y-3 lg:space-y-4">
          <h1 className={`${bebasNeue.className} text-6xl sm:text-7xl md:text-8xl text-[#FA7E7E]`}>FARIZKY</h1>
          <p className={`${ibmPlex.className} text-md sm:text-lg lg:text-3xl text-gray-700 font-bold leading-tight`}>
            is a seasoned professional with 9+ years of HR and Product/Project Management.
            Currently switching to Web Development.
          </p>
          <p className={`${ibmPlex.className} text-md sm:text-lg lg:text-3xl text-gray-700 font-bold leading-tight`}>
            A highly adaptable, collaborative, and supportive of teamwork.
          </p>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex flex-row gap-4 sm:w-auto lg:self-start">
        <Button
            asChild
            className="bg-[#08D9D6] hover:bg-[#05c0be] text-black body-font font-bold px-3 py-2 text-base sm:w-36 lg:w-40 cursor-pointer"
        >
            <a
                href="https://drive.google.com/file/d/1Hd8LcPwUV5g4-06TvcshJL7v9NhcjAj5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
            >
                Download CV
            </a>
        </Button>


          <Button 
          asChild 
          className="bg-[#08D9D6] hover:bg-[#05c0be] text-black body-font font-bold px-3 py-2 text-base sm:w-36 lg:w-40 cursor-pointer"
          >
            <a href="https://www.linkedin.com/in/farizkey/"
            target="_blank"
            rel="noopener noreferrer">LinkedIn</a></Button>


          <Button 
          asChild 
          className="bg-[#08D9D6] hover:bg-[#05c0be] text-black body-font font-bold px-3 py-2 text-base sm:w-36 lg:w-40 cursor-pointer">
            <a href="https://github.com/Farizkey16"
            target="_blank"
            rel="noopener noreferrer">GitHub</a></Button>
        </div>
      </div>
        </section>

    )
}