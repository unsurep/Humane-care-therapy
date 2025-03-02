'use client';
import { useTypewriter, Cursor } from 'react-simple-typewriter'



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
                pt-8 
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
          <div className="w-full text-gray-100 font-extrabold flex flex-col items-center relative z-10 md:mt-8 px-[1rem] lg:px-[5rem]">
            <h1>Welcome to;</h1>
            <h1 className="text-6xl font-extrabold pt-1 md:pt-5 kenburns-top-left">HUMANE CARE THERAPY INC.</h1>

            <p className="pt-6 text-4xl">Start your Journey to <span className='text-red-400'>{text}<Cursor cursorColor='red' /></span>{' '} {' '}Today</p>
            

            <p className="w-fit flex items-center pt-6 text-2xl">Humane Care Therapy is dedicated to providing compassionate, <br />  client-centered care. Our approach blends evidence-based techniques <br /> with genuine empathy, ensuring you feel heard, supported, and <br /> empowered on your journey toward emotional well-being.</p>

            <div className="mt-12">
                <button>Book an appointment with us today</button>
            </div>
          </div>

          
            

          </section>
        </>
    )


};

export default Hero;