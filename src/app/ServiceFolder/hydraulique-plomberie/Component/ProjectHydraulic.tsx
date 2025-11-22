"use client"
import {motion} from 'framer-motion'
import type { StaticImageData } from "next/image"
import image1 from "../image/plomb1.jpg"
import image2 from "../image/plomb2.jpg";
import image3 from "../image/plomb3.jpg"
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
        text:'Eau Potable',
        title: "Adduction d'Eau Kaolack",
        description: " Réseau d'adduction desservant 50,000 habitants avec station de traitement.",
        link: "../../../ContactSection"
    },
    {image:  image2,
        text:'Assainissement',
        title: "Station d'Épuration Thiès",
        description: "STEP de 10,000 EH avec traitement biologique et réutilisation agricole.",
        link: "../../../ContactSection"
    },
    {image:  image3,
        text:'Agriculture',
        title: "Irrigation Vallée du Fleuve",
        description: "Système d'irrigation de 500 hectares avec pompage solaire.",
        link: "../../../ContactSection"
    }
]
export const ProjectHydraulic = function(){
    return(
          <section className="flex flex-col justify-center items-center p-10 mt-20 bg-neutral-100">
                              <div>
                                <motion.h1
                                initial={{opacity:0, y:30}}
                                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                className="text-6xl text-center font-bold mb-5">Projets Hydrauliques Réalisés</motion.h1>
                                <motion.p
                                initial={{opacity:0, y:30}}
                                 whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                                >
                                    Découvrez nos réalisations en ingénierie hydraulique et gestion de l'eau
                                </motion.p>
                              </div>
                              <div className="mt-8 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 ">
                       {ProjectCardsItems.map((item, index) => (
                       <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, transition:{duration:1, delay:index*0.3}, y:0}}
                         key={index}
                                 className="rounded-2xl shadow-md overflow-hidden flex flex-col bg-white w-full min-w-0"
                          >
                                     {/* image wrapper (relative) -> Image fill + badge absolute */}
                                 <div className="relative w-full h-48 sm:h-56 md:h-64">
                                <Image
                                 src={item.image}
                                  alt={item.title}
                                   fill
                                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 30vw"
                                  className="object-cover block transform hover:scale-105 transition-transform duration-300 ease-in-out"
                                  />
                                   <p className="absolute left-3 top-3 z-20 bg-sky-400 text-white px-3 py-1 rounded-md text-sm">
                               {item.text}
                                 </p>
                                  </div>
         
                          {/* content */}
                              <div className="p-4 flex flex-col gap-3 flex-1 bg-white z-10 min-w-0">
                             <h3 className="font-semibold text-lg md:text-xl text-gray-900">{item.title}</h3>
                                  <p>{item.description}</p>
                                <Link href={item.link} className="inline-block text-white text-sm p-2 bg-sky-400 rounded-full w-fit">
                                       Demand un Devis
                                      </Link>
                                    </div>
                                   </motion.div>
                                ))}
                              </div>
              </section>
    )
}