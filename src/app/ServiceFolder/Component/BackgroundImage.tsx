"use client"
import {motion} from 'framer-motion'
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
type imageItem = {
    image:StaticImageData;
    title:string;
    description:string;
    alt: string;
}
type DataImage ={
    Data: imageItem[],
}

export const BackgroundImage = function({Data}:DataImage){
    return(
        <section className='md:overflow-x-auto sm:overflow-x-hidden'>
             <div>
                {Data.map((data, index)=>(
                    <div key={index} className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] 
                    lg:h-[75vh] flex justify-center items-center">
                        {/*Image en Arriere Plan*/}
                        {data.image && (
                            <Image 
                            src={data.image}
                             alt={data.alt || 'image'}
                             fill
                             sizes='100vw'
                             className='object-cover opacity-80'
                             />
                        )}
                        {/*Contenu textuel superposé*/}
                        <div className="relative z-10 text-center p-2
                         sm:p-4 rounded-[20px] w-[92%] bg-white/60 sm:w-[75%] md:w-[60%] sm:bg-none mx-auto sm:mt-5 md:mt-10 mt-5">
                            <motion.h1
                            initial={{opacity:0, y:20}}
                            whileInView={{opacity: 1, transition:{duration:1, delay:0.2, ease:"easeIn"}}}
                            className="text-black text-4xl sm:text-6xl md:text-7xl font-bold leading-tight break-words">
                                {data.title}
                            </motion.h1>
                            
                            <motion.p 
                            initial={{opacity:0, y:20}}
                            whileInView={{opacity: 1, transition:{duration:1, delay:0.2, ease:"easeIn"}}}
                            className="text-black p-2 text-base sm:text-lg md:text-xl mt-2 break-words">
                                {data.description}
                            </motion.p>
                        </div>
                    </div>
                ))}
             </div>
        </section>
    )
}