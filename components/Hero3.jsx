import React from 'react'
import Image from 'next/image'

const Hero3 = () => {
  return (
    <>
    <section id='section3' 
       className="
       relative 
       font-nunito 
       pt-16 
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
       px-[3rem]" style={{ backgroundImage: "url('/image/bgv.svg')" }}>

        <div className='flex items-center gap-4'>
                        <Image src='/image/linebg.png' alt='logo' width={60} height={60} className=''/>
                        <p className='text-3xl text-cyan-600/80 font-bold'>Our Services</p>
                    </div>
        <p>At Humane Care Therapy Inc., our commitment to exceptional care is reflected in our specialized therapy services designed to empower patients and elevate their quality of life.</p>

        <div>
            <p></p>
            <p></p>
            <p></p>
        </div>







    </section>
    </>
  )
}

export default Hero3
