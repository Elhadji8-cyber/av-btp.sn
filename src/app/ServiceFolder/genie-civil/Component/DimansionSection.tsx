"use client"
import Image from 'next/image'
import image from '../image/resh.jpeg'
import { PiCalculator } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import {motion} from 'framer-motion'
export const DimansionSection = function(){
    return(
         <section className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20 p-4 md:p-10">
                        <motion.div 
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
                        className="h-fit lg:h-[500px] w-full lg:w-[600px] flex flex-col gap-5">
                            {/* texte */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl text-orange-400 font-bold p-2">Calculs et Dimensionnement Précis</h2>
                            <p className="p-3 mt-2">
                               Nous utilisons les technologies BIM les plus avancées pour créer des
                                maquettes numériques précises et faciliter la collaboration entre 
                                tous les intervenants.
                            </p>
                            <main className="flex items-center gap-4">
                                <div className="p-2 bg-orange-200 rounded-full">
                               <PiCalculator className="h-10 w-10"/>
                               </div>
                               <article>
                                <h3 className="font-bold text-lg">BIM Cloud</h3>
                                <p>Collaboration en temps réel sur plateforme cloud sécurisée.</p>
                                </article>
                            </main>
                            <main className="flex items-center gap-4">
                                <div className="p-2 bg-orange-200 rounded-full">
                                 <IoDocumentOutline  className="h-10 w-10"/>
                               </div>
                               <article>
                                <h3 className="font-bold text-lg">Réalité Virtuelle</h3>
                                <p>Immersion totale dans vos projets avant construction.</p>
                                </article>
                            </main>
                            <main className="flex items-center gap-4">
                                <div className="p-2 bg-orange-200 rounded-full">
                                 <GoLightBulb className="h-10 w-10"/>
                               </div>
                
                               <article>
                                <h3  className="font-bold text-lg">BIM Mobile</h3>
                                <p>Accès aux modèles depuis tablettes et smartphones sur chantier.</p>
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