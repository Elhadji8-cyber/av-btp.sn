"use client"
import Image from 'next/image'
import { StaticImageData } from 'next/image';
import image1 from '../image/mision-img.jpeg'
import { FcCollaboration } from "react-icons/fc";
import { LuLightbulb } from "react-icons/lu";
import { MdHistoryToggleOff } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import archi from "../image/Architecte.jpeg"
import mousa from "../image/genie-ivile.jpeg"
import imgcard1 from '../image/Dg.jpeg'
import plumb from '../image/génie-plumber.jpeg'
import elec from "../image/electricity.jpeg"
import mecanic from '../image/mecanic.jpeg'
import maçons from '../image/maçons.jpeg'
import Bim from '../image/Bim-G.jpeg'
import { useState } from 'react';
import  { motion, AnimatePresence } from 'framer-motion'
import ttrc from '../image/electricien.jpeg'
type CardData ={
 image: StaticImageData;
 nom: string;
 title: string;
 description: string
}
const CardItems: CardData[] =[
    {
    image: imgcard1,
     nom: "Adam's Sympavy",
     title: "Directeur Général & CEO" ,
    description:"15 ans d'expérience"
    },
    {
     image: archi,
     nom: "Frida Ayela",
     title: "Ingénieure  Architecture",
     description: "5 ans d'expérience"
    },
    {
       image:  mousa,
       nom: "Moussa Kane",
       title: "Ingénieure  Génie Civil",
       description: "7 ans d'expérience"
    },
    {
       image:  plumb,
       nom: "Lamine Diop",
       title: "Ingénieure Hydraulique",
       description: "10 ans d'expérience"
    },
     {
       image:  ttrc,
       nom: "Modou Fall",
       title: "Ingénieure Génie-Electrique",
       description: "4 ans d'expérience"
    },
    {
       image:  mecanic,
       nom: "Abdoulaye Diallo",
       title: "Ingénieure Génie-Mécanique",
       description: "4 ans d'expérience"
    },
    {
       image:  Bim,
       nom: "Aja Ndiaye",
       title: "Spécialiste BIM & Modélisation 3D",
       description: "9 ans d'expérience"
    },
    {
      image: maçons,
      nom: "Elhadji M. Barry",
      title: "Chef de Chantier & Maçon",
      description: "10 ans d'expérience"
    },
         {
       image:  elec,
       nom: "Ibou Ndiaye",
       title: "Electricien",
       description: "4 ans d'expérience"
    }
]
export const TransitionSection = function(){
    const [activeSection, setActiveSection] = useState("mision")
    return(
        <section className='bg-neutral-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'> 
    {/*------1. the Button ------*/}
    <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-10 p-4 sm:p-5 shadow-lg w-full max-w-[800px] mt-6 sm:mt-8 lg:mt-10 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] bg-white'>
        <button 
            onClick={()=>setActiveSection("mision")}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-[15px] sm:rounded-[18px] lg:rounded-[20px] text-sm sm:text-base lg:text-lg w-full sm:w-auto ${activeSection === "mision" ? "bg-sky-500 text-white" : "hover:bg-sky-200"}`}
        >Notre Mision</button>
        <button 
            onClick={()=>setActiveSection("valeur")}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-[15px] sm:rounded-[18px] lg:rounded-[20px] text-sm sm:text-base lg:text-lg w-full sm:w-auto ${activeSection === "valeur" ? "bg-sky-500 text-white" : "hover:bg-sky-200"}`}
        >Nos Valeur</button>
        <button 
            onClick={()=>setActiveSection("equipe")}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-[15px] sm:rounded-[18px] lg:rounded-[20px] text-sm sm:text-base lg:text-lg w-full sm:w-auto ${activeSection === "equipe" ? "bg-sky-500 text-white" : "hover:bg-sky-200"}`}
        >Notre Équipe</button>
    </div>
    
    {/*-------2. Transition Zone ----*/}
    <div className="relative mt-6 sm:mt-8 lg:mt-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
            {activeSection === "mision" && <NotreMision key={"mision"}/>}
            {activeSection === "valeur" && <ValeurSection key={"valeur"}/>}
            {activeSection === "equipe" && <EquipeSection key={"equipe"}/>}
        </AnimatePresence>
    </div>
</section>
    )
};
{/*Notre Mision component*/}
{/*Notre Mision component*/}
export const NotreMision = function(){
    return(
        <div className='mb-6 sm:mb-8 lg:mb-10 w-full flex justify-center items-center px-4 sm:px-6 lg:px-8'>
            <motion.article 
                initial={{opacity:0, y:8}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:8}}
                transition={{duration:0.5, delay:0.1}}
                className='flex flex-col lg:flex-row justify-center bg-white items-center gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-10 shadow-lg w-full h-auto lg:h-[800px] z-10 rounded-2xl sm:rounded-3xl'
            >
                <main className='w-full lg:w-[600px] h-fit flex flex-col gap-4 sm:gap-6 lg:gap-10 p-3 sm:p-4 lg:p-5 items-center justify-center mt-4 sm:mt-6 lg:mt-10'>
                    <h3 className='text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-center'>Notre Mission</h3>
                    <p className='text-sm sm:text-base lg:text-lg text-center lg:text-left'>
                        Nous nous engageons à concevoir et réaliser des projets architecturaux et
                        d'ingénierie qui allient esthétique, fonctionnalité et durabilité. 
                        Notre mission est de créer des espaces qui améliorent la qualité de vie tout
                        en respectant l'environnement.
                    </p>
                    <p className='text-sm sm:text-base lg:text-lg text-center lg:text-left'>
                        Depuis notre création, nous avons accompagné plus de 200 clients dans la réalisation
                        de leurs projets, des résidences privées aux complexes commerciaux, en passant par 
                        les infrastructures publiques.  
                    </p>
                    <span className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-10 p-2 w-full'>
                        <main className='flex gap-3 sm:gap-4 lg:gap-5 items-center p-2 justify-center'>
                            <h4 className='text-xl sm:text-2xl lg:text-3xl font-bold text-sky-300'>200+</h4>
                            <p className='text-xs sm:text-sm lg:text-base'>Projets Réalisés</p>
                        </main>
                        <main className='flex gap-3 sm:gap-4 lg:gap-5 items-center p-2 justify-center'>
                            <h4 className='text-xl sm:text-2xl lg:text-3xl font-bold text-sky-300'>15</h4>
                            <p className='text-xs sm:text-sm lg:text-base'>Années d'Expérience</p>
                        </main>
                        <main className='flex gap-3 sm:gap-4 lg:gap-5 items-center p-2 justify-center'>
                            <h4 className='text-xl sm:text-2xl lg:text-3xl font-bold text-sky-300'>98%</h4>
                            <p className='text-xs sm:text-sm lg:text-base'>Clients Satisfaits</p>
                        </main>
                    </span>
                </main>
                {/*image part*/}
                <main className="w-full lg:w-[500px] h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500px] hover:bg-opacity-5 relative rounded-xl sm:rounded-2xl shadow-md overflow-hidden mt-4 sm:mt-6 lg:mt-0">
                    <Image 
                        src={image1}
                        alt='image1'
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 30vw"
                        className="object-cover block transform hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full"
                    />
                </main>
            </motion.article>
        </div>
    )
};
{/*Nos valeur component*/}
{/*Nos valeur component*/}
export const ValeurSection = function(){
    return(
        <motion.section
            initial={{opacity:0, y:8}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:8}}
            transition={{duration:0.5, delay:0.1}}
            className='bg-white mb-10 sm:mb-16 lg:mb-20 rounded-xl sm:rounded-2xl shadow-md mx-4 sm:mx-6 lg:mx-8'
        >
            <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold pt-4 sm:pt-5 text-center mt-6 sm:mt-8 lg:mt-10'>Nos Valeurs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 p-4 sm:p-6 lg:p-8 xl:p-20 gap-4 sm:gap-6 lg:gap-8 bg-white rounded-xl sm:rounded-2xl shadow-md'>
                {/*Technique*/}
                <main className='flex flex-col sm:flex-row items-center gap-4 sm:gap-5 p-4 sm:p-4 lg:p-5 hover:bg-neutral-200 transition-bg duration-300 rounded-lg w-full max-w-[600px] mx-auto'>
                    <GrShieldSecurity className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2"/>
                    <article className='text-center sm:text-left'>
                        <h4 className='font-bold text-lg sm:text-xl lg:text-2xl'>Excellence Technique</h4>
                        <p className='text-sm sm:text-base lg:text-lg'>
                            Nous appliquons les plus hauts standards de qualité dans chaque projet, 
                            en utilisant les technologies les plus avancées.
                        </p>
                    </article>
                </main>

                {/*collaboration*/}
                <main className='flex flex-col sm:flex-row items-center gap-4 sm:gap-5 p-4 sm:p-6 lg:p-10 hover:bg-neutral-200 transition-bg duration-300 rounded-lg w-full max-w-[600px] mx-auto'>
                    <FcCollaboration className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2"/>
                    <article className='text-center sm:text-left'>
                        <h4 className='font-bold text-lg sm:text-xl lg:text-2xl'>Collaboration</h4>
                        <p className='text-sm sm:text-base lg:text-lg'>
                            Notre approche collaborative garantit une communication transparente 
                            avec nos clients à chaque étape.
                        </p>
                    </article>
                </main>

                {/*innovation*/}
                <main className='flex flex-col sm:flex-row items-center gap-4 sm:gap-5 p-4 sm:p-6 lg:p-10 hover:bg-neutral-200 transition-bg duration-300 rounded-lg w-full max-w-[600px] mx-auto'>
                    <LuLightbulb className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2" />
                    <article className='text-center sm:text-left'>
                        <h4 className='font-bold text-lg sm:text-xl lg:text-2xl'>Innovation</h4>
                        <p className='text-sm sm:text-base lg:text-lg'>
                            Nous intégrons les dernières innovations en matière de construction 
                            durable et de modélisation BIM.
                        </p>
                    </article>
                </main>

                {/*Délais des Project*/}
                <main className='flex flex-col sm:flex-row items-center gap-4 sm:gap-5 p-4 sm:p-6 lg:p-10 hover:bg-neutral-200 transition-bg duration-300 rounded-lg w-full max-w-[600px] mx-auto'>
                    <MdHistoryToggleOff className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-2"/>
                    <article className='text-center sm:text-left'>
                        <h4 className='font-bold text-lg sm:text-xl lg:text-2xl'>Respect des Délais</h4>
                        <p className='text-sm sm:text-base lg:text-lg'>
                            Nous nous engageons à livrer tous nos projets dans les délais convenus, 
                            sans compromis sur la qualité.
                        </p>
                    </article>
                </main>
            </div>
        </motion.section>
    )
};
{/*notre equipe component*/}
{/*notre equipe component*/}
export const EquipeSection = function(){
    return(
        <div className='px-4 sm:px-6 lg:px-8'>
            <motion.main
                initial={{opacity:0, y:8}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:8}}
                transition={{duration:0.5, delay:0.1}}
            >
                <main className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 p-4 sm:p-6 lg:p-8 xl:p-10 bg-white mb-10 sm:mb-16 lg:mb-20 rounded-xl sm:rounded-2xl shadow-md'>
                    {CardItems.map((item, index)=>(
                        <article key={index} className='flex flex-col items-center'>
                            <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] xl:h-[400px] hover:bg-opacity-5 relative rounded-xl sm:rounded-2xl shadow-md overflow-hidden">
                                <Image 
                                    src={item.image} 
                                    alt="image"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 30vw"
                                    className="object-cover block transform hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full"
                                />
                            </div>
                            <div className='flex flex-col justify-center items-center text-center p-2 sm:p-3 gap-1 sm:gap-2 w-full'>
                                <h4 className='text-lg sm:text-xl lg:text-2xl font-bold'>{item.nom}</h4>
                                <p className='text-sm sm:text-base lg:text-lg text-sky-400'>{item.title}</p>
                                <p className='text-xs sm:text-sm text-neutral-500'>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </main>
            </motion.main>
        </div>
    )
}