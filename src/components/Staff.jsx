import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { staff } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const StaffCard = ({ staff }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#151313", color: "#881313" }}
    contentArrowStyle={{ borderRight: `7px solid #ff0000` }}
    date={staff.date}
    iconStyle={{ background: staff.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
        src={staff.icon}
        alt={staff.company_name}
        className="w-[60%] h-[60%] object-contain"/>
      </div>
    }>
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {staff.title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{staff.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {staff.points.map((point, index) => (
          <li key={`staff-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-auto justify-center">
        <img src={staff.image} className="w-[60%] h-[60%] object-contain"/>
      </div>
  </VerticalTimelineElement>
)

const Staff = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Who Are We?
        </p>
        <h2 className={`${styles.sectionHeadText} red-black-text-header-gradient`}>
          Meet our founders
        </h2>
      </motion.div>

      <div className="md-20 flex flex-col">
        <VerticalTimeline lineColor="#931010">
          {staff.map((staff, index) => (
            <StaffCard key={index} staff={staff} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
};

export default SectionWrapper(Staff, "staff");