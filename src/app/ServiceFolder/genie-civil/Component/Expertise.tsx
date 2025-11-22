"use client"
import { ImQuill } from "react-icons/im";
import {motion} from 'framer-motion'
import { ImPointUp } from "react-icons/im";
import { ImOffice } from "react-icons/im";
import type { IconType } from "react-icons";
type cardSection = {
    icons: IconType;
    title: string;
    description: string;
    soustitre:string;
}
const ItemsCards :cardSection[] =[
    {icons: ImOffice,
     title: "Bâtiments Résistants" ,
     description: "Structures adaptées aux conditions climatiques tropicales et aux normes parasismiques."  ,
     soustitre: "500+ structures calculées"
    },
    {icons: ImPointUp,
     title: "Infrastructures Durables" ,
     description: "Routes et ouvrages conçus pour résister aux conditions climatiques extrêmes."  ,
     soustitre: "50 km de routes réalisées"
    },
    {icons: ImQuill,
     title: "Innovation Technique" ,
     description: "Utilisation des dernières technologies et matériaux pour optimiser les performances."  ,
     soustitre: "15 ans d'innovation"
    }
]
export const ExpertiseSection = function(){
 return(
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <motion.h2
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Notre Expertise Technique
                </motion.h2>
                <motion.p 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Une maîtrise technique reconnue pour des ouvrages de qualité adaptés aux spécificités
                    <span className="font-medium text-indigo-600 dark:text-indigo-400"> du Sénégal.</span>
                </motion.p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {ItemsCards.map((item, index) => {
                    const Icon = item.icons;
                    return (
                        <motion.article
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, transition:{duration:1, delay:index*0.4}, y:0}}
                            key={index}
                            className="bg-white dark:bg-orange-800 rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
                        >
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300">
                                <Icon className="h-6 w-6" />
                            </div>

                            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300 flex-1">{item.description}</p>

                            <p className="mt-4 text-sm text-orange-600 dark:text-orange-400 font-medium">
                                {item.soustitre}
                            </p>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    </section>
 )}
