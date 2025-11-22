"use client"
import {motion} from 'framer-motion'
import type { IconType } from 'react-icons';
import { BsBuildings } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { RiHammerLine } from "react-icons/ri";
import { FaSearchDollar } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
import { RiMeteorFill } from "react-icons/ri";
type CardsItems = {
  Icons?: IconType;
  title: string;
  titre: string;
  description: string
}
const Itemscards : CardsItems[] =[
  {Icons: BsBuildings,
    title: "Autodesk Revit",
    titre: "Architecture & Structure",
    description: "Modélisation architecturale et structurelle."
  },
    {Icons: FiHome,
    title: "ArchiCAD",
    titre: "Architecture",
    description: "Conception architecturale et documentation."
  },
      {Icons: RiHammerLine,
    title: "Tekla Structures",
    titre: "Structure Métallique",
    description: "Modélisation détaillée des structures en acier."
  },
     {Icons: FaSearchDollar ,
    title: "Navisworks",
    titre: "Coordination",
    description: "Coordination et détection de conflits."
  },
    {Icons: CiCamera ,
    title: "Lumion",
    titre: "Rendu",
    description: "Rendus photoréalistes et animations."
  },
   {Icons: RiMeteorFill ,
    title: "BIM 360",
    titre: "Collaboration",
    description: "Plateforme collaborative cloud."
  },
]

export const LogicielSection = function(){
    return(
        <section className="flex flex-col justify-center items-center gap-5 p-6 sm:p-8 md:p-10 mt-12 md:mt-20">
          <div className="p-2 md:p-5 mt-6 md:mt-10 text-center">
            <motion.h1 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, transition:{duration:1}, y:0}}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">Logiciels BIM Maîtrisés</motion.h1>
            <motion.p 
            initial={{opacity:0, y:20}}
             whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
            className="max-w-xl mx-auto text-sm sm:text-base md:text-lg mt-2">
              Notre équipe maîtrise les logiciels BIM les plus performants pour répondre à tous vos
              <span className="block">besoins de modélisation.</span>
            </motion.p>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl">
            {Itemscards.map((item, indx) => {
              const Icon = item.Icons;
              return (
                <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, transition:{duration:1, delay:indx*0.2}, y:0}}
                  key={indx}
                  className="w-full max-w-[300px] h-auto bg-neutral-100 rounded-[20px] p-5 flex flex-col justify-center items-center hover:bg-white hover:shadow-lg transition-shadow duration-300 mx-auto"
                >
                  <main className="p-3 bg-fuchsia-200 rounded-full">
                    {Icon ? <Icon className="w-8 h-8 sm:w-10 sm:h-10" /> : null}
                  </main>

                  <h3 className="font-bold p-1 mt-2 text-lg sm:text-xl text-center">{item.title}</h3>
                  <h4 className="text-fuchsia-300 text-sm sm:text-base">{item.titre}</h4>
                  <p className="mt-2 text-center text-sm sm:text-base">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
    )
}