"use client"
import {motion} from 'framer-motion'
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";
import { MdOutlineHighlight } from "react-icons/md";
import { CiBatteryCharging } from "react-icons/ci";
import { GoCpu } from "react-icons/go";
export const ServiceElectric = function(){
    return(
            <section className="flex flex-col justify-center items-center mt-20 bg-neutral-100 p-6 md:p-10">
                <div className="w-full max-w-6xl px-4 md:px-0">
                    {/*Text contenu*/}
                    <motion.h1
                     initial={{opacity:0, y:50}}
                     whileInView={{opacity:1, transition:{duration:1}, y:0}}
                    className="text-3xl sm:text-4xl text-center md:text-6xl font-bold p-2">Nos Services en Génie Électrique</motion.h1>
                    <motion.p 
                    initial={{opacity:0, y:40}}
                     whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                    className="flex flex-col justify-center items-center p-2 text-center max-w-3xl mx-auto">
                        De l'installation électrique classique aux énergies 
                        renouvelables, nous couvrons tous
                        <span className="text-center">les besoins électriques.</span>
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] gap-y-6 gap-8 mt-8 justify-items-center px-4 md:px-0">
                    <motion.main
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, transition:{duration:1}, y:0}}
                    className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-fuchsia-200 hover:transition-shadow duration-300">
                        <article className="p-5 bg-amber-200 rounded-full w-fit mx-auto md:mx-0">
                            <BsLightningCharge className="w-8 h-8 sm:w-10 sm:h-10" />
                        </article>
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Installations Électriques</h3>
                            <p>
                                Conception et réalisation d'installations électriques pour tous
                                <span>types de bâtiments.</span>
                            </p>
                            <ul className="flex flex-col p-5 mt-2 gap-5">
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Tableaux électriques</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Éclairage LED</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Prises et circuits</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Mise aux normes</li>
                            </ul>
                        </div>
                    </motion.main>

                    <motion.main 
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, transition:{duration:1}, y:0}}
                    className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-fuchsia-200 hover:transition-shadow duration-300">
                        <article className="p-5 bg-amber-200 rounded-full w-fit mx-auto md:mx-0">
                            <MdOutlineHighlight className="w-8 h-8 sm:w-10 sm:h-10" />
                        </article>
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Éclairage Public</h3>
                            <p>
                                Systèmes d'éclairage urbain et routier avec solutions LED
                                <span>économiques.</span>
                            </p>
                            <ul className="flex flex-col p-5 mt-2 gap-5">
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Candélabres LED</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Éclairage solaire</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Gestion intelligente</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Maintenance</li>
                            </ul>
                        </div>
                    </motion.main>

                    <motion.main
                     initial={{opacity:0, y:50}}
                     whileInView={{opacity:1, transition:{duration:1}, y:0}}
                    className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-fuchsia-200 hover:transition-shadow duration-300">
                        <article className="p-5 bg-amber-200 rounded-full w-fit mx-auto md:mx-0">
                            <CiBatteryCharging className="w-8 h-8 sm:w-10 sm:h-10" />
                        </article>
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Énergies Renouvelables</h3>
                            <p>
                                Installation de systèmes photovoltaïques et solutions énergétiques
                                <span>durables.</span>
                            </p>
                            <ul className="flex flex-col p-5 mt-2 gap-5">
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Panneaux solaires</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Onduleurs</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Stockage énergie</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Monitoring</li>
                            </ul>
                        </div>
                    </motion.main>

                    <motion.main
                     initial={{opacity:0, y:50}}
                     whileInView={{opacity:1, transition:{duration:1}, y:0}}
                    className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-fuchsia-200 hover:transition-shadow duration-300">
                        <div>
                            <article className="p-5 bg-amber-200 rounded-full w-fit mx-auto md:mx-0">
                                <GoCpu className="w-8 h-8 sm:w-10 sm:h-10" />
                            </article>
                            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Automatisation</h3>
                            <p>
                                Systèmes de contrôle et d'automatisation pour l'industrie et le
                                <span>tertiaire.</span>
                            </p>
                            <ul className="flex flex-col p-5 mt-2 gap-5">
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Automates programmables</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Supervision</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Variateurs de vitesse</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Télégestion</li>
                            </ul>
                        </div>
                    </motion.main>
                </div>
            </section>
    )
}