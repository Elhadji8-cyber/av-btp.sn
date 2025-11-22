"use client"
import { MdOutlineDone } from "react-icons/md";
import {motion} from 'framer-motion'
import { RiHammerLine } from "react-icons/ri";
import { GiRoad } from "react-icons/gi";
import { TbBuildingFactory } from "react-icons/tb";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
export const ServiceGenieCivil = function(){
    return(
              <section className="flex flex-col justify-center items-center mt-20 bg-neutral-100 p-6 md:p-10">
                          <div className="w-full max-w-6xl px-4 md:px-0">
                              {/*Text contenu*/}
                              <motion.h1
                              initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, transition:{duration:1}, y:0}}
                              className="text-3xl sm:text-4xl text-center md:text-6xl font-bold p-2">Nos Services en Génie Civil</motion.h1>
                              <motion.p
                              initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
                              className="flex flex-col justify-center items-center p-2 text-center max-w-3xl mx-auto">
                                 De la conception structurelle à la réalisation d'infrastructures,
                                  nous maîtrisons tous les
                                  <span className="text-center">aspects du génie civil.</span>
                              </motion.p>
                          </div>
              
                          <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] gap-y-6 gap-8 mt-8 justify-items-center px-4 md:px-0">
                              <motion.main
                               initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                              className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                  <article className="p-5 bg-orange-200 rounded-full w-fit mx-auto md:mx-0">
                                      <RiHammerLine className="w-8 h-8 sm:w-10 sm:h-10" />
                                  </article>
                                  <div>
                                      <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Études Structurelles</h3>
                                      <p>
                                          Calculs de structures, dimensionnement béton armé et charpente
                                          <span>métallique selon les normes en vigueur.</span>
                                      </p>
                                      <ul className="flex flex-col p-5 mt-2 gap-5">
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Calculs de résistance</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Plans de ferraillage</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Notes de calcul</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Contrôle qualité</li>
                                      </ul>
                                  </div>
                              </motion.main>
              
                              <motion.main 
                              initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                              className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                  <article className="p-5 bg-orange-200 rounded-full w-fit mx-auto md:mx-0">
                                      <GiRoad className="w-8 h-8 sm:w-10 sm:h-10" />
                                  </article>
                                  <div>
                                      <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Infrastructures Routières</h3>
                                      <p>
                                          Conception et réalisation de routes, ponts, ouvrages d'art et 
                                          <span>aménagements urbains.</span>
                                      </p>
                                      <ul className="flex flex-col p-5 mt-2 gap-5">
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Études de trafic</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Terrassements</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Revêtements</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Signalisation</li>
                                      </ul>
                                  </div>
                              </motion.main>
              
                              <motion.main 
                               initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, transition:{duration:1, delay:0.5}, y:0}}
                              className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                  <article className="p-5 bg-orange-200 rounded-full w-fit mx-auto md:mx-0">
                                      <TbBuildingFactory className="w-8 h-8 sm:w-10 sm:h-10" />
                                  </article>
                                  <div>
                                      <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Fondations Spéciales</h3>
                                      <p>
                                         Études géotechniques et conception de fondations adaptées aux
                                          <span> sols sénégalais.</span>
                                      </p>
                                      <ul className="flex flex-col p-5 mt-2 gap-5">
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Sondages géotechniques</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Fondations profondes</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Micropieux</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Renforcement de sols</li>
                                      </ul>
                                  </div>
                              </motion.main>
              
                              <motion.main
                               initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, transition:{duration:1, delay:0.5}, y:0}}
                              className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                  <div>
                                      <article className="p-5 bg-orange-200 rounded-full w-fit mx-auto md:mx-0">
                                          <MdOutlineSettingsInputAntenna className="w-8 h-8 sm:w-10 sm:h-10" />
                                      </article>
                                      <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Suivi de Chantier</h3>
                                      <p>
                                          Supervision technique, contrôle qualité et coordination des travaux
                                          <span>de construction.</span>
                                      </p>
                                      <ul className="flex flex-col p-5 mt-2 gap-5">
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Planning travaux</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Contrôle qualité</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Sécurité chantier</li>
                                          <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Réception ouvrages</li>
                                      </ul>
                                  </div>
                              </motion.main>
                          </div>
                      </section>
    )
}