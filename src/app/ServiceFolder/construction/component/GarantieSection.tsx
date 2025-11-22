"use client"
import {motion} from 'framer-motion'
import Image from 'next/image'
import image from '../image/security.jpeg'
import { GrShieldSecurity } from "react-icons/gr";
import { FiCloudLightning } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
export const GarantieSection = function(){
    return(
        <section className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20 p-4 md:p-10">
                        <motion.div 
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
                        className="h-fit lg:h-[500px] w-full lg:w-[600px] flex flex-col gap-5">
                                            {/* texte */}
                             <h2 className="text-3xl sm:text-4xl md:text-5xl text-rose-400 font-bold p-2">Qualité et Sécurité Garanties</h2>
                             <p className="p-3 mt-2">
                                Nos équipes expérimentées utilisent les meilleures techniques et
                                     matériaux pour garantir la qualité de nos constructions.
                             </p>
                                  <main className="flex items-center gap-4">
                                                <div className="p-2 bg-rose-200 rounded-full">
                                               <GrShieldSecurity className="h-10 w-10"/>
                                               </div>
                                               <article>
                                                <h3 className="font-bold text-lg">Normes de Sécuritée</h3>
                                                <p>Respect strict des normes de sécurité sur tous nos chantiers.</p>
                                                </article>
                                            </main>
                                            <main className="flex items-center gap-4">
                                                <div className="p-2 bg-rose-200 rounded-full">
                                                 <FiCloudLightning className="h-10 w-10"/>
                                               </div>
                                               <article>
                                                <h3 className="font-bold text-lg">Matériaux Certifiés</h3>
                                                <p>Utilisation exclusive de matériaux certifiés et de qualité.</p>
                                                </article>
                                            </main>
                                            <main className="flex items-center gap-4">
                                                <div className="p-2 bg-rose-200 rounded-full">
                                                 <BsClockHistory className="h-10 w-10"/>
                                               </div>
                                
                                               <article>
                                                <h3  className="font-bold text-lg">Respect des Délais</h3>
                                                <p>Planning rigoureux et suivi quotidien pour respecter les délais.</p>
                                                </article>
                                            </main>
                                        </motion.div>
                                
                                        <motion.div
                                        initial={{opacity:0, y:50}}
                                        whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
                                         className="w-full h-[300px] sm:h-[400px] lg:h-[500px] lg:w-[500px] relative rounded-2xl shadow-md overflow-hidden">
                                            {/* image */}
                                            <Image src={image} alt='image'
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 500px"
                                            className="object-cover
                                            hover:transition-transform hover:scale-105 duration-300 ease-in-out"/>
                                        </motion.div>
                             </section>
    )
}