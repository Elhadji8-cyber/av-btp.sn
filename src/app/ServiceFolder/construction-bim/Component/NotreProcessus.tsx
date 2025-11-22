"use client"
import {motion} from 'framer-motion'
export const NotreProcessus = function(){
    return(
    <section className="flex flex-col items-center gap-5 p-4 sm:p-6 md:p-10 mt-20">
          <motion.h1 
          initial={{opacity:0, y:30}}
         whileInView={{opacity:1, transition:{duration:1}, y:0}}
          className="text-3xl sm:text-5xl md:text-6xl font-bold p-2 text-center">Notre Processus BIM</motion.h1>
          <motion.p 
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
          className="text-center max-w-xl sm:max-w-2xl px-2">
             Une méthodologie éprouvée pour maximiser les bénéfices du BIM sur vos projets de
             <span className="block">construction.</span>
          </motion.p>

          <article className="w-full max-w-6xl mt-6 px-2 sm:px-0">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                <motion.main
                 initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
                className="flex flex-col justify-center items-center p-4 sm:p-5 w-full max-w-xs sm:max-w-sm">
                    <h3 className="text-center p-4 sm:p-5 text-2xl sm:text-3xl font-bold bg-fuchsia-200 rounded-full w-fit">01</h3>
                    <h3 className="text-center font-bold mt-3 text-lg sm:text-xl">Analyse du Projet</h3>
                    <p className="text-center mt-3 text-sm sm:text-base">
                       Étude des besoins et définition de
                       <span className="block">la stratégie BIM adaptée au projet.</span>
                    </p>
                </motion.main>

                <motion.main
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.4}, y:0}}
                className="flex flex-col justify-center items-center p-4 sm:p-5 w-full max-w-xs sm:max-w-sm">
                    <h3 className="text-center p-4 sm:p-5 text-2xl sm:text-3xl font-bold bg-fuchsia-200 rounded-full w-fit">02</h3>
                    <h3 className="text-center font-bold mt-3 text-lg sm:text-xl">Modélisation 3D</h3>
                    <p className="text-center mt-3 text-sm sm:text-base">
                       Création des maquettes
                       <span className="block">numériques par corps d'état avec</span>
                       <span className="block">niveau de détail adapté.</span>
                    </p>
                </motion.main>

                <motion.main
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.5}, y:0}}
                className="flex flex-col justify-center items-center p-4 sm:p-5 w-full max-w-xs sm:max-w-sm">
                    <h3 className="text-center p-4 sm:p-5 text-2xl sm:text-3xl font-bold bg-fuchsia-200 rounded-full w-fit">03</h3>
                    <h3 className="text-center font-bold mt-3 text-lg sm:text-xl">Coordination</h3>
                    <p className="text-center mt-3 text-sm sm:text-base">
                       Détection et résolution des conflits
                       <span className="block">entre les différents modèles</span>
                       <span className="block">métiers.</span>
                    </p>
                </motion.main>

                <motion.main
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.5}, y:0}}
                className="flex flex-col justify-center items-center p-4 sm:p-5 w-full max-w-xs sm:max-w-sm">
                    <h3 className="text-center p-4 sm:p-5 text-2xl sm:text-3xl font-bold bg-fuchsia-200 rounded-full w-fit">04</h3>
                    <h3 className="text-center font-bold mt-3 text-lg sm:text-xl">Production & Livraison</h3>
                    <p className="text-center mt-3 text-sm sm:text-base">
                       Extraction des plans, métrés et
                       <span className="block">documentation technique depuis</span>
                       <span className="block">les modèles.</span>
                    </p>
                </motion.main>
             </div>
          </article>
       </section>
    )
}