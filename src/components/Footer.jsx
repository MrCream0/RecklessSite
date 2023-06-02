import React from "react";
import { styles } from "../styles";

const Footer = () => {

    const rick = () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
    }

    return (
        <div className={`${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20 red-black-text-header-gradient`}>
            <div className="flex justify-center items-center">
                <div>
                    <h1>Reckless Division</h1>
                </div>
                <div>
                    <div>
                        Built by MrCreams government name
                    </div>
                </div>

                <div>
                    <p>© 2023 TRD. All rights reserved<a cursor="pointer" onClick={rick}>.</a></p>
                </div>

            </div>
        </div>
    )
}

export default Footer