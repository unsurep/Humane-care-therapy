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
      <section id='section2' className='lg:flex w-full font-nunito '>
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
            </Swiper>  
        </div>

        <div className='flex flex-col mx-auto px-[1rem] '>
            <div className='flex items-center gap-4'>
                <Image src='/image/bg-about.jpg' alt='logo' width={100} height={100} className=''/>
                <p className='text-2xl text-cyan-600/80 font-bold'>About Us</p>
            </div>

            <h1 className='py-2 text-3xl'>Humane Care Therapy: Your Path To Better Health Starts Here</h1>

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quia ratione corrupti ab voluptatem asperiores architecto porro autem molestias itaque, deserunt vero aliquid laboriosam earum alias ipsam voluptatum consectetur! Praesentium, recusandae!</p>

                <ul className='pt-3 flex flex-col gap-3'>
                    <li>Best licensed & verified experts.</li>
                    <li>Deliver improved well-being to the users.</li>
                    <li>Honor of working with fortune 500.</li>
                </ul>
            </div>

            <div className="mt-8 w-full md:w-fit">
                <button className='bg-cyan-600/30 hover:bg-cyan-600/90 cursor-pointer w-full md:w-fit py-2 px-6 hover:transition-opacity duration-1000 ease-in-out opacity-100 flex items-center gap-2 rounded'>Read More <span><MdArrowOutward /></span></button>
            </div>
        </div>

        




        

      </section>
    </>
  )
}

export default Hero2
