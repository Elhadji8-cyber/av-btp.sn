"use client"
import Image from 'next/image';
import {motion} from 'framer-motion'
import type { StaticImageData } from 'next/image'
type HeaderCard = {
    image: StaticImageData;
    title:string;
};
type CardSection ={
    HeaderCards: HeaderCard[];
}
export default function HeadingSection({HeaderCards}:CardSection){
    return(
       <section>
            {/*Image Section*/}
            <div>
                {HeaderCards.map((cards, index)=>(
                    <div key={index} className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] flex justify-center items-center">
                        {/* Image en arrière-plan */}
                        {cards.image && (
                            <Image 
                                src={cards.image} 
                                alt={cards.title || 'imge'}
                                fill
                                sizes='100vw'
                                className='object-cover opacity-90'
                            /> 
                        )}
                        {/* Contenu textuel superposé */}
                        <div className='relative z-10 text-center '>
                            <motion.h1 
                            initial={{opacity:0, x:-100}}
                            whileInView={{opacity:1, transition:{duration:1}, y:0}}
                            transition={{ease: "easeOut", delay: 0.2}}
                            className='text-white text-4xl sm:text-6xl md:text-7xl font-bold'>{cards.title}</motion.h1>
                            <motion.p 
                            initial={{opacity:0, x:-100}}
                            whileInView={{opacity:1, transition:{duration:1}, y:0}}
                            transition={{ease: "easeOut", delay: 0.2}}
                            className='text-white text-base sm:text-lg md:text-xl mt-2'>
                            {cards.title}</motion.p>    
                        </div>      
                    </div>
          ))}
     </div>
 </section>
    )
}