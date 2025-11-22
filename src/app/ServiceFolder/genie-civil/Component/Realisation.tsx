"use client"
import type { StaticImageData } from "next/image"
import image1 from "../image/a-photograph-of-a-bustling-construction-_VrxmkCZEQzGHMy2DUZIhNg_Ik6cYZzFQnelo0dEUysLuw.jpeg"
import image2 from "../image/a-photograph-of-a-bustling-construction-_woBYqxkNRpSXdq11x92HNg_QbIu73sTT3KNzqazbdqYOg.jpeg";
import image3 from "../image/résidence-0.jpeg"
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
type ProjectCards = {
    text: string;
    image:StaticImageData;
    title:string;
    description:string;
    link: string;
}
const ProjectCardsItems : ProjectCards[] = [
    {image: image3,
        text:'Villa',
        title: "Construction Villa",
        description: " Villa contemporaine avec piscine et jardin tropical, alliant modernité et tradition sénégalaise.",
        link: "../../../ContactSection"
    },
    {image:  image1,
        text:'Immeuble',
        title: "Immeuble R+10",
        description: "Immeuble de bureaux de 10 étages avec façade moderne et équipements high-tech.",
        link: "../../../ContactSection"
    },
    {image:  image2,
        text:'R+5',
        title: "Projet R+5",
        description: "Centre commercial moderne avec espaces de vente et bureaux administratifs.",
        link: "../../../ContactSection"
    }
]

export const RealisationSection = function(){
       return(
         <section className="flex flex-col justify-center items-center p-10 mt-20 bg-neutral-100">
                     <div>
                       <motion.h1 
                       initial={{opacity:0, y:50}}
                       whileInView={{opacity:1, transition:{duration:1}, y:0}}
                       className="text-6xl text-center font-bold mb-5">Projets BIM Réalisés</motion.h1>
                       <motion.p
                       initial={{opacity:0, y:50}}
                       whileInView={{opacity:1, transition:{duration:1}, y:0}}
                       >
                      Découvrez nos projets d'infrastructures et de structures remarquables.
                       </motion.p>
                     </div>
                     <div className="mt-8 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 ">
              {ProjectCardsItems.map((item, index) => (
              <motion.div
              initial={{opacity:0, y:50}}
              whileInView={{opacity:1, transition:{duration:1, delay:index*0.4}, y:0}}
                key={index}
                        className="rounded-2xl shadow-md  overflow-hidden flex flex-col bg-white w-full min-w-0"
                 >
                            {/* image wrapper (relative) -> Image fill + badge absolute */}
                        <div className="relative w-full h-48 sm:h-56 md:h-64">
                       <Image
                        src={item.image}
                         alt={item.title}
                          fill
                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 30vw"
                         className="object-cover w-full h-full block transform hover:scale-105 transition-transform duration-300 ease-in-out"
                         />
                          <p className="absolute left-3 top-3 z-20 bg-orange-400 text-white px-3 py-1 rounded-md text-sm">
                      {item.text}
                        </p>
                         </div>

                 {/* content */}
                     <div className="p-4 flex flex-col gap-3 flex-1 bg-white z-10 min-w-0">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-900">{item.title}</h3>
                         <p>{item.description}</p>
                       <Link href={item.link} className="inline-block text-white text-sm p-2 bg-orange-400 rounded-full w-fit">
                              Demande un Devis
                             </Link>
                           </div>
                          </motion.div>
                       ))}
                     </div>
             </section>
       )
}