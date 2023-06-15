import React from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import LogoLong from "../assets/LogoLong.png"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt classname="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.76)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evely items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={LogoLong} className="" /> {/* Updated mt class */}
      </div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What is</p>
        <h2 className={`${styles.sectionHeadText} red-black-text-gradient`}>
          The Reckless Division</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">

        The Reckless Division is a gaming community with a welcoming staff and members.
        Our main goal is to establish a large and diverse community of people who want to game together and avoid the toxicity often found in the gaming scene.
        We are currently experiencing growth and have recently been established.
        We aspire to become a well-known name in the clan scene and the gaming community as a whole.
        Our aim is to attract thousands of members from around the world and make our name known.
      </motion.p>

      {/*<div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
      </div>*/}

    </>
  )
}

export default SectionWrapper(About, "about")