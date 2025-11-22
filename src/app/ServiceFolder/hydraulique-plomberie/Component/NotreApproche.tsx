"use client"
import {motion} from 'framer-motion'
export const NotreApproche = function(){
       return(
         <section className="flex flex-col items-center gap-5 p-4 sm:p-6 md:p-10 mt-20">
          <motion.h1
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, transition:{duration:1}, y:0}}
          className="text-3xl sm:text-5xl md:text-6xl font-bold p-2 text-center">Notre Approche Méthodologique</motion.h1>
          <motion.p
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
          className="text-center max-w-xl sm:max-w-2xl px-2">
             Une démarche structurée pour garantir l'efficacité et la durabilité de tous nos projets
             <span className="block">hydrauliques.</span>
          </motion.p>

          <article className="w-full max-w-6xl mt-6 px-2 sm:px-0">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                <motion.main 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
                className="flex flex-col justify-center items-center p-4 sm:p-5 w-full max-w-xs sm:max-w-sm">
                    <h3 className="text-center p-4 sm:p-5 text-2xl sm:text-3xl font-bold bg-sky-200 rounded-full w-fit">01</h3>
                    <h3 className="text-center font-bold mt-3 text-lg sm:text-xl">Études Hydrologiques</h3>
                    <p className="text-center mt-3 text-sm sm:text-base">
                       Analyse des ressources en eau, débits et qualité pour
                       <span className="block">dimensionner les installations.</span>
                    </p>
                </motion.main>

                <motion.main
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.4}, y:0}}
                className="flex flex-col justify-center items-center p-4 sm:p-5 w-full max-w-xs sm:max-w-sm">
                    <h3 className="text-center p-4 sm:p-5 text-2xl sm:text-3xl font-bold bg-sky-200 rounded-full w-fit">02</h3>
                    <h3 className="text-center font-bold mt-3 text-lg sm:text-xl">Conception Hydraulique</h3>
                    <p className="text-center mt-3 text-sm sm:text-base">
                       Calculs hydrauliques, choix des
                       <span className="block">équipements et élaboration des</span>
                       <span className="block">plans techniques.</span>
                    </p>
                </motion.main>

                <motion.main 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.5}, y:0}}
                className="flex flex-col justify-center items-center p-4 sm:p-5 w-full max-w-xs sm:max-w-sm">
                    <h3 className="text-center p-4 sm:p-5 text-2xl sm:text-3xl font-bold bg-sky-200 rounded-full w-fit">03</h3>
                    <h3 className="text-center font-bold mt-3 text-lg sm:text-xl">Réalisation & Tests</h3>
                    <p className="text-center mt-3 text-sm sm:text-base">
                       Installation des équipements, mise
                       <span className="block">en service et tests de performance.</span>
                       
                    </p>
                </motion.main>

                <motion.main 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.5}, y:0}}
                className="flex flex-col justify-center items-center p-4 sm:p-5 w-full max-w-xs sm:max-w-sm">
                    <h3 className="text-center p-4 sm:p-5 text-2xl sm:text-3xl font-bold bg-sky-200 rounded-full w-fit">04</h3>
                    <h3 className="text-center font-bold mt-3 text-lg sm:text-xl">Formation & Maintenance</h3>
                    <p className="text-center mt-3 text-sm sm:text-base">
                      Formation des opérateurs et mise en place de la maintenance
                       <span className="block">préventive.</span>
                    </p>
                </motion.main>
             </div>
          </article>
       </section>
       )
}