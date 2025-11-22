"use client"
import { MdOutlineDone } from "react-icons/md";
import image1 from '../image/villa-cayor4.jpg'; 
import image2 from '../image/villa-cayor3.jpg';
import image3 from '../image/villa-cayor5.jpg';
import Image from 'next/image';
 import Link from 'next/link'
import {motion} from 'framer-motion'
export const ProjectSection = function() {
    return(
        <section className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 p-4 mb-20 mt-10">
            {/* Left: description + gallery */}
            <div className="w-full lg:flex-1">
                {/* Description */}
                <main className="max-w-prose">
                    <motion.h2
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, transition:{duration:1}, y:0}}
                    transition={{ease: "easeOut", delay: 0.2}}
                    className="teyt-3xl sm:text-4xl md:text-5xl font-bold">🏠 Villa Cayor</motion.h2 >
                    <motion.p
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, transition:{duration:1}, y:0}}
                    transition={{ease: "easeOut", delay: 0.2}}
                    className="mt-4 text-neutral-700">
                        Cette villa contemporaine incarne le luxe sobre et moderne. Avec son architecture soignée,
                         ses volumes ouverts et ses finitions de qualité, elle représente un véritable havre de paix. 
                         Les aménagements intérieurs et extérieurs ont été conçus pour optimiser la lumière naturelle
                          et offrir une expérience de confort unique.                       
                           <span className="block mt-2"> 🌿 Objectif : offrir un cadre de vie exceptionnel alliant élégance et bien-être.</span>
                    </motion.p>
                </main>

                {/* Galerie responsive */}
                <main className="mt-8">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">Galerie Photos</h3>

                    {/* mobile: single column (stacked), tablet: 2 cols, desktop: 3 cols */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* image wrapper with fixed responsive height; Image uses fill.
                            keep hover effects and do not change design */}
                        <motion.div
                        initial={{opacity:0, y:10}}
                         whileInView={{opacity:1, y:0, transition:{ duration:1, ease:"easeIn", delay:0.3}}}
                            className="relative w-full h-[40vh] sm:h-[45vh] md:h-[36vh] rounded-[15px] overflow-hidden shadow-sm"
                            style={{ maxWidth: 'calc(var(--spacing) * 100)' }}
                        >
                            <Image
                                src={image1}
                                alt="project image 1"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </motion.div>

                        <motion.div
                        initial={{opacity:0, y:10}}
                        whileInView={{opacity:1, y:0, transition:{ duration:1.2, ease:"easeIn", delay:0.3}}}
                            className="relative w-full h-[40vh] sm:h-[45vh] md:h-[36vh] rounded-[15px] overflow-hidden shadow-sm"
                            style={{ maxWidth: 'calc(var(--spacing) * 100)' }}
                        >
                            <Image
                                src={image2}
                                alt="project image 2"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </motion.div>

                        {/* third image spans two columns on tablet to preserve visual layout, normal on desktop */}
                        <motion.div
                        initial={{opacity:0, y:10}}
                         whileInView={{opacity:1, y:0, transition:{ duration:1.5, ease:"easeIn", delay:0.4}}}
                            className="relative w-full h-[40vh] sm:h-[45vh] md:h-[36vh] rounded-[15px] overflow-hidden shadow-sm sm:col-span-2 md:col-span-1"
                            style={{ maxWidth: 'calc(var(--spacing) * 100)' }}
                        >
                            <Image
                                src={image3}
                                alt="project image 3"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
                                className="object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </main>
            </div>

            {/* Right: project information (stack on mobile under/after gallery) */}
            <aside className="w-full lg:w-[360px] flex flex-col gap-6">
                <motion.article
                initial={{opacity:0, y:50}}
                 whileInView={{opacity:1, y:0, transition:{ duration:1, ease:"easeIn", delay:0.2}}}
                className="w-full bg-sky-400 p-5 rounded-xl text-white font-bold flex flex-col gap-3">
                    <h3 className='text-2xl sm:text-3xl'>Informations</h3>
                    <div className="text-sm sm:text-base text-white/90">
                        <p className="font-semibold mt-2">Localisation</p>
                        <p>Dakar, Sénéga</p>

                        <p className="font-semibold mt-3">Année</p>
                        <p>2023</p>

                        <p className="font-semibold mt-3">Surface</p>
                        <p>450 m²</p>
                    </div>
                </motion.article>

                <motion.article
                initial={{opacity:0, y:50}}
                 whileInView={{opacity:1, y:0, transition:{ duration:1.2, ease:"easeIn", delay:0.3}}}
                className="w-full bg-sky-400 p-5 rounded-xl text-white font-bold">
                    <h3 className="text-2xl sm:text-3xl mb-3">Caractéristiques</h3>
                    <ul className="space-y-2 text-white/95">
                        <li className="flex items-center gap-2"><MdOutlineDone className="text-white"/>4 Chambres</li>
                        <li className="flex items-center gap-2"><MdOutlineDone className="text-white"/>Piscines</li>
                        <li className="flex items-center gap-2"><MdOutlineDone className="text-white"/>Jardin Tropical</li>
                        <li className="flex items-center gap-2"><MdOutlineDone className="text-white"/>Garage Double</li>
                    </ul>
                </motion.article>

                <Link href='../../villa-cayor' className="inline-block text-center px-6 py-3 rounded-[20px] bg-sky-400 text-white hover:bg-sky-600 transition-colors duration-300">
                    Projet Similaire?
                </Link>
            </aside>
        </section>
    )
}