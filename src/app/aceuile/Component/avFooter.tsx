// ...existing code...
'use client'
import Link from "next/link";
import {motion} from 'framer-motion'
export const AvFooterSection = function(){
    return(
        <section className="flex flex-col items-center bg-sky-500 text-white 
            px-6 py-12 sm:px-8 sm:py-14 md:px-16 md:py-20 gap-6 relative 
            md:bottom-10 sm bottom-25">
            <div className="w-full max-w-5xl text-center">
                <motion.h1 
                 initial={{opacity:0, y: 50}}
                whileInView={{opacity:1, transition:{duration:1.2}, y:0}}
                transition={{ease: "easeOut", delay: 0.2}}
                className="font-bold text-3xl sm:text-4xl md:text-6xl leading-tight">
                    Prêt à concrétiser votre projet ?
                </motion.h1>
            </div>

            <motion.div
            initial={{opacity:0, y: 50}}
            whileInView={{opacity:1, transition:{duration:1.2}, y:0}}
            transition={{ease: "easeOut", delay: 0.2}}
            className="w-full max-w-3xl text-center text-sm sm:text-base">
                <p>Notre équipe d'experts est là pour vous accompagner de la conception à la réalisation.</p>
                <p>Contactez-nous pour discuter de votre vision.</p>
            </motion.div>

            <div className="w-full max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-2">
                <Link 
                    href="/ContactSection" 
                    className="w-full sm:w-auto text-center px-6 py-3 bg-white rounded-[20px] text-black
                    hover:bg-black hover:text-white transition-colors duration-300"
                    aria-label="Demander un Devis"
                >
                    Demander un Devis
                </Link>

                <Link 
                    href="https://wa.me/221770862226"
                    target="_blank" 
                    className="w-full sm:w-auto text-center px-6 py-3 border-2 border-white rounded-[20px] text-white
                    hover:bg-black hover:text-white transition-colors duration-300"
                    aria-label="Parler avec un expert"
                >
                    Parler avec un expert
                </Link>
            </div>
        </section>
    )
}
// ...existing code...