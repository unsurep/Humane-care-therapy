import Image from 'next/image'
import React from 'react'


const Hero4 = () => {
  return (
    <>
        <section id='section4'
            className="
            font-nunito 
            flex 
            flex-col 
            items-center 
            w-full
            lg:px-[3rem]
            px-[1rem]
            bg-gray-100" > 
            
            <div className='flex items-center gap-4 pt-16'>
                <Image src='/image/linebg.png' alt='logo' width={60} height={60} className=''/>
                <p className='text-3xl text-cyan-600/80 font-bold'>Other Services offered</p>
            </div>

            <p className='text-base py-3 text-center'>Our expert therapists combine skill and compassion to deliver top-tier care, ensuring every patient receives the dedicated attention they need to thrive.</p>
           
            <div className='grid grid-cols-1 md:flex gap-5'>
              {/* 1 */}
              <div className=''>
                <div className="bg-slate-200 rounded-lg hover:bg-slate-800 cursor-pointer w-fit hvr-float-shadow flex flex-col items-center justify-center">
                  <Image src='/image/gt-bgr.png' width={300} height={300} alt='Geriatric Therapy image' className='rounded ring-cyan-700 ring'/>
                </div>
                <div className=" flex flex-col items-center gap-1  mt-3 w-fit">
                  <h1 className="font-bold text-cyan-600/80 text-lg">Geriatric Therapy</h1>
                  <p className="text-sm font-semibold">
                  Specialized therapy services for older adults, focusing on mobility, cognitive health, and independence to enhance overall well-being and quality of life.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className=''>
                <div className="bg-slate-200 rounded-lg hover:bg-slate-800 cursor-pointer w-fit  hvr-float-shadow flex flex-col items-center justify-center">
                  <Image src='/image/pt-bgr.png' width={300} height={300} alt='Pain Management Therapy image' className='rounded ring-cyan-700 ring'/>
                </div>
                <div className=" flex flex-col items-center gap-1  mt-3 w-fit">
                  <h1 className="font-bold text-cyan-600/80 text-lg">Pain Management Therapy</h1>
                  <p className="text-sm  font-semibold">
                  Comprehensive therapy programs help manage chronic pain through physical therapy, therapeutic exercises, and pain relief techniques for best practices.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className=''>
                <div className="bg-slate-200 rounded-lg hover:bg-slate-800 cursor-pointer w-fit  hvr-float-shadow flex flex-col items-center justify-center">
                  <Image src='/image/st-bgr.png' width={300} height={300} alt='Post-Surgical Rehabilitation image' className='rounded ring-cyan-700 ring'/>
                </div>
                <div className=" flex flex-col items-center gap-1  mt-3 w-fit">
                  <h1 className="font-bold text-cyan-600/80 text-lg">Post-Surgical Rehabilitation</h1>
                  <p className="text-sm font-semibold">
                  Specialized therapy services designed to speed up recovery after surgery, helping patients regain strength, mobility, and functional independence Yes!.
                  </p>
                </div>
              </div>

              {/* 4 */}
              <div className=''>
                <div className="bg-slate-200 rounded-lg hover:bg-slate-800 cursor-pointer w-fit  hvr-float-shadow flex flex-col items-center justify-center">
                  <Image src='/image/ct-bgr.png' width={300} height={300} alt='Geriatric Therapy image' className='rounded ring-cyan-700 ring'/>
                </div>
                <div className=" flex flex-col items-center gap-1  mt-3 w-fit">
                  <h1 className="font-bold text-lg text-cyan-600/80">Caregiver Training & Support</h1>
                  <p className="text-sm font-semibold">
                  Comprehensive training programs empower family members and caregivers with essential skills and knowledge to always deliver effectively. Yes!
                  </p>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Hero4
