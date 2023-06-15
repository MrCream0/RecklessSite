import React from "react";
import { styles } from "../styles";

const Footer = () => {
    const rick = () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    };

    return (
        <div className={`${styles.paddingX} w-full flex items-center py-5 bottom-0 z-20 red-black-text-header-gradient border-b-red-900 border-b-2 border-t-2 border-t-red-800`}>
            <div className="flex justify-center items-center">
                <ul className="flex space-x-4">
                    <li>
                        <a href="#home" className="text-white hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white hover:text-gray-300">Join Us</a>
                    </li>
                    <li>
                        <a href="#socials" className="text-white hover:text-gray-300">Socials</a>
                    </li>
                    <li>
                        <a href="#rules" className="text-white hover:text-gray-300">Rules</a>
                    </li>
                    <li>
                        <a href="#merch" className="text-white hover:text-gray-300">Merch</a>
                    </li>
                </ul>
            </div>
            <div className="ml-auto text-white text-sm">
                <p>&copy; {new Date().getFullYear()} The Reckless Division. All rights reserved.</p>
                <p>Website Built By FirstName LastName "maybe insert link to a portfolio"</p>
                {/*<p>Address: 1234 Street, City, State, ZIP</p>
                <p>Email: info@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>*/}
            </div>
        </div>
    );
};

export default Footer;
