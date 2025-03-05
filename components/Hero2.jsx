'use client'
import { MdArrowOutward } from "react-icons/md";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Hero2 = () => {
  return (
    <>
    <section id='section2' className='lg:flex w-full font-nunito py-5 rounded px-[rem] bg-gray-100 relative'>
        <div>
            {/* swiper js */}
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <img src="/image/hero21.avif" alt='image' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/hero22.jpg" alt='image' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/hero23.jpg" alt='image' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/hero24.avif" alt='image' />        
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/hero26.avif" alt='image' />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/image/back1.jpg" alt='image' />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/image/knee1.jpg" alt='image' />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/image/foot1.jpg" alt='image' />
                </SwiperSlide>

               
            </Swiper>  
        </div>

        <article className='flex flex-col mx-auto  px-[1rem]'>
            <div className='flex items-center justify-center gap-4'>
                <Image src='/image/linebg.png' alt='logo' width={60} height={60} className=''/>
                <p className='text-3xl text-cyan-600/80 font-bold'>About Us</p>
            </div>

            <h1 className='py-2 text-2xl'>Humane Care Therapy: Your Path To Better Health Starts Here</h1>

            <div>
                <p className="text-base">At Humane Care Therapy Inc., where compassion meets expertise and where your well-being is our top priority. We are more than just a therapy staffing company; we are a team of dedicated professionals driven by a passion for empowering individuals through personalized, home-based therapy services. Since 2018, we have been committed to delivering exceptional Occupational Therapy, Physical Therapy, and Speech Therapy services to those who need it most in the comfort of their own homes.</p>

                <ul className='pt-3 flex flex-col gap-2 text-base'>
                    <li className="flex items-center gap-2"><Image src='/image/doc.svg' width={20} height={20} alt="logo"/>Best licensed & verified experts.</li>

                    <li className="flex items-center gap-2"><Image src='/image/time.svg' width={20} height={20} alt="logo"/>Deliver improved well-being to the users.</li>

                    <li className="flex items-center gap-2"><Image src='/image/badge.svg' width={20} height={20} alt="logo"/>Honor of working with fortune 500.</li>
                </ul>
            </div>

            <div className="mt-6 flex items-center justify-center w-full">
                <button className='bg-cyan-600/30 hover:bg-cyan-400/90 text-gray-700 hover:text-black cursor-pointer w-fit py-2 px-6 hover:transition-opacity duration-1000 ease-in-out opacity-100 flex items-center gap-2 rounded text-align'>Read More <span><MdArrowOutward /></span></button>
            </div>
        </article>


        {/* box design */}
        <div className="absolute top-[16rem] left-8 hidden lg:flex">
            <Image src='/image/g-box.png' width={250} height={250} alt="image"/>
        </div>

        
    </section>
    </>
  )
}

export default Hero2
