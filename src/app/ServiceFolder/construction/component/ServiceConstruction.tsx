   "use client"
   import {motion} from 'framer-motion'
   import { RiHammerLine } from "react-icons/ri";
    import { GiPaintRoller } from "react-icons/gi";
    import { IoGitNetworkOutline } from "react-icons/io5";
    import { LuSettings2 } from "react-icons/lu";
    import { MdOutlineDone } from "react-icons/md";
    // ServiceConstruction component
                export const ServiceConstruction = function() {
                    return (
                        /* Section: container principal */
                        <section className="flex flex-col justify-center items-center mt-20 bg-neutral-100 p-6 md:p-10">

                            {/* Wrapper: largeur max et texte d'introduction */}
                            <div className="w-full max-w-6xl px-4 md:px-0">
                                {/* Titre */}
                                <motion.h1
                                initial={{opacity:0, y:50}}
                                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                className="text-3xl sm:text-4xl text-center md:text-6xl font-bold p-2">
                                    Nos Services de Construction
                                </motion.h1>

                                {/* Paragraphe descriptif */}
                                <motion.p 
                                initial={{opacity:0, y:40}}
                                whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                                className="flex flex-col justify-center items-center p-2 text-center max-w-3xl mx-auto">
                                   Du gros œuvre aux finitions, nous maîtrisons tous les corps d'état pour mener à bien
                                    <span className="text-center">vos projets de construction.</span>
                                </motion.p>
                            </div>

                            {/* Grid: cartes de services */}
                            <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] gap-y-6 gap-8 mt-8 justify-items-center px-4 md:px-0">

                                {/* Carte 1: Adduction d'Eau Potable */}
                                <motion.main 
                                initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, transition:{duration:1, delay:0.5}, y:0}}
                                className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                    <article className="p-5 bg-rose-200 rounded-full w-fit mx-auto md:mx-0">
                                        <RiHammerLine className="w-8 h-8 sm:w-10 sm:h-10" />
                                    </article>
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Gros Œuvre</h3>
                                        <p>
                                            Fondations, structures béton armé, maçonnerie et charpente pour
                                            <span>tous types de bâtiments.</span>
                                        </p>
                                        <ul className="flex flex-col p-5 mt-2 gap-5">
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Terrassements</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Fondations spéciales</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Structures béton</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Maçonnerie traditionnelle</li>
                                        </ul>
                                    </div>
                                </motion.main>

                                {/* Carte 2: Assainissement */}
                                <motion.main 
                                initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, transition:{duration:1, delay:0.5}, y:0}}
                                className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                    <article className="p-5 bg-rose-200 rounded-full w-fit mx-auto md:mx-0">
                                        <GiPaintRoller className="w-8 h-8 sm:w-10 sm:h-10" />
                                    </article>
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Second Œuvre</h3>
                                        <p>
                                            Finitions intérieures et extérieures, plomberie, électricité et
                                            <span>aménagements.</span>
                                        </p>
                                        <ul className="flex flex-col p-5 mt-2 gap-5">
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Cloisons et doublages</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Revêtements sols/murs</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Menuiseries</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Peinture et finitions</li>
                                        </ul>
                                    </div>
                                </motion.main>

                                {/* Carte 3: Gestion Eaux Pluviales */}
                                <motion.main 
                                initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                                className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                    <article className="p-5 bg-rose-200 rounded-full w-fit mx-auto md:mx-0">
                                        <IoGitNetworkOutline className="w-8 h-8 sm:w-10 sm:h-10" />
                                    </article>
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Travaux Publics</h3>
                                        <p>
                                            Routes, réseaux, assainissement et aménagements urbains et
                                            <span> ruraux.</span>
                                        </p>
                                        <ul className="flex flex-col p-5 mt-2 gap-5">
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Voirie et réseaux</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Assainissement</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Aménagements urbains</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Espaces verts</li>
                                        </ul>
                                    </div>
                                </motion.main>

                                {/* Carte 4: Irrigation & Agriculture */}
                                <motion.main 
                                initial={{opacity:0, y:50}}
                              whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                                className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-lg hover:transition-shadow duration-300">
                                    <div>
                                        <article className="p-5 bg-rose-200 rounded-full w-fit mx-auto md:mx-0">
                                            <LuSettings2 className="w-8 h-8 sm:w-10 sm:h-10" />
                                        </article>
                                        <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Rénovation</h3>
                                        <p>
                                            Réhabilitation et modernisation de bâtiments existants avec mise
                                            <span>aux normes.</span>
                                        </p>
                                        <ul className="flex flex-col p-5 mt-2 gap-5">
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Diagnostic technique</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Rénovation énergétique</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Mise aux normes</li>
                                            <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Extension bâtiments</li>
                                        </ul>
                                    </div>
                                </motion.main>

                            </div>
                        </section>
                    );
                }
                   