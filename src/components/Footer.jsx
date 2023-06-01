import React from "react";
import { styles } from "../styles";

const Footer = () => {

    return (
        <div className={`${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20 red-black-text-header-gradient`}>
            <div className="flex justify-center items-center">
                <div className="">
                    <h1 className="">Reckless Division</h1>
                </div>

                <div className="">
                    <div className="">
                        <h4>something here</h4>
                        <p>stboip</p>
                        <p>argoij</p>
                        <p>whjio</p>
                        <p>droijp</p>
                    </div>
                </div>

                <div className="">
                    <p>© 2023 TRD. All rights reserved.</p>
                </div>

            </div>
        </div>
    )
}

export default Footer