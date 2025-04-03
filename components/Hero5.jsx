'use client'

import React from 'react'
import { TbBulb } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import Image from 'next/image';
import { motion } from "motion/react"

const Hero5 = () => {
  return (
    <section id='section5' className='  pt-16 font-nunito bg-gray-100 px-[1rem] md:px-[3rem]'>
      <div className='pt-8 md:bg-cyan-200/40  rounded grid grid-cols-1 md:flex items-center gap-10 justify-between px-[1rem] md:px-[3rem]'>
        <div className='flex flex-col items-center justify-center bg-slate-200 rounded p-3 ring ring-cyan-200 gap-4'>
          <div>
            <TbBulb className='text-5xl' />
          </div>

          <h1 className='text-cyan-600/80 font-bold text-3xl tracking-[5px]'>Our Mission</h1>

          <p className='text-base'>At Humane Care Therapy Inc., our mission is clear: “Empowering patients through quality home-based therapy services for a healthier tomorrow.” We believe in treating every individual with the utmost care and respect, recognizing that behind every diagnosis is a person with unique needs, hopes, and potential. As Patch Adams wisely said, “You treat a disease: you win, you lose. You treat a person; I guarantee you win, no matter what the outcome.” This philosophy guides our approach to therapy, ensuring that our patients are at the heart of everything we do.</p>
        </div>


        <div className='flex flex-col items-center justify-center bg-slate-200 rounded p-3 ring ring-cyan-200 gap-4'> 
          <div>
            <LuBrain className='text-5xl'/>
          </div>

          <h1 className='text-cyan-600/80 font-bold text-3xl tracking-[5px]'>Our Vision</h1>

          <p className='text-base'>Our vision at Humane Care Therapy Inc. is to become the leading provider of professional therapy staffing services, recognized not only for our clinical excellence but also for our unwavering commitment to improving patient outcomes through exceptional therapy services. We strive to create a supportive and empowering environment for our staff, enabling them to thrive in their careers and make a meaningful impact in the lives of those they serve. “If you want to go fast, go alone. If you want to go far, go together”…. African Proverb.</p>
        </div>
      </div>

      <div className='pt-16'>
         <div className='flex items-center justify-center gap-4'>
            <Image src='/image/linebg.png' alt='logo' width={60} height={60} className=''/>
            <h1 className=' text-center text-3xl text-cyan-600/80 font-bold'>Why Choose Humane Care Therapy Inc.?</h1>
        </div>

        <p className='text-base pt-5'>At Humane Care Therapy Inc., we go beyond standard care by blending clinical expertise with a deep passion for    improving lives. Utilizing cutting-edge technologies like KINNSER Electronic Medical Records, we ensure precise and efficient management of client information.Our team of highly skilled, fully licensed therapists undergo continuous training and adhere to strict Quality Assurance protocols, guaranteeing full compliance with Medicare, Medicaid, and Private Insurance regulations. As an OT-owned and operated company, we bring a unique understanding of therapist needs, ensuring both professional satisfaction and exceptional client outcomes.Dedicated to meeting the evolving needs of our clients, we are actively expanding our team, hiring talented therapists daily. At Humane Care Therapy Inc., your care is in expert, compassionate hands. Together, we foster health, hope, and healing in every home we serve.</p>

        {/* <div className='grid grid-cols-1  md:flex gap-5 justify-center items-center pt-10'>
          <motion.div 
          className='flex justify-center'
          initial={{opacity:0,}}
          animate={{
            // scale:[1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ['10%', '10%', '20%', '40%', '20%'],
          }}
          transition={{duration: 1.5,}}>
            
            
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
        </div> */}
      </div>

      

      
      
        
      
    </section>
  )
}

export default Hero5
