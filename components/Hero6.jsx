import React from 'react'
import Image from 'next/image'

const Hero6 = () => {
  return (
    <section id='secion6' className=' pt-8 md:pt-16  bg-gray-100 px-[1rem] md:px-[3rem]'>
      {/* Q&A */}
      <h1 className=' text-center text-3xl text-cyan-600/80 font-bold'>Why Choose Humane Care Therapy Inc.?</h1>
        <div className='grid grid-cols-1 md:flex items-center mt-[2rem] gap-3'>
          
          {/* div q&a */}
          <div className='w-fit'>
            {/* 1 */}
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-cyan-600/80 font-bold">Personalized Care</div>
              <div className="collapse-content text-sm">Our therapy services are customized to each client unique needs, <br /> providing individualized support for the best possible outcomes.</div>
            </div>

            {/* 2 */}
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-cyan-600/80 font-bold">Cutting-Edge Technology</div>
              <div className="collapse-content text-sm">We leverage KINNSER Electronic Medical Records to ensure precise, <br /> efficient, and secure management of all client information.</div>
            </div>

            {/* 3 */}
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-cyan-600/80 font-bold">Prefessional Excellence</div>
              <div className="collapse-content text-sm">Our team consists of highly skilled professionals with up-to-date <br />licenses, dedicated to delivering exceptional care and service.</div>
            </div>

            {/* 4 */}
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-cyan-600/80 font-bold">Quality Assurance</div>
              <div className="collapse-content text-sm  w-full ">We enforce strict quality assurance protocols to <br /> ensure our home health notes fully comply with Medicare, <br /> Medicaid, and private insurance regulations.</div>
            </div>

            {/* 5 */}
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-cyan-600/80 font-bold">Expertise in Care</div>
              <div className="collapse-content text-sm  w-full ">As an OT-owned and operated company, we bring specialized <br /> expertise and experience to enhance client satisfaction and maximize therapist performance.</div>
            </div>

            {/* 6 */}
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-cyan-600/80 font-bold">Growing to meet your needs.</div>
              <div className="collapse-content text-sm  w-full ">To keep up with the growing demand for our services, we are actively expanding our team by hiring new therapists every day.</div>
            </div>

          </div>

          {/* div b */}
          <div className='mx-auto relative'>
            <Image src='/image/hero24.avif' width={600} height={600} alt='therapy image' className='rounded ring ring-cyan-400'/>

            {/* color game */}
            <div className='absolute top-5 right-0 px-4 animate-bounce cursor-pointer'>
              <a href="https://color-game-phi-eight.vercel.app/" target="_blank">
                <Image src='image/game.svg' width={70} height={70} alt='therapy color game' rel="noopener noreferrer"/>
              </a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero6
