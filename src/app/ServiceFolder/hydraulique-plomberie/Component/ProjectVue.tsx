"use client"
import {motion} from "framer-motion"
import Link from 'next/link'
export const ProjectVue = function(){
    return(
         <section className="flex flex-col items-center justify-center bg-sky-400 mt-12 md:mt-20 p-6 sm:p-12 md:p-20 mb-10">
                             <div className="w-full max-w-4xl text-center">
                                 <motion.h1 
                                 initial={{opacity:0, y:30}}
                                 whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-5">
                                     Projet Hydraulique en Vue ?
                                 </motion.h1>
                                 <motion.p
                                 initial={{opacity:0, y:30}}
                                 whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                                 className="text-white text-base sm:text-lg md:text-xl px-2 sm:px-8">
                                     Que ce soit pour l'adduction d'eau, l'assainissement ou l'irrigation, notre équipe d'ingénieurs
                                     <span className="block">hydrauliciens est prête à vous accompagner.</span>
                                 </motion.p>
                             </div>
                 
                             <div className="flex flex-col justify-center items-center sm:flex-row gap-3 sm:gap-5 mt-4 sm:mt-5 w-full max-w-sm sm:max-w-none">
                                 <Link
                                     href="../../../ContactSection"
                                     className="px-6 py-3 rounded-full bg-white text-black text-center w-full sm:w-auto"
                                 >
                                     Demande un Devis
                                 </Link>
                                 <Link
                                     href="https://wa.me/221770862226"
                                     className="px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 text-center w-full sm:w-auto"
                                 >
                                     Contacter Nous
                                 </Link>
                             </div>
        </section>
    )
}