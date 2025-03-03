import React from 'react'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineAccessTimeFilled } from "react-icons/md";

const Hero3 = () => {
  return (
    <>
    <section id='section3' 
       className="
       relative 
       font-nunito 
       pt-12 
       bg-cover 
       bg-center 
       bg-no-repeat 
       h-[100vh] 
       flex 
       flex-col 
       items-center 
       w-full
       after:content-[''] 
       after:absolute 
       after:inset-0 
       bg-gray-100
       lg:px-[3rem]
       px-[1rem]" style={{ backgroundImage: "url('/image/bgv.svg')" }}>

        <div className='flex items-center gap-4'>
          <Image src='/image/linebg.png' alt='logo' width={60} height={60} className=''/>
          <p className='text-3xl text-cyan-600/80 font-bold'>Our Services</p>
        </div>
        <p className='text-xl pt-5 text-center'>At Humane Care Therapy Inc., our commitment to exceptional care is reflected in our specialized therapy services designed to empower patients and elevate their quality of life.</p>

        <div className='flex flex-col md:flex z-10 gap-5 pt-5'>
          {/* 1 */}
            <div className=' flex flex-col'>
              <div className=''>
                <Image src='/image/ot.jpg' width={400} height={400} alt='image occupation therapy' className='rounded ring-cyan-700 ring hvr-float-shadow' />
                <p className='text-base mt-3 font-bold text-cyan-600/80'>OCCUPATION THERAPY</p>
              </div>

              <div className='flex flex-col'>
                <h1 className='text-base'>Physical Therapy Can Help You Avoid Surgery.</h1>
                <p className='text-xs flex items-center gap-3 mt-1'>March 3, 2025</p>
                <p className="mt-4 w-full">
                  <button className='bg-cyan-600/30 hover:bg-cyan-400/90 text-gray-700 hover:text-black cursor-pointer w-fit py-2 px-6 hover:transition-opacity duration-1000 ease-in-out opacity-100 flex items-center gap-2 rounded text-align'>Read More <span><MdArrowOutward /></span></button>
                </p> 
              </div>
            </div>

            {/* 2 */}
            <div className='flex flex-col'>
              <div>
                <Image src='/image/ot.jpg' width={400} height={400} alt='image occupation therapy' className='rounded ring-cyan-700 ring hvr-float-shadow' />
                <p>OCCUPATION THERAPY</p>
              </div>

              <div className='flex flex-col'>
                <h1>How Physical Therapy Can Help You Avoid Surgery</h1>
                <p>March 3, 2025</p>
                <p className="mt-6 w-full">
                  <button className='bg-cyan-600/30 hover:bg-cyan-400/90 text-gray-700 hover:text-black cursor-pointer w-fit py-2 px-6 hover:transition-opacity duration-1000 ease-in-out opacity-100 flex items-center gap-2 rounded text-align'>Read More <span><MdArrowOutward /></span></button>
                </p> 
              </div>
            </div>
            {/* 3 */}
            <div className='flex flex-col'>
              <div>
                <Image src='/image/ot.jpg' width={400} height={400} alt='image occupation therapy' className='rounded ring-cyan-700 ring hvr-float-shadow' />
                <p>OCCUPATION THERAPY</p>
              </div>

              <div className='flex flex-col'>
                <h1>How Physical Therapy Can Help You Avoid Surgery</h1>
                <p>March 3, 2025</p>
                <p className="mt-6 w-full">
                  <button className='bg-cyan-600/30 hover:bg-cyan-400/90 text-gray-700 hover:text-black cursor-pointer w-fit py-2 px-6 hover:transition-opacity duration-1000 ease-in-out opacity-100 flex items-center gap-2 rounded text-align'>Read More <span><MdArrowOutward /></span></button>
                </p> 
              </div>
            </div>
        </div>







    </section>
    </>
  )
}

export default Hero3
