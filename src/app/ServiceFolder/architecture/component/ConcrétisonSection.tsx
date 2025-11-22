"use client"
import {motion} from 'framer-motion'
import Image from 'next/image';
import image1 from '../image/a-studio-portrait-of-a-man-a-civil-engin_IF99ij-ST5upSQQ7dHGFsw_8ZpzBsewSBi7xAIoi49zWg.jpeg'
import Link from 'next/link'
export default function ConcrétisonSection() {
  return (
<section className="flex flex-col md:flex-row sm:flex-col justify-center items-center gap-8 md:gap-10 mt-20 bg-sky-400 p-6 sm:p-8 md:p-10 text-white mb-20">
    <motion.div 
    initial={{opacity:0, y:50}}
     whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
    className="relative w-full max-w-[500px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl shadow-md overflow-hidden">
        <Image
            src={image1}
            alt="image"
            fill
            className="object-cover transition-transform hover:scale-105 duration-300 ease-in-out"
        />
    </motion.div>

    <motion.div 
     initial={{opacity:0, y:50}}
     whileInView={{opacity:1, transition:{duration:1, delay:0.3}, y:0}}
    className="w-full max-w-[700px] flex flex-col items-center md:items-start gap-5 px-4 sm:px-0 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Concrétisons Votre Vision Architecturale
        </h2>
        <p className="text-base sm:text-lg">
            Que vous souhaitiez construire une maison, un bureau ou un bâtiment public, notre équipe
            <span className="block">d'architectes est prête à donner vie à vos idées.</span>
        </p>
        <main className="flex flex-col sm:flex-row gap-3 sm:gap-5 p-2">
            <Link
                href="../../../ContactSection"
                className="px-6 py-2 bg-white rounded-full text-black hover:bg-black hover:text-white transition-colors duration-300 text-center"
            >
                Demander un Devis
            </Link>
            <Link
                href="https://wa.me/221770862226"
                className="px-6 py-2 border-2 border-white rounded-full text-center"
            >
                Contacter Nous
            </Link>
        </main>
    </motion.div>
</section>
  )
}
