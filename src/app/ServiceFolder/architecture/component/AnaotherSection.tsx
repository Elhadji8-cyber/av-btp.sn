"use client"
import {motion} from "framer-motion"
import { IoPartlySunnyOutline } from "react-icons/io5";
import { SiApacheairflow } from "react-icons/si";
import { IoWaterOutline } from "react-icons/io5";
import Image from 'next/image';
import architec from '../image/Architect.jpeg'
export default function AnaotherSection() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20 p-4 md:p-10">
        <motion.div 
         initial={{opacity:0, y:50}}
         whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
        className="h-fit lg:h-[500px] w-full lg:w-[600px] flex flex-col gap-5">
            {/* texte */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-sky-400 font-bold p-2">Architecture Adaptée au Climat Tropical</h2>
            <p className="p-3 mt-2">
               Nos conceptions architecturales intègrent les spécificités du climat
                sénégalais pour créer des espaces confortables, durables et
                 économes en énergie.
            </p>
            <main className="flex items-center gap-4">
                <div className="p-2 bg-sky-200 rounded-full">
               <IoPartlySunnyOutline className="h-10 w-10"/>
               </div>
               <article>
                <h3 className="font-bold text-lg">Protection Solaire</h3>
                <p>Orientation optimale et protections solaires pour réduire la chaleur.</p>
                </article>
            </main>
            <main className="flex items-center gap-4">
                <div className="p-2 bg-sky-200 rounded-full">
                 <SiApacheairflow  className="h-10 w-10"/>
               </div>
               <article>
                <h3 className="font-bold text-lg">Ventilation Naturelle</h3>
                <p>Conception favorisant la circulation d'air pour un confort optimal.</p>
                </article>
            </main>
            <main className="flex items-center gap-4">
                <div className="p-2 bg-sky-200 rounded-full">
                 <IoWaterOutline className="h-10 w-10"/>
               </div>

               <article>
                <h3  className="font-bold text-lg">Gestion des Eaux</h3>
                <p>Systèmes de récupération et d'évacuation des eaux pluviales.</p>
                </article>
            </main>
        </motion.div>

        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
        className="w-full h-[300px] sm:h-[400px] lg:h-[500px] lg:w-[500px] relative rounded-2xl shadow-md overflow-hidden">
            {/* image */}
            <Image src={architec} alt='image'
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover
            hover:transition-transform hover:scale-105 duration-300 ease-in-out"/>
        </motion.div>
    </section> )
}
