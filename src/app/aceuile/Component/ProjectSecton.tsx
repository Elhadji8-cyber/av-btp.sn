"use client"
import Link from "next/link";
import Image from "next/image";
import  residenceCayor from '../../../../public/Résidence-coyor.jpeg'
import villaCayor from '../../../../public/Villa-cayor.jpeg'
import r10almadies from '../../../../public/R+10 Almadies.jpeg'
import type { StaticImageData } from 'next/image';
import { IoMdArrowDropright } from "react-icons/io";
import {motion} from 'framer-motion'

type ProjectItems = {
 smalltext: string;
 image : StaticImageData;
 title: string;
 link: string;
}
const DataProject: ProjectItems[] =[
    {smalltext: "Résidentiel",
     image: villaCayor,
        title: "Résidence Cayor",
        link: "../../Projets/residence-cayor"
    },
    {smalltext: "Villa",
     image: residenceCayor,
     title: "Villa Cayor",
     link: "../../Projets/villa-cayor"
    },
    {smalltext: "Immeuble",
     image: r10almadies,
     title: "R+10 Almadies",
     link: "../../Projets/r-10-almadies"
    }
]

export const ProjectSection = function(){
    return(
        <section className="flex flex-col items-center p-4 md:p-6 bg-neutral-100
        relative md:bottom-20 sm bottom-50">
            <motion.h1
            initial={{opacity:0, y:15}}
            whileInView={{opacity: 1, y:0, transition:{duration:1, ease:"easeInOut"}}}
            className="text-4xl sm:text-5xl md:text-7xl p-2 mt-5 text-sky-600 font-bold text-center">Nos Projets</motion.h1>
            <motion.div 
             initial={{opacity:0, y: 100}}
             whileInView={{opacity:1, transition:{duration:1.2}, y:0}}
            transition={{ease: "easeOut", delay: 0.2}}
            className="p-2 mt-2 text-center text-neutral-700 max-w-3xl">
                <p>Découvrez quelques-unes de nos réalisations les plus remarquables qui illustrent notre</p>
                <p>expertise et notre créativité.</p>
            </motion.div>

            {/* container responsive: mobile = column, tablet (sm/md) = flex-row wrap */}
            <div className="w-full mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch justify-center gap-6">
                {DataProject.map((item, index) =>(
                    <motion.div 
                    
                    initial={{opacity:0, y:10}}
                    whileInView={{opacity:1, y:0, transition:{ duration:2, ease:"easeIn", delay:index*0.2}}}
                       key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden w-full sm:w-[48%] md:w-[30%] flex flex-col">
                        <div className="w-full h-48 sm:h-56 md:h-64 relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 30vw"
                                className="object-cover hover:transition-transform hover:scale-105 duration-300 ease-in-out"
                            />
                            <span className="absolute left-3 bottom-3 bg-sky-500 text-white px-3 py-1 rounded-md text-sm">{item.smalltext}</span>
                        </div>

                        <div className="p-4 flex flex-col gap-3 flex-1">
                            <h2 className="font-semibold text-lg md:text-xl text-neutral-900">{item.title}</h2>
                            <p className="text-neutral-600 text-sm line-clamp-3"> {/* keep short preview */}
                                { /* preserve visual description if needed later */ }
                            </p>

                            <div className="mt-auto flex items-center justify-end gap-2 text-sky-500">
                                <Link href={item.link}>voir plus</Link>
                                <IoMdArrowDropright />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Link href='../../Projets/r-5-cote-divoire'
                className="mt-6 px-6 py-2 text-black border-2 border-sky-500 hover:bg-sky-400 hover:text-white rounded-2xl transition-all duration-300"
            >
                Voir Plus
            </Link>
        </section>
    )
}