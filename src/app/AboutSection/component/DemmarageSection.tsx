"use client"
import Link from 'next/link'
import {motion} from "framer-motion"
export const DemarrageSection = function(){
       return(
    <section className='p-6 sm:p-8 lg:p-30 flex flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-5 bg-sky-500 mb-6 sm:mb-8 lg:mb-10'>
    <motion.h1
        className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold p-2 sm:p-3 text-white text-center'
    >
        Prêt à Démarrer Votre Projet ?
    </motion.h1>
    <motion.p
        className='p-2 sm:p-3 text-white text-center text-sm sm:text-base lg:text-lg max-w-[90%] sm:max-w-[80%] lg:max-w-[70%]'
    >
        Contactez notre équipe d'experts pour discuter de vos besoins et obtenir un devis personnalisé.
    </motion.p>
    <Link 
        href="#"
        className='bg-white text-black px-8 sm:px-12 lg:px-20 py-3 sm:py-3.5 lg:py-4 rounded-full hover:bg-black hover:text-white transition-bg duration-300 text-sm sm:text-base lg:text-lg font-medium w-fit'
    > 
        Demander un Devis
    </Link>
</section>
       )
}