"use client"
import {motion} from 'framer-motion'
import type { IconType } from 'react-icons';
import { IoTimeOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
import { PiEyesLight } from "react-icons/pi";
type CardBim = {
    icons: IconType;
    title: string;
    titre: string;
    description: string;
}
const Items : CardBim[] = [
   {icons: IoTimeOutline,
    title: "30%",
    titre: "Gain de Temps",
    description:"Réduction des délais de conception et de production des plans."
   },
    {icons: RiMoneyDollarCircleLine,
    title: "20%",
    titre: "Économies",
    description:"Diminution des coûts grâce à la détection précoce des conflits."
   },
   {icons: MdErrorOutline,
    title: "50%",
    titre: "Moins d'Erreurs",
    description:"Réduction significative des erreurs de conception."
   },
   {icons: PiEyesLight,
    title: "100%",
    titre: "Visualisation",
    description:"Meilleure compréhension du projet par tous les acteurs."
   }
   
]
export const AvantageSection = function(){
    return(
        <section className='bg-neutral-100 p-6 sm:p-8 md:p-10 mt-20 flex flex-col justify-center items-center'>
            <div className='w-full max-w-3xl'>
                <motion.h1 
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, transition:{duration:1}, y:0}}
                className='text-3xl sm:text-4xl md:text-6xl font-bold text-center p-2'>Avantages du BIM</motion.h1>
                <motion.p 
                 initial={{opacity:0, y:20}}
                whileInView={{opacity:1, transition:{duration:1, delay:0.2}, y:0}}
                className='text-sm sm:text-base flex flex-col p-2 mt-2 text-center max-w-2xl mx-auto'>
                    Le BIM révolutionne la conception et la construction en apportant des bénéfices
                    <span className='text-center p-1'>concrets à tous les acteurs du projet.</span>
                </motion.p>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-5 mt-4'>
                {/* Card Section */}
                {Items.map((item, index) => {
                    const Icon = item.icons;
                    return (
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:1, transition:{duration:1, delay:index*0.3}, y:0}}
                            key={index}
                            className='w-full max-w-[300px] sm:w-[240px] md:w-[250px] bg-white rounded-[20px] p-6 sm:p-8 mt-5 flex flex-col justify-center items-center shadow-lg'
                        >
                            <div className='p-4 sm:p-5 bg-fuchsia-200 rounded-full'>
                                {Icon ? <Icon className='w-8 h-8 sm:w-10 sm:h-10' aria-hidden /> : null}
                            </div>
                            <h3 className='text-xl sm:text-2xl font-bold text-fuchsia-200 p-1'>{item.title}</h3>
                            <h4 className='font-bold text-center'>{item.titre}</h4>
                            <p className='text-center text-sm sm:text-base mt-2'>{item.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    )
}