"use client"
import {motion} from 'framer-motion'
import type { StaticImageData } from "next/image"
import image1 from '../image/nimage1.jpg';
import image2 from '../image/nimage2.jpg';
import image3 from '../image/nimage3.jpg'
import Image from 'next/image'
import Link from 'next/link'
type ProjectCards = {
    text: string;
    image:StaticImageData;
    title:string;
    description:string;
    link: string;
}
const ProjectCardsItems : ProjectCards[] = [
    {image: image1,
        text:'Santé',
        title: "Hôpital Régional de Ziguinchor",
        description: "Modélisation BIM complète d'un hôpital de 150 lits avec coordination MEP",
        link: "../../../ContactSection"
    },
    {image: image2,
        text:'Commercial',
        title: "Centre Commercial Sea Plaza",
        description: "Maquette numérique 3D avec simulation d'éclairage et flux de circulation.",
        link: "../../../ContactSection"
    },
    {image: image3,
        text:'Résidentiel',
        title: "Résidence Les Palmiers",
        description: "Modélisation de 60 logements avec optimisation énergétique intégrée.",
        link: "../../../ContactSection"
    }
]
export const ProjectBimSection = function(){
    return(
        <section className="flex flex-col justify-center items-center p-10 mt-20 bg-neutral-100">
          <div>
            <motion.h1 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, transition:{duration:1}, y:0}}
            className="text-6xl text-center font-bold mb-5">Projets BIM Réalisés</motion.h1>
            <motion.p
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
            >
                Découvrez nos réalisations en modélisation BIM et maquettes numériques.
            </motion.p>
          </div>
          <div className="mt-8 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 ">
            {ProjectCardsItems.map((item, index) => (
                <motion.div 
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, transition:{duration:1, delay:index*0.3}, y:0}}
                key={index} 
                className="rounded-2xl shadow-md overflow-hidden flex flex-col bg-white"
                >
                  <main className="relative w-full h-48 sm:h-56 md:h-64">
                    <p className="absolute left-3 top-3 z-20 bg-fuchsia-400 text-white px-3 py-1 rounded-md text-sm">
                        {item.text}</p>
                    <Image src={item.image} alt='image'
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 30vw"
                    className="w-full h-full obeject-fit hover:transition-transform hover:scale-105 duration-300 ease-in-out"
                    />
                  </main>
                  <div className="p-4 flex flex-col gap-3 flex-1 bg-white z-10">
                  <h3 className="font-semibold text-lg md:text-xl text-gray-900">{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={item.link}
                  className="inline-block text-white text-sm p-2 bg-fuchsia-400 rounded-full w-fit"
                  >Demande un Devis</Link>
                  </div>
                </motion.div>
            ))}
          </div>
        </section>
    )
}