import React from 'react'
import Image from 'next/image'

const Hero8 = () => {
  return (
    <div className='px-[1rem] md:px-[3rem] bg-cover bg-no-repeat bg-center h-[110vh] ' style={{ backgroundImage: "url('/image/phy1.jpg')"}}>
   

      <h1 className='flex items-center justify-center font-semibold text-3xl text-cyan-600 py-8'>REQUEST A CONTRACT</h1>

      {/* contact us */}
      <div className='bg-black/70 text-white w-full boxshadowcontact px-[1rem] md:px-[3rem] h-[105vh] md:h-[90vh] lg:h-[70vh] '>
        {/* write up */}
        <div className='grid grid-cols-1 lg:flex pt-6 gap-8'>
          {/* 1 */}
          <div className='space-y-4 pt-8 md:pt-0'>
            <h1 className='text-xl text-center lg:text-3xl font-bold'>We would love to hear from you</h1>
            <p className='text-base'>Let's connect and explore how we can support you <br /> or your loved ones in acheiving better health and well-being.</p>
          </div>

          {/* 2 */}
          <div className='md:space-y-2 space-y-4  lg:ml-auto'>
            <h1 className='text-center text-xl lg:text-3xl font-bold'>Opening Hours</h1>


            {/* shown on tablet above */}
            <ul className='flex items-center text-base gap-10'>
              <li className='hidden md:flex'>Monday - Friday</li>
              <li className='font-bold md:flex ml-auto  hidden'>08:00am - 05:00pm</li>

              {/* show on mobile screen */}
              <li className='flex md:hidden'>Monday - <br /> Friday</li>
              <li className='font-bold ml-auto flex md:hidden'>08:00am - <br /> 05:00pm</li>
            </ul>


            <ul className='flex items-center gap-10 text-base '>
              <li>Saturday - Sunday</li>
              <li className='flex ml-auto font-bold'>Close</li>
            </ul>


            <ul className='flex items-center gap-10 text-base'>
              <li>Emergency</li>
              <li className='flex ml-auto font-bold'>24 Hours</li>
            </ul>
          </div>
        </div>

        <div className='md:pt-5 pt-10'>
          <h1>Want to talk to an expert about the best solution to your therapy staffing needs?</h1>
          <p className='md:pt-4 pt-8'>Call us on:</p>
          <p className='text-3xl font-bold'>(281) 619-3771</p>
        </div>

        <div className='grid grid-cols-1 pt-6 lg:pt-0 md:flex items-center justify-center mt-2 gap-8 text-sm'>
          <button className='text-white font-semibold hover:bg-black transition-all duration-300 ease-in-out cursor-pointer bg-cyan-600 py-3 px-6 rounded-md'>CONTACT US</button>
          <button className='text-white font-semibold hover:bg-black transition-all duration-300 ease-in-out cursor-pointer bg-cyan-600 py-3 px-6 rounded-md'>PATIENT REFERRAL</button>
        </div>

      </div>

      





   </div>
  )
}

export default Hero8
