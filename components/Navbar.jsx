'use client';
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { motion } from 'motion/react'
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar=()=>{
    const [text, setText] = useState('OUR LOCATION')
    return (
        <div>
            {/* upper nav */}
            <div className="flex items-center justify-between px-[1rem] lg:px-[5rem] py- text-black/50 font-delius">
                <motion.p 
                className="text-[8px] lg:text-sm"
                initial={{
                    x:-500,
                    opacity:0,
                    scale:0.5}}

                    animate={{
                        x:0,
                        opacity:1,
                        scale:1
                    }}

                    transition={{duration:1.5}}

                >Care is the cornerstone of our practice</motion.p>

                <div className="flex items-center">
                    <motion.h3 
                     initial={{
                        x:500,
                        opacity:0,
                        scale:0.5,
                     }}
                     animate={{
                        x:0,
                        opacity:1,
                        scale:1
                     }}
                     transition={{duration:1.5}}
                    className="text-[8px] mr-6 md:mr-16 lg:text-xs font-bold transition duration-300 cursor-pointer hover:text-blue-700 animate-bounce"
                    onMouseEnter={() => setText('HOUSTON. TEXAS USA')}
                    onMouseLeave={() => setText('OUR LOCATION')}
                    
                    >{text}</motion.h3>

                    <motion.div 
                     initial={{
                        x:500,
                        opacity:0,
                        scale:0.5
                     }}

                     animate={{
                        x:0,
                        opacity:1,
                        scale:1
                     }}
                     transition={{duration:1.5}}
                     className="flex items-center">

                        <SocialIcon
                        url="https://linkedin.com"
                        target="_blank"
                        fgColor="gray"
                        bgColor="transparent"
                        network="linkedin"
                        style={{ height: 30, width: 30 }}
                        />



                        <SocialIcon
                        url="https://facebook.com"
                        target="_blank"
                        fgColor="gray"
                        bgColor="transparent"
                        network="facebook"
                        style={{ height: 30, width: 30 }}
                        />

                        <SocialIcon
                        url="https://youtube.com"
                        target="_blank"
                        fgColor="gray"
                        bgColor="transparent"
                        network="youtube"
                        style={{ height: 30, width: 30 }}
                        />
                    </motion.div>

                </div>
            </div>

            {/* Navbar  for desktop*/}
            <nav className="hidden lg:flex items-center justify-between w-full px-[5rem] py-1 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-white bg-opacity-45 backdrop-blur-x border border-cyan-600">
                <div>
                    <Image src='/image/logo.png' width={120} height={120} alt="company logo"/>
                </div>

                <ul className="flex items-center gap-8 font-delius">
                    <li className="hvr-underline-from-left cursor-pointer ">HOME</li>
                    <li className="hvr-underline-from-left cursor-pointer">ABOUT US</li>
                    <li className="hvr-underline-from-left cursor-pointer">STAFFING & AGENCIES</li>
                    <li className="hvr-underline-from-left cursor-pointer">CAREERS</li>
                    <li className="hvr-underline-from-left cursor-pointer">BLOG</li>
                    <li className="hvr-underline-from-left cursor-pointer">CONTACT US</li>
                </ul>
            </nav>

            {/* mobile display */}
            <div className="flex lg:hidden items-center justify-between px-[1rem] shadow pb-4 ">
                <div>
                    <Image src='/image/logo.png' width={80} height={80} alt="company-logo"/>
                </div>

                <div>
                    {/* <IoMdMenu className="text-cyan-600 text-4xl" /> */}
                    <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-4" className="drawer-button bt btn-primary"><IoMdMenu className="text-black text-4xl"/></label>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-56 px-4 space-y-5 pt-5 font-delius">
                            <li>HOME</li>
                            <li>ABOUT US</li>
                            <li>STAFFING & AGENCIES</li>
                            <li>CAREERS</li>
                            <li>BLOG</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
                </div>
                </div>


                

            </div>
        </div>
    )


};
export default Navbar;