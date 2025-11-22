'use client'
import {motion} from "framer-motion"
import Image from 'next/image'
import image from '../image/surCi.jpg'
import { GrShieldSecurity } from "react-icons/gr";
import { FiCloudLightning } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
export const ConceptionExpert = function(){
    return(
          <section className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20 p-4 md:p-10">
                                  <motion.div
                                  initial={{opacity:0, y:50}}
                                  whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                  className="h-fit lg:h-[500px] w-full lg:w-[600px] flex flex-col gap-5">
                                                      {/* texte */}
                                       <h2 className="text-3xl sm:text-4xl md:text-5xl text-green-400 font-bold p-2">Conception et Installation Expertes</h2>
                                       <p className="p-3 mt-2">
                                          Nos ingénieurs mécaniciens utilisent les dernières technologies 
                                          pour concevoir des installations performantes et durables.
                                       </p>
                                            <main className="flex items-center gap-4">
                                                          <div className="p-2 bg-green-200 rounded-full">
                                                         <GrShieldSecurity className="h-10 w-10"/>
                                                         </div>
                                                         <article>
                                                          <h3 className="font-bold text-lg">Logiciels Spécialisés</h3>
                                                          <p>AutoCAD MEP, Revit MEP pour la conception 3D des installations.</p>
                                                          </article>
                                                      </main>
                                                      <main className="flex items-center gap-4">
                                                          <div className="p-2 bg-green-200 rounded-full">
                                                           <FiCloudLightning className="h-10 w-10"/>
                                                         </div>
                                                         <article>
                                                          <h3 className="font-bold text-lg">Normes de Sécurité</h3>
                                                          <p>Respect des normes internationales et locales de sécurité.</p>
                                                          </article>
                                                      </main>
                                                      <main className="flex items-center gap-4">
                                                          <div className="p-2 bg-green-200 rounded-full">
                                                           <BsClockHistory className="h-10 w-10"/>
                                                         </div>
                                          
                                                         <article>
                                                          <h3  className="font-bold text-lg">Support Technique</h3>
                                                          <p>Assistance technique 24h/7j et maintenance préventive.</p>
                                                          </article>
                                                      </main>
                                                  </motion.div>
                                          
                                                  <motion.div
                                                  initial={{opacity:0, y:50}}
                                                  whileInView={{opacity:1, transition:{duration:1}, y:0}}
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