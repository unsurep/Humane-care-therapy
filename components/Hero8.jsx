import React from 'react'
import Image from 'next/image'

const Hero8 = () => {
  return (
    <div className='font-nunito px-[1rem] md:px-[3rem] bg-gray-100 h-screen flex items-center justify-between' style={{ backgroundImage: "url('/image/bgv.svg')"}}>
        {/* A */}
        <div className=''>
            <div className='flex items-center justify-center gap-4'>
                <Image src='/image/linebg.png' alt='logo' width={60} height={60} className=''/>
                <p className='text-3xl text-cyan-600/80 font-bold tracking-[5px]'>Make an Appointment</p>
            </div>
            <h2 className='text-xl text-cyan-600/80 font-bold py-3'>Book Your Session Today!</h2>

            <form className='w-full flex flex-col gap-5'>
                {/* name */}
                <div className='flex gap-4 items-center'>
                    <label className='bg-purple-200 text-purple-600 px-3 py-1 w-fit rounded-full'>1</label>
                    <input type='text'
                    placeholder='Enter full name'
                    className='w-full outline-none border-cyan-400 border-[2px] rounded px-4 py-1 text-gray-500'/>
                </div>

                {/* Email */}
                <div className='flex gap-4 items-center'>
                    <label className='bg-blue-200 text-blue-600 px-3 py-1 w-fit rounded-full'>2</label>
                    <input type='email'
                    placeholder='Enter email here'
                    className='w-full outline-none border-cyan-400 border-[2px] rounded px-4 py-1 text-gray-500'/>
                </div>

                {/* date */}
                <div className='flex gap-4 items-center'>
                    <label className='bg-orange-200 text-orange-600 px-3 py-1 w-fit rounded-full'>3</label>
                    <input type='date'
                    placeholder='Select date'
                    className='w-full outline-none border-cyan-400 border-[2px] rounded px-4 py-1 text-gray-500'/>
                </div>

                {/* appointment */}
                <div className='flex gap-4 items-center'>
                    <label className='bg-green-200 text-green-600 px-3 py-1 w-fit rounded-full'>4</label>
                    <select className='w-full outline-none border-cyan-400 border-[2px] rounded px-4 py-1 text-gray-500'>
                        <option value="">Reason for Appointment</option>
                        <option value="">Occupational Therapy</option>
                        <option value="">Speech Therapy</option>
                        <option value="">Physical Therapy</option>
                        <option value="">Geriatric Therapy</option>
                        <option value="">Post-Surgical Rehabilitation</option>
                        <option value="">Pain Management Therapy</option>
                        <option value="">Caregiver Training & Support</option>
                    </select>
                </div>

                {/* Textarea */}
                <div className='flex flex-col'>
                    <label className='text-gray-500'>Additional Notes</label>
                    <textarea
                    placeholder='Enter notes'
                    className='outline-none border-cyan-400 border-[2px] text-gray-500 px-4 py-1'
                    />
                </div>

                <div className='w-full'>
                    <button className='flex mx-auto bg-cyan-600/30 hover:bg-cyan-400/90 text-gray-700 hover:text-black cursor-pointer w-fit py-2 px-6 hover:transition-opacity duration-1000 ease-in-out rounded opacity-100'>Submit Form</button>
                </div>
            </form>
        </div>






        {/* B */}
        <div>
            <Image src='/image/boy.png' width={500} height={500} alt='image' className=''/>
        </div>
    </div>
  )
}

export default Hero8
