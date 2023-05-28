import React from 'react'
import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="realitve w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#811331]" />
          <div className='w-1 sm:h-80 h-49 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Reckless<span className="text-[#811331]">Division</span></h1>
        </div>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Hi, im a website for people that are owners of a website<br className="sm:block hidden"/>im filling in for actual text about what i am 
        </p>
      </div>

      <ComputersCanvas />
    </section>
  )
}

export default Hero