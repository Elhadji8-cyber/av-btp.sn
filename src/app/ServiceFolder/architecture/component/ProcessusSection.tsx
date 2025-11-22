"use client"
import {motion} from 'framer-motion'
export const ProcessusSection = function(){
    return(
        <section className="flex flex-col items-center gap-5 p-6 sm:p-8 md:p-10 mt-20">
            <motion.h1
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, transition:{duration:1}, y:0}}
            className="text-4xl sm:text-5xl md:text-6xl text-sky-400 font-bold p-2">Notre Processus de Conception</motion.h1>
            <motion.p 
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
            className="text-center max-w-2xl">
                Une méthodologie éprouvée pour mener à bien vos projets architecturaux de la
                <span className="block">conception à la livraison.</span>
            </motion.p>

            <article className="w-full max-w-6xl mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
                    <motion.main
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
                    className="flex flex-col justify-center items-center p-5 w-full max-w-sm">
                        <h3 className="text-center p-5 text-3xl font-bold bg-sky-400 rounded-full w-fit">01</h3>
                        <h3 className="text-center font-bold mt-3">Consultation Initiale</h3>
                        <p className="text-center mt-3">
                            Analyse de vos besoins, du terrain
                            <span className="block">et définition du programme</span>
                            <span className="block">architectural.</span>
                        </p>
                    </motion.main>

                    <motion.main 
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, transition:{duration:1, delay:0.4}, y:0}}
                    className="flex flex-col justify-center items-center p-5 w-full max-w-sm">
                        <h3 className="text-center p-5 text-3xl font-bold bg-sky-400 rounded-full w-fit">02</h3>
                        <h3 className="text-center font-bold mt-3">Avant-Projet</h3>
                        <p className="text-center mt-3">
                            Esquisse et études préliminaires
                            <span className="block">avec présentation des concepts de</span>
                            <span className="block">design.</span>
                        </p>
                    </motion.main>

                    <motion.main
                     initial={{opacity:0, y:50}}
                     whileInView={{opacity:1, transition:{duration:1, delay:0.5}, y:0}}
                    className="flex flex-col justify-center items-center p-5 w-full max-w-sm">
                        <h3 className="text-center p-5 text-3xl font-bold bg-sky-400 rounded-full w-fit">03</h3>
                        <h3 className="text-center font-bold mt-3">Projet Définitif</h3>
                        <p className="text-center mt-3">
                            Plans détaillés, spécifications
                            <span className="block">techniques et dossier de permis de</span>
                            <span className="block">construire.</span>
                        </p>
                    </motion.main>

                    <motion.main 
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, transition:{duration:1, delay:0.5}, y:0}}
                    className="flex flex-col justify-center items-center p-5 w-full max-w-sm">
                        <h3 className="text-center p-5 text-3xl font-bold bg-sky-400 rounded-full w-fit">04</h3>
                        <h3 className="text-center font-bold mt-3">Suivi de Réalisation</h3>
                        <p className="text-center mt-3">
                            Accompagnement durant la
                            <span className="block">construction et réception des</span>
                            <span className="block">travaux.</span>
                        </p>
                    </motion.main>
                </div>
            </article>
        </section>
    )
}