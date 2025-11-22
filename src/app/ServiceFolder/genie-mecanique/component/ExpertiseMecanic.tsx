"use client"
import {motion} from "framer-motion"
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
     title: "Systèmes CVC" ,
     description: "Chauffage, ventilation et climatisation adaptés au climat tropical."  ,
     soustitre: "200+ installations"
    },
    {icons: HiOutlineHomeModern,
     title: "Équipements Lourds" ,
     description: "Installation et maintenance d'équipements industriels complexes.",
     soustitre: "50 projets industriels"
    },
    {icons:  GrHomeOption,
     title: "Efficacité Énergétique" ,
     description: "Optimisation des consommations énergétiques des installations.",
     soustitre: "30% d'économies moyennes"
    }
]
export const ExpertiseMecanic = function(){
    return(
           <section className="bg-sky-50 dark:bg-sky-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <motion.h2 
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="text-3xl font-extrabold text-gray-900 dark:text-white">
                   Notre Expertise Mécanique
                </motion.h2>
                <motion.p 
                initial={{opacity:0, y:30}}
                 whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Une maîtrise technique reconnue dans tous les domaines du génie mécanique et des
                    <span className="font-medium text-sky-600 dark:text-sky-400"> installations industrielles.</span>
                </motion.p>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {ItemsCards.map((item, index) => {
                    const Icon = item.icons;
                    return (
                        <motion.article
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, transition:{duration:1, delay:index*0.3}, y:0}}
                            key={index}
                            className="bg-white dark:bg-green-800 rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
                        >
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                                <Icon className="h-6 w-6" />
                            </div>

                            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300 flex-1">{item.description}</p>

                            <p className="mt-4 text-sm text-green-600 dark:text-green-400 font-medium">
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