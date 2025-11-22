"use client"
import {motion} from "framer-motion"
import { RiComputerLine } from "react-icons/ri";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLeafOutline } from "react-icons/io5";
import Image from 'next/image';
import image1 from '../image/génie-plumber.jpeg'
export const HydraulicTechnologi = function(){
    return(
        <section className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20 p-4 md:p-10">
                                <motion.div 
                                initial={{opacity:0, y:50}}
                                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                className="h-fit lg:h-[500px] w-full lg:w-[600px] flex flex-col gap-5">
                                    {/* texte */}
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-sky-400 font-bold p-2">Technologies Hydrauliques Avancées</h2>
                                    <p className="p-3 mt-2">
                                       Nous utilisons les technologies les plus modernes pour optimiser 
                                       la gestion de l'eau et garantir des installations durables et
                                        efficaces.
                                    </p>
                                    <main className="flex items-center gap-4">
                                        <div className="p-2 bg-sky-200 rounded-full">
                                       <RiComputerLine className="h-10 w-10"/>
                                       </div>
                                       <article>
                                        <h3 className="font-bold text-lg">Modélisation Hydraulique</h3>
                                        <p>Logiciels EPANET, HEC-RAS pour la simulation des réseaux.</p>
                                        </article>
                                    </main>
                                    <main className="flex items-center gap-4">
                                        <div className="p-2 bg-sky-200 rounded-full">
                                         <IoIosPhonePortrait  className="h-10 w-10"/>
                                       </div>
                                       <article>
                                        <h3 className="font-bold text-lg">Télégestion</h3>
                                        <p>Systèmes de surveillance et contrôle à distance des installations.</p>
                                        </article>
                                    </main>
                                    <main className="flex items-center gap-4">
                                        <div className="p-2 bg-sky-200 rounded-full">
                                         <IoLeafOutline className="h-10 w-10"/>
                                       </div>
                        
                                       <article>
                                        <h3  className="font-bold text-lg">Solutions Écologiques</h3>
                                        <p>Techniques naturelles de traitement et économies d'énergie.</p>
                                        </article>
                                    </main>
                                </motion.div>
                        
                                <motion.div
                                initial={{opacity:0, y:50}}
                                 whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] lg:w-[500px] relative rounded-2xl shadow-md overflow-hidden">
                                    {/* image */}
                                    <Image src={image1} alt='image'
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 500px"
                                    className="object-cover
                                    hover:transition-transform hover:scale-105 duration-300 ease-in-out"/>
                                </motion.div>
                     </section> 
    )
}