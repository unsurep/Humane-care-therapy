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
       md:pt-12
       pt-6 
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
        <p className='text-base md:text-xl pt-5 text-center'>At Humane Care Therapy Inc., we are dedicated to delivering specialized therapy services that empower patients and enhance their quality of life.</p>

        <div className='grid grid-cols-1 md:flex z-10 gap-16 md:gap-5 pt-5'>
          {/* 1 */}
            <div className=' flex flex-col hvr-float-shadow'>
              <div className=''>
                <Image src='/image/ot.jpg' width={400} height={400} alt='image occupation therapy' className='rounded ring-cyan-700 ring hvr-float-shadow' />
                <p className='text-base mt-3 font-bold text-cyan-600/80'>OCCUPATION THERAPY</p>
              </div>

              <div className='flex flex-col bg-cyan-100 px-3 py-2 rounded bg1'>
                <h1 className='text-base'>The Natural Path to Recovery.</h1>
                <p className='text-xs flex items-center gap-3 mt-1'>March 3, 2025</p>
                <p className="mt-2 w-full">
                  <button className='bg-gray-200 hover:bg-cyan-400/40 text-gray-700 hover:text-black cursor-pointer w-fit py-2 px-6 hover:transition-opacity duration-1000 ease-in-out opacity-100 flex items-center gap-2 rounded text-align'>Read More <span><MdArrowOutward /></span></button>
                </p> 
              </div>
            </div>

            {/* 2 */}
            <div className='flex flex-col hvr-float-shadow'>
              <div>
                <Image src='/image/speech.avif' width={400} height={400} alt='image speech therapy' className='rounded ring-cyan-700 ring hvr-float-shadow' />
                <p className='text-base mt-3 font-bold text-cyan-600/80'>SPEECH THERAPY</p>
              </div>

              <div className='flex flex-col bg-cyan-100 px-3 py-2 rounded bg2'>
                <h1 className='text-base'>Finding Your Voice, One Word at a Time.</h1>
                <p className='text-xs flex items-center gap-3 mt-1'>February 12, 2025</p>
                <p className="mt-2 w-full">
                  <button className='bg-gray-200 hover:bg-cyan-400/40 text-gray-700 hover:text-black cursor-pointer w-fit py-2 px-6 hover:transition-opacity duration-1000 ease-in-out opacity-100 flex items-center gap-2 rounded text-align'>Read More <span><MdArrowOutward /></span></button>
                </p> 
              </div>
            </div>
            {/* 3 */}
            <div className='flex flex-col hvr-float-shadow'>
              <div>
                <Image src='/image/phy.jpg' width={400} height={400} alt='image occupation therapy' className='rounded ring-cyan-700 ring hvr-float-shadow' />
                <p className='text-base mt-3 font-bold text-cyan-600/80'>PHYSICAL THERAPY</p>
              </div>

              <div className='flex flex-col bg-cyan-100 px-3 py-2 rounded bg3'>
                <h1 className='text-base'>Strength, Mobility, and a Pain-Free Life.</h1>
                <p className='text-xs flex items-center gap-3 mt-1'>January 4, 2025</p>
                <p  className="mt-2 w-full">
                  <button className='bg-gray-200 hover:bg-cyan-400/40 text-gray-700 hover:text-black cursor-pointer w-fit py-2 px-6 hover:transition-opacity duration-1000 ease-in-out opacity-100 flex items-center gap-2 rounded text-align'>Read More <span><MdArrowOutward /></span></button>
                </p> 
              </div>
            </div>
        </div>







    </section>
    </>
  )
}

export default Hero3
