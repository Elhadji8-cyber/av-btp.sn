"use client"
import Link from 'next/link'
import { GrServices } from "react-icons/gr";
import { GrBusinessService } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import image from '../../../../public/Header.png'
import {motion} from 'framer-motion'

export const ExperienceSection = function(){
    return(
     <section className="flex flex-col md:flex-row items-center  justify-center md:bottom-20 gap-8 px-4 py-8 md:py-16 relative
     sm bottom-50">
            {/* texte principal */}
            <main className="w-full md:w-1/2 max-w-xl">
                {/* Heading */}
                <article className="flex flex-col items-start gap-4 mt-4 md:mt-0">
                    <motion.h2 
                    initial={{ opacity:0, y: 50}}
                    whileInView={{opacity:1, transition:{duration:1}, y:0}}
                    transition={{ease: "easeOut", delay: 0.2}}
                    className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                        10 ans D'expériences dans<br/>
                        L'Architecture & <br/>
                        <span className="text-sky-400">Génie Civil</span>
                    </motion.h2>
                </article>

                <motion.article
                initial={{ opacity:0, y: 50}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                transition={{ease: "easeOut", delay: 0.2}}
                className="flex items-start gap-4 mt-6">
                    {/* ligne verticale */}
                    <div className="w-1.5 h-16 bg-sky-400 rounded-full flex-shrink-0"></div>
                    <div className="text-sm sm:text-base text-neutral-700">
                        <p 
                         
                        >
                            Depuis notre création, AV-BTP a conduit avec succès des projets résidentiels,
                            commerciaux et institutionnels. Nous combinons expertise technique et gestion rigoureuse pour garantir
                            la durabilité et la conformité des ouvrages.
                        </p>
                    </div>
                </motion.article>

                {/* services / icônes */}
                <motion.div
                 initial={{ opacity:0, y: 50}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                transition={{ease: "easeOut", delay: 0.2}}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
                    <article className="flex items-center gap-3">
                        <GrServices className="text-2xl sm:text-3xl text-sky-600" />
                        <h3 className="text-sm sm:text-base font-semibold">Architecture &<br className="hidden sm:block"/> Construction BIM</h3>
                    </article>

                    <article className="flex items-center gap-3">
                        <GrBusinessService className="text-2xl sm:text-3xl text-sky-600" />
                        <h3 className="text-sm sm:text-base font-semibold">Béton armé &<br className="hidden sm:block"/> Ferraillage</h3>
                    </article>
                </motion.div>

                {/* liste points */}
                <motion.div
                 initial={{ opacity:0, y: 50}}
                 whileInView={{opacity:1, transition:{duration:1}, y:0}}
                 transition={{ease: "easeOut", delay: 0.2}}
                  className="mt-6 space-y-3">
                    <div className="flex items-start gap-3">
                        <FaArrowRightLong className="mt-1 text-sky-600" />
                        <p className="text-sm sm:text-base">Calculs structurels, notes de calcul, optimisation des coûts</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <FaArrowRightLong className="mt-1 text-sky-600" />
                        <p className="text-sm sm:text-base">Plans 2D/3D, maquettes BIM (Revit, Archicad et bien d'autres)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <FaArrowRightLong className="mt-1 text-sky-600" />
                        <p className="text-sm sm:text-base">Dimensionnement, détails d’exécution (Tekla, Graitec et bien d'autres)</p>
                    </div>
                </motion.div>

                <div className="mt-6">
                    <Link href="../../AboutSection"  className="px-6 py-2 bg-sky-400 text-white rounded-full hover:bg-black transition-all ease-in text-sm">
                        A Savoir Plus
                    </Link>
                </div>
            </main>

            {/* image */}
            <motion.main
            initial={{ opacity:0, y: 50}}
            whileInView={{opacity:1, transition:{duration:1}, y:0}}
            transition={{ease: "easeOut", delay: 0.2}}
            className="w-full md:w-1/2 flex justify-center">
                <Image
                    src={image}
                    alt="illustration AV-BTP"
                    width={900}
                    height={600}
                    className="w-full max-w-md md:max-w-xl h-auto object-cover rounded-lg"
                />
            </motion.main>
        </section>
    )
}