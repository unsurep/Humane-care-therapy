import React from 'react'
import Image from 'next/image'

const Hero9 = () => {
  return (
    <div className='px-[1rem] md:px-[5rem] py-10'>

      <h1 className='text-xl md:text-3xl font-bold text-cyan-600 text-center py-8 my-5'>Frequently Asked Questions</h1>

      <div className='grid grid-cols-1 lg:flex relative gap-6'>
        {/* A div q&a */}
        <div className='w-fit flex flex-col gap-2'>
            {/* 1 */}
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-cyan-600/80 font-bold text-xl ">What therapy services do you provide?</div>
              <div className="collapse-content text-base">Humane Care Therapy Inc. offers expert Occupational, Physical, <br /> and Speech Therapy services designed to improve mobility, <br /> communication, and daily living skills. Our dedicated team of <br /> highly skilled therapists provides personalized care tailored to <br /> your unique needs, helping you regain independence and <br /> enhance your overall quality of life.</div>
            </div>

            {/* 2 */}
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-cyan-600/80 font-bold text-xl">Do you provide therapy services at home?</div>
              <div className="collapse-content text-base">Yes, We specialize in delivering therapy services right to your <br /> doorstep,  providing the convenience of receiving high-quality <br /> Occupational, Physical, and Speech Therapy in the comfort of <br /> your own home. Our skilled therapists are dedicated to ensuring <br /> seamless, personalized care tailored to your needs.</div>
            </div>

            {/* 3 */}
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-cyan-600/80 font-bold text-xl">How do you guarantee the expertise and quality of your therapists?</div>
              <div className="collapse-content text-base">Our therapists are highly qualified, licensed professionals with <br /> extensive experience in their respective fields. We rigorously <br /> vet and select each team member to ensure they meet the <br /> highest standards of clinical excellence and compassionate <br /> care. Furthermore, we offer continuous training and professional <br /> development to ensure our therapists stay current with the latest <br /> practices and techniques.</div>
            </div>
        </div>
        

        {/* B */}
        <div className='lg:ml-auto faqshadowbox rounded-md pt-10  mx-auto flex  w-fit'>
          <Image src='/image/foot.jpg' width={400} height={400} alt='image' className='rounded-md'/>
        </div>
      </div>

      


    </div>
  )
}

export default Hero9
