import React from 'react'
import Image from 'next/image'

const Hero8 = () => {
  return (
    <div className='px-[1rem] md:px-[3rem] bg-cover bg-no-repeat bg-center h-screen ' style={{ backgroundImage: "url('/image/phy1.jpg')"}}>
   

      <h1 className='flex items-center justify-center font-semibold text-3xl text-cyan-600 py-8'>REQUEST A CONTRACT</h1>
      {/* contact us */}
      <div className='bg-white/70 w-full boxshadowcontact px-[1rem] md:px-[3rem] h-[70vh] '>
        {/* write up */}
        <div className='flex pt-6 gap-8'>
          {/* 1 */}
          <div className='space-y-4'>
            <h1 className='text-3xl'>We would love to hear from you</h1>
            <p className=''>Let's connect and explore how we can support you <br /> or your loved ones in acheiving better health and well-being.</p>
          </div>

          {/* 2 */}
          <div className='space-y-2 ml-auto'>
            <h1 className='text-3xl'>Opening Hours</h1>

            <ul className='flex items-center  gap-16 '>
              <li>Monday - Friday</li>
              <li className='font-bold'>08:00am - 05:00pm</li>
            </ul>


            <ul className='flex items-center  gap-16 '>
              <li>Saturday - Sunday</li>
              <li className='flex ml-auto font-bold'>Close</li>
            </ul>


            <ul className='flex items-center gap-16'>
              <li>Emergency</li>
              <li className='flex ml-auto font-bold'>24 Hours</li>
            </ul>
          </div>
        </div>

        <div>
          <h1>Want to talk to an expert about the best solution to your therapy staffing needs?</h1>
          <p className='pt-4'>Call us on:</p>
          <p className='text-3xl font-bold'>(281) 619-3771</p>
        </div>

        <div className='flex items-center justify-center mt-2 gap-6 text-sm'>
          <button className='text-white font-semibold hover:bg-black transition-all duration-300 ease-in-out cursor-pointer bg-cyan-600 py-3 px-6 rounded-md'>CONTACT US</button>
          <button className='text-white font-semibold hover:bg-black transition-all duration-300 ease-in-out cursor-pointer bg-cyan-600 py-3 px-6 rounded-md'>PATIENT REFERRAL</button>
        </div>

      </div>

      





   </div>
  )
}

export default Hero8
