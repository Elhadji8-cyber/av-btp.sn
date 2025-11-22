import { LuHouse } from "react-icons/lu";
import { MdOutlineDone } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { RiLeafLine } from "react-icons/ri";
export default function ProjectsConstruction() {
  return (
    <section className="flex flex-col justify-center items-center mt-20 bg-neutral-100 p-6 md:p-10">
                <div className="w-full max-w-6xl px-4 md:px-0">
                    {/*Text contenu*/}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold p-2">Nos Services BIM</h1>
                    <p className="flex flex-col justify-center items-center p-2 text-center max-w-3xl mx-auto">
                        De la modélisation 3D à la coordination de projet,
                         nous maîtrisons tous les aspects du
                        <span className="text-center">Building Information Modeling.</span>
                    </p>
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[60%] gap-y-6 gap-8 mt-8 justify-items-center px-4 md:px-0">
                    <main className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-[#1a52eb96] hover:transition-shadow duration-300">
                        <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                            <LuHouse className="w-8 h-8 sm:w-10 sm:h-10" />
                        </article>
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Modélisation 3D</h3>
                            <p>
                                Création de maquettes numériques détaillées pour visualiser et
                                <span>optimiser vos projets avant construction.</span>
                            </p>
                            <ul className="flex flex-col p-5 mt-2 gap-5">
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Modèles 3D précis</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Rendu photoréaliste</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Visite virtuelle</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Détection de conflits</li>
                            </ul>
                        </div>
                    </main>
    
                    <main className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-[#1a52eb96] hover:transition-shadow duration-300">
                        <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                            <BiBuildingHouse className="w-8 h-8 sm:w-10 sm:h-10" />
                        </article>
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Plans 2D Techniques</h3>
                            <p>
                                Production automatique de plans 2D à partir des modèles 3D pour
                                <span>tous les corps d'état.</span>
                            </p>
                            <ul className="flex flex-col p-5 mt-2 gap-5">
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Plans d'exécution</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Coupes et façades</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Détails techniques</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Nomenclatures automatiques</li>
                            </ul>
                        </div>
                    </main>
    
                    <main className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-[#1a52eb96] hover:transition-shadow duration-300">
                        <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                            <TbBuildingWarehouse className="w-8 h-8 sm:w-10 sm:h-10" />
                        </article>
                        <div>
                            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Coordination BIM</h3>
                            <p>
                                Coordination entre tous les intervenants du projet grâce à uner
                                <span>plateforme collaborative centralisée.</span>
                            </p>
                            <ul className="flex flex-col p-5 mt-2 gap-5">
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Plateforme collaborative</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Gestion des versions</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Suivi des modifications</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Communication intégrée</li>
                            </ul>
                        </div>
                    </main>
    
                    <main className="w-full max-w-[500px] h-fit bg-white p-5 py-10 rounded-[30px] shadow-xl shadow-[#7c7c7c9f] hover:shadow-[#1a52eb96] hover:transition-shadow duration-300">
                        <div>
                            <article className="p-5 bg-sky-200 rounded-full w-fit mx-auto md:mx-0">
                                <RiLeafLine className="w-8 h-8 sm:w-10 sm:h-10" />
                            </article>
                            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold p-2">Métrés & Quantitatifs</h3>
                            <p>
                                Extraction automatique des quantités et métrés directement
                                <span>depuis les modèles 3D.</span>
                            </p>
                            <ul className="flex flex-col p-5 mt-2 gap-5">
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Métrés automatiques</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Devis quantitatifs</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Suivi des coûts</li>
                                <li className="flex items-center gap-2"><MdOutlineDone className="text-black" />Planification 4D</li>
                            </ul>
                        </div>
                    </main>
                </div>
            </section>
  )
}
