import React from "react";
import Popup from "reactjs-popup";
import { SectionWrapper } from "../hoc";


const Rules = () => {
    const handbook = () => {
        window.open("https://drive.google.com/file/d/17BC2ypN3WR6GXGMiXUigR-azSrptuaef/view", "_blank")
    }
    return (
        <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 bg-tertiary rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Rules</h2>
            <p className="text-lg mb-8">
                Here are the rules for the Discord channel:
            </p>
            <button
                className="w-full h-16 rounded-3xl bg-red-700 text-white text-lg font-bold hover:bg-red-800"
                onClick={handbook}
            >
                RULES
            </button>
        </div>
    )
}

export default SectionWrapper(Rules, "rules");