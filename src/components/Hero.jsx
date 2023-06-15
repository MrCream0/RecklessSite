import React, { useState } from 'react'

import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import { SectionWrapper } from '../hoc'
import logo from "../assets/logo.png"
import LogoLong from "../assets/LogoLong.png"

const Hero = () => {


  return (
    <section className="realitve w-full h-[600px] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#811331]" />
          <div className='w-1 sm:h-80 h-49 violet-gradient' />
        </div>
        <div className="flex items-start"> {/* Added flex and items-start classes */}
          <img src={LogoLong} className="mt-[-30%] mb-0" /> {/* Added mt-0 class */}
        </div>
      </div>
    </section>
  )
}

export default (Hero);
