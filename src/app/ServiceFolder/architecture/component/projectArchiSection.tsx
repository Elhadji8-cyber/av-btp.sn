"use client"
import {motion} from "framer-motion"
import type { StaticImageData } from 'next/image';
import image1 from '../image/R+5 cote divoire (2).jpeg';
import image2 from '../image/villa-cayor (2).jpeg';
import image3 from '../image/a-dramatic-3d-rendering-showcases-a-towe_U5D0WhFcSP-73ApntFlpsQ_Fd_vA4bJT6-I4BPmjQXZGA.jpeg'
import Image from 'next/image';
import Link from 'next/link'
type  imageItem = {
    text: string;
    image:StaticImageData;
    titre: string;
    link: string;
}
const Dataimage: imageItem[] = [
    {
     text: 'Résidentiel',
     image: image1,
     titre: "R+5 Cote Divoire",
     link: '../../../ContactSection'
    },
    {
     text: 'villa',
     image: image2,
     titre: "Villa Cayor",
     link: '../../../ContactSection'
    },
    {
     text: 'Immeuble',
     image: image3,
     titre: "R+10 Almadie",
     link: '../../../ContactSection'
    },
]

export const ProjectArchiSection = function(){
    return(
        <section className="bg-neutral-100 p-8 sm:p-12 md:p-20 flex flex-col items-center">
            <motion.h1
             initial={{opacity:0, y:50}}
             whileInView={{opacity:1, transition:{duration:1}, y:0}}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-sky-500 p-2 text-center">
            Projets Architecturaux Récents
            </motion.h1>
            <motion.p
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, transition:{duration:1}, y:0}}
            className="mt-2 max-w-2xl text-center text-sm sm:text-base text-gray-600">
            Découvrez quelques-unes de nos réalisations architecturales remarquables.
            </motion.p>

            {/* card grid: 1 col on phone, 2 on tablet, 3 on desktop */}
            <div className="mt-8 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {Dataimage.map((item, idx) => (
                <motion.article
                initial={{opacity:0, y:50}}
                 whileInView={{opacity:1, transition:{duration:1, delay:idx*0.4}, y:0}}
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                >
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                    {/* badge */}
                    <p className="absolute left-3 top-3 z-20 bg-sky-500 text-white px-3 py-1 rounded-md text-sm">
                    {item.text}
                    </p>

                    <Image
                    src={item.image}
                    alt={item.titre}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 48vw, 30vw"
                    className="object-cover w-full h-full"
                    // Next/Image will infer width/height from imported static images
                    />
                </div>

                <div className="p-4 flex flex-col gap-3 flex-1">
                    <h2 className="font-semibold text-lg md:text-xl text-gray-900">
                    {item.titre}
                    </h2>

                    <div className="mt-auto">
                    <Link
                        href={item.link}
                        className="inline-block text-white text-sm p-2 bg-sky-500 rounded-full w-fit"
                        aria-label={` ${item.titre}`}
                    >
                        Demande un devis
                    </Link>
                    </div>
                </div>
                </motion.article>
            ))}
            </div>
        </section>
    )
}