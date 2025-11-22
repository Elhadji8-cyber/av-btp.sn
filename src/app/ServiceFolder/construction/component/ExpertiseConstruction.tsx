"use client"
import {motion} from 'framer-motion'
import type { IconType } from "react-icons";
import { CiHome } from "react-icons/ci";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { GrHomeOption } from "react-icons/gr";
type cardSection = {
    icons: IconType;
    title: string;
    description: string;
    soustitre:string;
}
const ItemsCards :cardSection[] =[
    {icons: CiHome,
     title: "Bâtiments Résidentiels" ,
     description: "Maisons individuelles, immeubles et résidences de standing."  ,
     soustitre: "200+ logements livrés"
    },
    {icons: HiOutlineHomeModern,
     title: "Bâtiments Industriels" ,
     description: "Usines, entrepôts et bâtiments à usage industriel."  ,
     soustitre: "50 bâtiments industriels"
    },
    {icons:  GrHomeOption,
     title: "Infrastructures" ,
     description: "Routes, ponts et ouvrages d'art de qualité."  ,
     soustitre: "100 km de routes"
    }
]
export const ExpertiseConstruction = function(){
    return(

   <section className="bg-sky-50 dark:bg-sky-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <motion.h2
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Notre Expertise Construction
                </motion.h2>
                <motion.p 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Une expérience reconnue dans tous les secteurs de la construction et des travaux
                    <span className="font-medium text-sky-600 dark:text-sky-400"> publics au Sénégal.</span>
                </motion.p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {ItemsCards.map((item, index) => {
                    const Icon = item.icons;
                    return (
                        <motion.article
                        initial={{opacity:0, y:50}}
                         whileInView={{opacity:1, transition:{duration:1, delay:index*0.3}, y:0}}
                            key={index}
                            className="bg-white dark:bg-rose-800 rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
                        >
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-300">
                                <Icon className="h-6 w-6" />
                            </div>

                            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300 flex-1">{item.description}</p>

                            <p className="mt-4 text-sm text-rose-600 dark:text-rose-400 font-medium">
                                {item.soustitre}
                            </p>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    </section>
    )
}