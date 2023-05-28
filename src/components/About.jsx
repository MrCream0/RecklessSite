import React from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn,  textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt classname="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.76)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evely items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        IntroAbout</p>
      <h2 className={styles.sectionHeadText}>
        h2 Overview About</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Here is an about section that will be filled with information about the company and what we do.
      or who we are lets just type this out to fill the space and make it look like a real website
      and not just a template that i bought off of the internet. not that there is anything wrong with
      that but i want to make it look like i actually put effort into this and not just bought a template
      and called it a day. unlike those wordpress websites that are just templates and they dont even
      change the text or anything. they just buy the template and call it a day. i dont want to be like
      that. i want to be better than that. i want to be the best. i want to be the best website that
      there is. i want to be the best website that there ever was. i want to be the best website that
      there ever will be. i want to be the best website that there ever could be. i want to be the best
      website that there ever should be. i want to be the best website that there ever might be. i want
      to be the best website that there ever can be. kind of like when you are eating a sandwich and you
      want to be the best sandwich that there ever was. i want to be the best sandwich that
      there ever was too. sandwiches are like websites. they are both made up of different parts that
      come together to make something that is greater than the sum of its parts. kind of like how a car is made out of 
      sandwiches and websites. i want to be a car. i want to be a sandwich. i want to be a website. i want to be a
      sandwich website. i want to be a car website. i want to be a sandwich car. i want to be a car sandwich. im hungry.
      i want to eat a sandwich. i want to eat a car. i want to eat a website.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>

    </>
  )
}

export default SectionWrapper(About, "about")