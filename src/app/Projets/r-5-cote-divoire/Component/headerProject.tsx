"use client"
import Image from 'next/image'
import projectimage from '../../image/project r+5.jpg'
import {motion} from 'framer-motion'
export const HeaderProjectSection = function(){
    return(
          <section className='flex flex-col justify-center items-center'>
            {/*image Div section for header parent must be relative when using Image fill */}
          <div className='relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh]'>
            <Image src={projectimage} alt='image'
            fill
            sizes='(max-width: 640px) 100vw (max-width:1024px) 48vw 30vw'
            className='object-cover opacity-90'
            />
          </div>
          {/*text Div section for header*/}
          <div className='absolute sm:bottom-100 md:bottom-130 lg:bottom-130'>
            <motion.h1
             initial={{opacity:0, y:50}}
             whileInView={{opacity:1, transition:{duration:1}, y:0}}
            transition={{ease: "easeOut", delay: 0.2}}
            className='text-white sm:text-6xl md:xl font-bold'>R+5 Côte d'Ivoire</motion.h1>
            <motion.p
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, transition:{duration:1.2}, y:0}}
              transition={{ease: "easeOut", delay: 0.3}}
            className='text-white sm:text-base md:text-xl text-center'>Abidjan, Côte d'Ivoire • 2022</motion.p>
          </div>
          </section>
    )
}