"use client"
// ...existing code...
import { IconType } from "react-icons";
import { StaticImageData } from "next/image";
import { FaBuildingColumns } from "react-icons/fa6";
import Image from "next/image";
import architect from '../../../../public/Architect.jpeg'
import civil from '../../../../public/génie civil.jpeg'
import electric from '../../../../public/electricity.jpeg'
import mechanical from '../../../../public/génie-mécanique.jpeg';
import { TbBuildingCarousel } from "react-icons/tb";
import { FaHandHoldingWater } from "react-icons/fa";
import { FcElectricity } from "react-icons/fc";
import { IoMdConstruct } from "react-icons/io";
import { LuConstruction } from "react-icons/lu";
import plumber from '../../../../public/génie-plumber.jpeg'
import construction from '../../../../public/construction.jpeg'
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from 'framer-motion'
type card = {
    title: string;
    description: string;
    iconImage: IconType;
    image?: StaticImageData;
    numero: number;
    text: string;
    link: string;
}
const CardItems : card[] = [
     {title:"Architecture",
        description:"Notre équipe conçoit des plans architecturaux 2D/3D clairs, esthétiques et fonctionnels, tout en intégrant la modélisation BIM (Revit, Archicad) pour une coordination optimale entre conception et exécution.",
        iconImage: FaBuildingColumns,
        numero: 1,
        image:architect, 
        text: "📐 Objectif : Transformer vos idées en projets concrets, durables et parfaitement maîtrisés.",
        link: "../../ServiceFolder/architecture"
     },
        {title:"Génie Civil",
        description:"Nous réalisons des calculs structurels précis et des notes de calcul détaillées pour garantir la sécurité et la durabilité de vos ouvrages.",
        iconImage: LuConstruction,
        numero: 2 ,
        image:civil,
        text: "🏗️ Objectif : Assurer la solidité et la pérennité de vos constructions tout en maîtrisant les coûts.",
        link: "../../ServiceFolder/genie-civil"
     },
        {title:"Génie Electrique",
        description:"Nous réalisons des schémas électriques détaillés et des plans conformes aux normes en vigueur, assurant ainsi la sécurité et l'efficacité énergétique de vos installations.",
        iconImage: FcElectricity,
        numero: 3,
        image:electric,
        text: "⚡ Objectif : Garantir des installations électriques sûres, efficaces et conformes aux normes.",
        link: "../../ServiceFolder/genie-electrique"
     },
     {title: "Génie Mécanique",
        description: "Nous concevons des systèmes mécaniques performants et durables, adaptés aux besoins spécifiques de chaque projet. Notre expertise couvre la conception.",
        iconImage: TbBuildingCarousel,
        numero: 4,
        image:mechanical,
        text: "🔧 Objectif : Assurer le bon fonctionnement et la durabilité des systèmes mécaniques de vos bâtiments.",
        link: "../../ServiceFolder/genie-mecanique"
     },
     {title: "Hydraulique & Plomberie",
      description: "Nous concevons et dimensionnons des réseaux d’alimentation en eau, d’évacuation et de plomberie sanitaire répondant aux normes techniques et environnementales." ,
        iconImage: FaHandHoldingWater,
        image: plumber,
        numero: 5,
        text: "🚰 Objectif : Assurer des installations hydrauliques et de plomberie fiables, efficaces et durables.",
        link: "../../ServiceFolder/hydraulique-plomberie"
     },
     {title: "Construction BTP",
      description: "Nous gérons la planification, l'organisation et le contrôle de vos projets de construction, en veillant au respect des délais, des coûts et de la qualité.",
        iconImage: IoMdConstruct,
        image:construction, 
        numero: 6,
        text: "🏗️ Objectif : Garantir la réussite de vos projets de construction, du concept à la réalisation.",
        link: "../../ServiceFolder/construction"
     }
];

export const ServiceSection = function(){
    return(
            <section className="flex flex-col justify-center items-center p-4 md:p-6 relative
           md:bottom-30 sm bottom-60">
                <motion.h2 
                initial={{opacity:0, x: 50}}
                whileInView={{opacity:1, transition:{duration:1}, x:0}}
                transition={{ease: "easeOut", delay: 0.2}}
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-sky-500 text-center">
                Nos Services</motion.h2>
                <motion.div 
                initial={{opacity:0, y: 100}}
                whileInView={{opacity:1, transition:{duration:1.2}, y:0}}
                transition={{ease: "easeOut", delay: 0.2}}
                className="p-2 mt-2 max-w-4xl text-center">
                    <p className='text-neutral-500'>De la conception à la réalisation, nous offrons une gamme complète de services</p>
                    <p className='text-neutral-500'>pour donner vie à vos projets architecturaux les plus ambitieux.</p>
                </motion.div>

                {/* responsive container: mobile = colonne, tablette = rows flex wrap (2 cols), desktop = 3 cols */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center  gap-10 mt-8 w-full">
                    {CardItems.map((item, index)=>(
                        <motion.div
                        initial={{ opacity:0, y:50}}
                        whileInView={{opacity:1, transition:{duration:1.5, ease: "easeIn", delay:index*0.3}, y:0}}
                         key={index}
                            className="bg-neutral-100 shadow-md rounded-[20px] p-5 hover:scale-105 transition-transform duration-300 ease-in-out
                                       w-full sm:w-[48%] md:w-[30%]">
                            <h2 className="text-2xl sm:text-3xl font-bold p-2 text-black">{item.title}</h2>
                            <p className="text-black p-2 text-sm sm:text-base">{item.description}</p>

                            <div className="flex items-center justify-between p-1 gap-4">
                                {/* Icon Section */}
                                <div className="flex-shrink-0">
                                    {(() => {
                                        const Icon = item.iconImage;
                                        return <Icon size={48} className="text-black" />;
                                    })()}
                                </div>

                                {/* Image Section */}
                                {item.image && (
                                    <div className="flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={100}
                                            height={100}
                                            className="rounded-[12px] object-cover"
                                        />
                                    </div>
                                )}
                            </div>

                            <article className="flex items-start gap-4 p-2">
                                <p className="text-white bg-sky-500 px-4 py-1 rounded-full text-xl flex-shrink-0">{item.numero}</p>
                                <p className="text-black p-2 flex-1 text-sm">{item.text}</p>
                            </article>

                            {/* Link Section */}
                            <article className='flex justify-end items-center mt-2'>
                                <Link href={item.link} className="text-sky-400 p-2 hover:underline">
                                   voir plus 
                                </Link>
                                <IoMdArrowDropright />
                            </article>
                        </motion.div>
                    ))}
                </div>
            </section>
    )
}