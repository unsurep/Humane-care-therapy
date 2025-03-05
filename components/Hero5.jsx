'use client'

import React from 'react'
import { TbBulb } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import Image from 'next/image';
import { motion } from "motion/react"

const Hero5 = () => {
  return (
    <section id='section5' className='h-[240vh] md:h-[200vh] pt-16 font-nunito bg-gray-100 px-[1rem] md:px-[3rem]'>
      <div className='pt-8 md:bg-cyan-200/40  rounded grid grid-cols-1 md:flex items-center gap-10 justify-between px-[1rem] md:px-[3rem]'>
        <div className='flex flex-col items-center justify-center bg-slate-200 rounded p-3 ring ring-cyan-200 gap-4'>
          <div>
            <TbBulb className='text-5xl' />
          </div>

          <h1 className='text-cyan-600/80 font-bold text-3xl'>Our Mission</h1>

          <p className='text-base'>At Humane Care Therapy Inc., our mission is clear: “Empowering patients through quality home-based therapy services for a healthier tomorrow.” We believe in treating every individual with the utmost care and respect, recognizing that behind every diagnosis is a person with unique needs, hopes, and potential. As Patch Adams wisely said, “You treat a disease: you win, you lose. You treat a person; I guarantee you win, no matter what the outcome.” This philosophy guides our approach to therapy, ensuring that our patients are at the heart of everything we do.</p>
        </div>


        <div className='flex flex-col items-center justify-center bg-slate-200 rounded p-3 ring ring-cyan-200 gap-4'> 
          <div>
            <LuBrain className='text-5xl'/>
          </div>

          <h1 className='text-cyan-600/80 font-bold text-3xl'>Our Vision</h1>

          <p className='text-base'>Our vision at Humane Care Therapy Inc. is to become the leading provider of professional therapy staffing services, recognized not only for our clinical excellence but also for our unwavering commitment to improving patient outcomes through exceptional therapy services. We strive to create a supportive and empowering environment for our staff, enabling them to thrive in their careers and make a meaningful impact in the lives of those they serve. “If you want to go fast, go alone. If you want to go far, go together”…. African Proverb.</p>
        </div>
      </div>

      <div className='pt-16'>
        <h1 className='text-cyan-600/80 font-bold text-3xl text-center'>Why Choose Us?</h1>
        <p className='text-base pt-5'>At Humane Care Therapy Inc., we stand out because we combine clinical expertise with a genuine passion for improving lives. We leverage the latest technologies, such as KINNSER Electronic Medical Records, to ensure all client information is managed accurately and efficiently. Our team of highly professional therapists are fully licensed and continually trained, adhering to strict Quality Assurance protocols to ensure compliance with all Medicare, Medicaid, and Private Insurance laws. As an OT-owned and operated company, we possess the unique knowledge and understanding necessary to ensure the satisfaction and optimal performance of our therapists. We are also dedicated to growing our team, hiring additional therapists daily to meet the evolving needs of our clients. At Humane Care Therapy Inc., you can trust that your care is in capable, compassionate hands. Together, we are committed to fostering health, hope, and healing in every home we touch.</p>

        <div className='grid grid-cols-1  md:flex gap-5 justify-center items-center pt-16'>
          <motion.div 
          className='flex justify-center'
          initial={{opacity:0,}}
          animate={{
            
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
           
          }}
          transition={{duration: 2.5,}}>
            
            
            <div className='absolute border border-blue-700/50 rounded-full h-[100px] w-[100px] mt-2 animate-ping'/>
             <div className='absolute border border-blue-200/90 rounded-full h-[120px] w-[120px] '/>

            <div className='absolute border border-blue-700/50 rounded-full h-[130px] w-[130px] mt- animate-ping'/>


            <Image src='/image/uncle.jpg' width={120} height={120} alt='profile image' className='rounded-full ring ring-cyan-700 '/>
          </motion.div>

         

          <div className='flex flex-col justify-center'>
            <p>
              <Image src='/image/linebg.png' width={60} height={60} alt='image' className=''/>
            </p>
            <h1 className='text-base md:text-2xl'>Felix Umukoro, OTR,MS,MOT,CLIPP.</h1>
            <p className='font-extrabold text-base md:text-2xl'>Director</p>
          </div>
        </div>

        
      </div>
      
      
        
      
    </section>
  )
}

export default Hero5
