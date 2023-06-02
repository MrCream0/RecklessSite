import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import Tilt from "react-parallax-tilt";

const merchRedirect = () => {
  window.open("https://streamlined.gg/collections/reckless-division", "_blank")
}

const FeebackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    onClick={merchRedirect}
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 padding-10 rounded-3xl xs:w-[320px] w-full">
    <Tilt options={{
      max: 45,
      scale: 1,
      speed: 450
    }}
      className="black-gradient p-5 rounded-2xl sm:w-[360px] w-full">
      <p className="text-white font-black text-[48px]"></p>

      <div className="mt-1" >
        <p className="text-white tracking-wider text-[18px] text-center">{testimonial}</p>

        <div className="mt-7 flex flex-col gap-1">
          <div className="flex justify-center items-center">
            <img
              src={image}
              alt={`feedback-by-${name}`}
              className="w-25 h-25 object-cover justify-items-center"
            />
          </div>

          {/*<div className="flex justify-center items-center flex-1 flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} at {company}
          </p>
</div>*/}

        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-balck-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Check out our merch</p>
          <h2 className={`${styles.sectionHeadText} red-black-text-header-gradient`}>If you want to support Reckless directly grab some merch</h2>
        </motion.div>
        <div className={`${styles.paddingX} pb-14 flex flex-wrap gap-7`}>{/*-mt-20*/}
          {testimonials.map((testimonial, index) => (
            <FeebackCard
              key={testimonial.name}
              index={index}
              {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "merch")