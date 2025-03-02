'use client';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { MdArrowOutward } from "react-icons/md";



const Hero=()=>{
    const [text] =useTypewriter({
        words:  ['Full Recovery', 'Better Mobility', 'Pain Relief'],
        loop: 2, 
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

    return (
        <>
          <section
            id="section1"
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
                after:bg-black/50" style={{ backgroundImage: "url('/image/hero.avif')" }}
            >
          <div className="w-full text-gray-100 font-extrabold flex flex-col items-center relative z-10 md:mt-6 px-[1rem] lg:px-[5rem]">
            <h1 className='text-base'>Welcome to;</h1>
            <h1 className="text-3xl lg:text-6xl font-extrabold pt-8 md:pt-5 kenburns-top-left text-center">HUMANE CARE THERAPY INC.</h1>

            <p className="pt-4 text-2xl lg:text-4xl text-center">Start your Journey to <span className='text-red-400'>{text}<Cursor cursorColor='red' /></span>{' '} {' '}Today</p>
            

            <p className="w-fit flex items-center pt-4 text-base lg:text-2xl">Humane Care Therapy is dedicated to providing compassionate, <br />  client-centered care. Our approach blends evidence-based techniques <br /> with genuine empathy, ensuring you feel heard, supported, and <br /> empowered on your journey toward emotional well-being.</p>

            <div className="mt-20 w-fit">
                <button className='bg-cyan-600/30 hover:bg-cyan-600/90 cursor-pointer w-fit py-2 px-6 hover:transition-opacity duration-1000 ease-in-out opacity-100 flex items-center gap-2 rounded'>Book Appointment <span><MdArrowOutward /></span></button>
            </div>
          </div>

          {/* <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'>

          </div> */}
          </section>
        </>
    )


};

export default Hero;