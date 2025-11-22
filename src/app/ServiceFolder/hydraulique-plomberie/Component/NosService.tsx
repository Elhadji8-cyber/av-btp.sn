"use client"
import {motion} from "framer-motion"
import { PiFlowerTulip } from "react-icons/pi";
import { IoWaterOutline } from "react-icons/io5";
import { RiWaterFlashLine } from "react-icons/ri";
import { MdOutlineDone } from "react-icons/md";
import { FaSkyatlas } from "react-icons/fa";
export const NosServiceSection = function(){
    return(
        <section className="flex flex-col justify-center items-center mt-20 bg-neutral-100 p-6 md:p-10">
                                  <div className="w-full max-w-6xl px-4 md:px-0">
                                      {/*Text contenu*/}
                                      <motion.h1
                                      initial={{opacity:0, y:50}}
                                      whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                      className="text-3xl sm:text-4xl text-center md:text-6xl font-bold p-2">Nos Services Hydrauliques</motion.h1>
                                      <motion.p 
                                      initial={{opacity:0, y:50}}
                                      whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                                      className="flex flex-col justify-center items-center p-2 text-center max-w-3xl mx-auto">
                                         De la conception à la maintenance, nous maîtrisons tous les aspects de l'ingénierie,
                                          
                                          <span className="text-center">hydraulique et de la gestion de l'eau.</span>
                                      </motion.p>
                                  </div>
                      
                                  <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] gap-y-6 gap-8 mt-8 justify-items-center px-4 md:px-0">
                                      <motion.main 
                                      initial={{opacity:0, y:50}}
                                      whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                      className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                          <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                                              <IoWaterOutline className="w-8 h-8 sm:w-10 sm:h-10" />
                                          </article>
                                          <div>
                                              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Adduction d'Eau Potable</h3>
                                              <p>
                                                  Conception et réalisation de réseaux d'alimentation en eau
                                                  <span>potable pour collectivités et industries.</span>
                                              </p>
                                              <ul className="flex flex-col p-5 mt-2 gap-5">
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Études de besoins</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Dimensionnement réseaux</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Stations de pompage</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Contrôle qualité eau</li>
                                              </ul>
                                          </div>
                                      </motion.main>
                      
                                      <motion.main 
                                      initial={{opacity:0, y:50}}
                                       whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                      className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                          <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                                              <RiWaterFlashLine className="w-8 h-8 sm:w-10 sm:h-10" />
                                          </article>
                                          <div>
                                              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Assainissement</h3>
                                              <p>
                                                  Systèmes d'évacuation et traitement des eaux usées respectueux
                                                  <span>de l'environnement.</span>
                                              </p>
                                              <ul className="flex flex-col p-5 mt-2 gap-5">
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Réseaux EU/EP</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Stations d'épuration</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Fosses septiques</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Lagunage naturel</li>
                                              </ul>
                                          </div>
                                      </motion.main>
                      
                                      <motion.main
                                       initial={{opacity:0, y:50}}
                                        whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                      className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                          <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                                              <FaSkyatlas className="w-8 h-8 sm:w-10 sm:h-10" />
                                          </article>
                                          <div>
                                              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Gestion Eaux Pluviales</h3>
                                              <p>
                                                 Solutions de collecte, stockage et évacuation des eaux de pluie en
                                                  <span> milieu tropical.</span>
                                              </p>
                                              <ul className="flex flex-col p-5 mt-2 gap-5">
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Bassins de rétention</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Caniveaux</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Drainage urbain</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Prévention inondations</li>
                                              </ul>
                                          </div>
                                      </motion.main>
                      
                                      <motion.main
                                      initial={{opacity:0, y:50}}
                                      whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                      className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                          <div>
                                              <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                                                  <PiFlowerTulip className="w-8 h-8 sm:w-10 sm:h-10" />
                                              </article>
                                              <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Irrigation & Agriculture</h3>
                                              <p>
                                                  Systèmes d'irrigation modernes pour l'agriculture et
                                                  <span>l'aménagement paysager.</span>
                                              </p>
                                              <ul className="flex flex-col p-5 mt-2 gap-5">
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Irrigation goutte-à-goutte</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Aspersion</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Micro-irrigation</li>
                                                  <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Automatisation</li>
                                              </ul>
                                          </div>
                                      </motion.main>
                          </div>
            </section>
    )
}