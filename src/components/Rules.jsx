import React from "react";
import Popup from "reactjs-popup";
import { SectionWrapper } from "../hoc";


const Rules = () => {
    const handbook = () =>{
        window.open("https://drive.google.com/file/d/17BC2ypN3WR6GXGMiXUigR-azSrptuaef/view", "_blank")
    }
    return(
        <button className="w-full h-[120px] rounded-3xl bg-red-700" onClick={handbook}>RULES</button>
    )
}

export default SectionWrapper(Rules, "rules");