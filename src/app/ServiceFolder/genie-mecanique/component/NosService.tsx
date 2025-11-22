"use client"
import {motion} from "framer-motion"
import { IoSettingsOutline } from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";
import { DiDoctrine } from "react-icons/di";
import { PiCpuThin } from "react-icons/pi";
import { MdOutlineDone } from "react-icons/md";
export const NosService = function(){
    return(
         <section className='flex flex-col justify-center items-center mt-20 bg-neutral-100 p-6 md:p-10'>
          {/* Wrapper: largeur max et texte d'introduction */}
                                      <div className="w-full max-w-6xl px-4 md:px-0">
                                          {/* Titre */}
                                          <motion.h1 
                                          initial={{opacity:0, y:50}}
                                          whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                          className="text-3xl sm:text-4xl text-center md:text-6xl font-bold p-2">
                                              Nos Services en Génie Mécanique
                                          </motion.h1>
          
                                          {/* Paragraphe descriptif */}
                                          <motion.p 
                                          initial={{opacity:0, y:50}}
                                          whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                          className="flex flex-col justify-center items-center p-2 text-center max-w-3xl mx-auto">
                                             De la conception à la maintenance, nous maîtrisons tous les aspects des installations
                                              <span className="text-center">mécaniques et industrielles.</span>
                                          </motion.p>
                                      </div>
          
                                      {/* Grid: cartes de services */}
                                      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] gap-y-6 gap-8 mt-8 justify-items-center px-4 md:px-0">
          
                                          {/* Carte 1: Adduction d'Eau Potable */}
                                          <motion.main 
                                          initial={{opacity:0, y:50}}
                                          whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                          className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                              <article className="p-5 bg-green-200 rounded-full w-fit mx-auto md:mx-0">
                                                  <IoSettingsOutline className="w-8 h-8 sm:w-10 sm:h-10" />
                                              </article>
                                              <div>
                                                  <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Installations Mécaniques</h3>
                                                  <p>
                                                      Conception et installation de systèmes mécaniques pour
                                                      <span>bâtiments industriels et tertiaires.</span>
                                                  </p>
                                                  <ul className="flex flex-col p-5 mt-2 gap-5">
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Systèmes de ventilation</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Climatisation industrielle</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Chauffage et refroidissement</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Maintenance préventive</li>
                                                  </ul>
                                              </div>
                                          </motion.main>
          
                                          {/* Carte 2: Assainissement */}
                                          <motion.main 
                                          initial={{opacity:0, y:50}}
                                        whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                          className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                              <article className="p-5 bg-green-200 rounded-full w-fit mx-auto md:mx-0">
                                                  < RiToolsFill className="w-8 h-8 sm:w-10 sm:h-10" />
                                              </article>
                                              <div>
                                                  <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Équipements Industriels</h3>
                                                  <p>
                                                      Étude, fourniture et installation d'équipements mécaniques pour
                                                      <span>l'industrie.</span>
                                                  </p>
                                                  <ul className="flex flex-col p-5 mt-2 gap-5">
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Machines industrielles</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Convoyeurs</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Systèmes hydrauliques</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Automatisation</li>
                                                  </ul>
                                              </div>
                                          </motion.main>
          
                                          {/* Carte 3: Gestion Eaux Pluviales */}
                                          <motion.main 
                                           initial={{opacity:0, y:50}}
                                           whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                          className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                              <article className="p-5 bg-green-200 rounded-full w-fit mx-auto md:mx-0">
                                                  <DiDoctrine className="w-8 h-8 sm:w-10 sm:h-10" />
                                              </article>
                                              <div>
                                                  <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Systèmes Hydrauliques</h3>
                                                  <p>
                                                      Conception de circuits hydrauliques et pneumatiques pour
                                                      <span> applications industrielles.</span>
                                                  </p>
                                                  <ul className="flex flex-col p-5 mt-2 gap-5">
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Circuits hydrauliques</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Vérins et pompes</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Systèmes pneumatiques</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Régulation de pression</li>
                                                  </ul>
                                              </div>
                                          </motion.main>
          
                                          {/* Carte 4: Irrigation & Agriculture */}
                                          <motion.main 
                                           initial={{opacity:0, y:50}}
                                           whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                          className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                              <div>
                                                  <article className="p-5 bg-green-200 rounded-full w-fit mx-auto md:mx-0">
                                                      <PiCpuThin className="w-8 h-8 sm:w-10 sm:h-10" />
                                                  </article>
                                                  <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Maintenance Industrielle</h3>
                                                  <p>
                                                      Services de maintenance préventive et curative pour équipements
                                                      <span>mécaniques.</span>
                                                  </p>
                                                  <ul className="flex flex-col p-5 mt-2 gap-5">
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Diagnostic technique</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Réparations</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />MOptimisation énergétique</li>
                                                      <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Formation personnel</li>
                                                  </ul>
                                              </div>
                                          </motion.main>
          
                                      </div>
         </section>
    )
}