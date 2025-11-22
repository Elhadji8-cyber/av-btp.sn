"use client"
import {motion} from 'framer-motion'
import { LuHouse } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { RiLeafLine } from "react-icons/ri";
export const ProjectSection = function(){
    return(
        <section className="flex flex-col justify-center items-center mt-20 bg-neutral-100 p-6 md:p-10">
            <div className="w-full max-w-6xl px-4 md:px-0">
                {/*Text contenu*/}
                <motion.h1 
                initial={{opacity:0, y:50}}
                 whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="text-3xl text-center sm:text-4xl md:text-6xl font-bold p-2">Nos Expertises Architecturale</motion.h1>
                <motion.p
                 initial={{opacity:0, y:40}}
                   whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                 className="flex flex-col justify-center items-center p-2 text-center max-w-3xl mx-auto">
                    De la conception à la réalisation, nous accompagnons
                    vos projets architecturaux avec
                    <span className="text-center">créativité et rigueur technique.</span>
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] gap-y-6 gap-8 mt-8 justify-items-center px-4 md:px-0">
                <motion.main
                initial={{opacity:0, y:50}}
                 whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-[#1a52eb96] hover:transition-shadow duration-300">
                    <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                        <LuHouse className="w-8 h-8 sm:w-10 sm:h-10" />
                    </article>
                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Conception Résidentielle</h3>
                        <p>
                            Maisons individuelles, villas, résidences et complexes d'habitation
                            <span>adaptés au climat tropical.</span>
                        </p>
                        <ul className="flex flex-col p-5 mt-2 gap-5">
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Plans architecturaux</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Études de faisabilité</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Permis de construire</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Suivi de chantier</li>
                        </ul>
                    </div>
                </motion.main>

                <motion.main 
                initial={{opacity:0, y:50}}
                 whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-[#1a52eb96] hover:transition-shadow duration-300">
                    <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                        <BiBuildingHouse className="w-8 h-8 sm:w-10 sm:h-10" />
                    </article>
                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Architecture Commerciale</h3>
                        <p>
                            Bureaux, centres commerciaux, hôtels et bâtiments d'entreprise
                            <span>avec design moderne.</span>
                        </p>
                        <ul className="flex flex-col p-5 mt-2 gap-5">
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Espaces fonctionnels</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Optimisation énergétique</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Accessibilité PMR</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Normes de sécurité</li>
                        </ul>
                    </div>
                </motion.main>

                <motion.main
                initial={{opacity:0, y:50}}
                 whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-[#1a52eb96] hover:transition-shadow duration-300">
                    <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                        <TbBuildingWarehouse className="w-8 h-8 sm:w-10 sm:h-10" />
                    </article>
                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Bâtiments Publics</h3>
                        <p>
                            Écoles, hôpitaux, administrations et équipements collectifs
                            <span>respectant les normes publiques.</span>
                        </p>
                        <ul className="flex flex-col p-5 mt-2 gap-5">
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Conformité réglementaire</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Durabilité</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Maintenance réduite</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Confort d'usage</li>
                        </ul>
                    </div>
                </motion.main>

                <motion.main 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-[#1a52eb96] hover:transition-shadow duration-300">
                    <div>
                        <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                            <RiLeafLine className="w-8 h-8 sm:w-10 sm:h-10" />
                        </article>
                        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Architecture Durable</h3>
                        <p>
                            Conception bioclimatique et éco-responsable pour un habitat
                            <span>respectueux de l'environnement.</span>
                        </p>
                        <ul className="flex flex-col p-5 mt-2 gap-5">
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Matériaux locaux</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Efficacité énergétique</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Gestion des eaux</li>
                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Ventilation naturelle</li>
                        </ul>
                    </div>
                </motion.main>
            </div>
        </section>
    )
}