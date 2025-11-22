       "use client"
       import {motion} from 'framer-motion'
       import type { StaticImageData } from "next/image"
        import image1 from "../image/elect1.jpg"
        import image2 from "../image/elect2.jpg";
        import image3 from "../image/elect3.jpg"
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
                text:'Énergies Renouvelables',
                title: "Centrale Solaire Kaffrine",
                description: " Installation de 2 MW de panneaux photovoltaïques.",
                link: "../../../ContactSection"
            },
            {image:  image2,
                text:'Infrastructures',
                title: "Éclairage Public Dakar",
                description: "Modernisation de l'éclairage urbain avec technologie LED.",
                link: "../../../ContactSection"
            },
            {image:  image3,
                text:'Industriel',
                title: "Usine Agroalimentaire",
                description: "Installation électrique complète avec automatisation.",
                link: "../../../ContactSection"
            }
        ]
        
        export const RealisationElectric = function(){
               return(
                         <section className="flex flex-col justify-center items-center p-10 mt-20 bg-neutral-100">
                                      <div>
                                        <motion.h1 
                                        initial={{opacity:0, y:30}}
                                        whileInView={{opacity:1, transition:{duration:1}, y:0}}
                                        className="text-6xl text-center font-bold mb-5">Réalisations Électriques</motion.h1>
                                        <motion.p
                                        initial={{opacity:0, y:30}}
                                        whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                                        >
                                           Découvrez nos projets d'installations électriques et énergétiques.
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
                                           <p className="absolute left-3 top-3 z-20 bg-amber-400 text-white px-3 py-1 rounded-md text-sm">
                                       {item.text}
                                         </p>
                                          </div>
                                      <div className="p-4 flex flex-col gap-3 flex-1 bg-white z-10 min-w-0">
                                     <h3 className="font-semibold text-lg md:text-xl text-gray-900">{item.title}</h3>
                                          <p>{item.description}</p>
                                        <Link href={item.link} className="inline-block text-white text-sm p-2 bg-amber-400 rounded-full w-fit">
                                               Demande un Devis
                                              </Link>
                                            </div>
                                           </motion.div>
                                        ))}
                                </div>
                      </section>
    )
}