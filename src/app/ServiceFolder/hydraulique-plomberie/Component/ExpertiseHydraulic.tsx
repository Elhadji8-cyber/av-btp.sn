"use client"
import {motion} from "framer-motion"
import { RiHammerLine } from "react-icons/ri";
import { GiWaterSplash } from "react-icons/gi";
import { MdSettingsInputComposite } from "react-icons/md";
import type { IconType } from "react-icons";
type cardSection = {
    icons: IconType;
    title: string;
    description: string;
    soustitre:string;
}
const ItemsCards :cardSection[] =[
    {icons: RiHammerLine,
     title: "Forages & Puits" ,
     description: "Études hydrogéologiques et réalisation de forages pour l'accès à l'eau souterraine."  ,
     soustitre: "200+ forages réalisés"
    },
    {icons: GiWaterSplash,
     title: "Traitement de l'Eau" ,
     description: "Solutions de potabilisation et traitement adaptées aux ressources locales."  ,
     soustitre: "50 stations installées"
    },
    {icons: MdSettingsInputComposite,
     title: "Maintenance Préventive" ,
     description: "Suivi et entretien des installations hydrauliques pour une durabilité optimale."  ,
     soustitre: "10 ans de garantie"
    }
]

export const ExpertiseHydraulic = function(){
    return(
    <section className="bg-sky-50 dark:bg-sky-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <motion.h2
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    Notre Expertise Hydraulique
                </motion.h2>
                <motion.p 
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Une expertise reconnue dans la gestion de l'eau adaptée aux défis du climat tropical
                    <span className="font-medium text-sky-600 dark:text-sky-400"> Sénégal.</span>
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
                            className="bg-white dark:bg-sky-800 rounded-xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
                        >
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300">
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
    )
}