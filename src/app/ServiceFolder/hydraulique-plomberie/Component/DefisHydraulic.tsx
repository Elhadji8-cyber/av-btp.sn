"use client"
import {motion} from "framer-motion"
import { GoSun } from "react-icons/go";
import { GoCloud } from "react-icons/go";
import { RiWaterFlashLine } from "react-icons/ri";
import type { IconType } from "react-icons";
type cardSection = {
    icons: IconType;
    title: string;
    description: string;
}
const ItemsCards :cardSection[] =[
    {icons: GoSun,
     title: "Sécheresse" ,
     description: "Optimisation des ressources en période sèche." 
    },
    {icons: GoCloud,
     title: "Inondations" ,
     description: "Traitement adapté aux sources." ,
    },
    {icons: RiWaterFlashLine,
     title: "Qualité de l'Eau" ,
     description: "Traitement adapté aux sources locales"  ,
    },
    {icons: RiWaterFlashLine,
     title: "Durabilité" ,
     description: "Solutions respectueuses de l'environnement"  ,
    }
]
export const DefisHydraulic = function(){
    return(
     <section className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <motion.h2 
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Défis Hydrauliques au Sénégal
                </motion.h2>
                <motion.p
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Nous apportons des solutions adaptées aux défis spécifiques de la gestion de l'eau en
                    <span className="font-medium text-indigo-600 dark:text-indigo-400"> zone tropicale.</span>
                </motion.p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {ItemsCards.map((item, index) => {
                    const Icon = item.icons;
                    return (
                        <motion.article
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, transition:{duration:1, delay:index*0.3}, y:0}}
                            key={index}
                            className="bg-white dark:bg-orange-800 rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
                        >
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300">
                                <Icon className="h-6 w-6" />
                            </div>

                            <h3 className="mt-4 text-xl font-semibold text-sky-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300 flex-1">{item.description}</p>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    </section>
    )
}