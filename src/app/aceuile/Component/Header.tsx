//Navbar Section Items Import
"use client"
/// Header Section Items Import
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react";
import {MainNavbarSection} from './mainNavbar'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
type Dataimage= {
  url: string;
  title:string;
  description:string;
}
const imageSlider:Dataimage[] = [
  {url:"https://www.clarkson.edu/sites/default/files/2023-06/Civil-Engineering-Hero-1600x900.jpg",
    title:"Bienvenue chez AV-BTP, Votre Compagnons Dans Le BTP",
    description:"L expertise au service de vos projets de construction en  en architecture et génie civil "
  },
  {url:"https://caddcentre.com/blog/wp-content/uploads/2022/02/Women-Civil-2-1024x669-1.jpeg",
   title:"Savoir‑faire Local, Standards Internationaux",
   description:"Conception, calculs structurels et maîtrise d’œuvre pour bâtiments durables."
  },
  {url:"https://www.ucf.edu/online/wp-content/blogs.dir/19/files/2019/12/how-much-can-you-make-engineering.jpg",
    title:"Sécurité & Conformité",
    description:"Respect des normes, contrôles qualité rigoureux et suivi chantier professionnel."
  }
]
const HeaderSection: React.FC = () =>{
return(
  <div>
    {/*navbar componenet from the crout component folder*/}
    <main>
     <MainNavbarSection/>
    </main>
{/*Image Slider Section*/ }
<section className='mt-24 relative min-h-screen h-fit md:w-full sm w-[360px]'>
        <Swiper 
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        >
        {imageSlider.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url.url} alt={`image-${index}`}
              className="md:w-full  object-cover h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-[15px] sm w-[360px]"
              />
              {/* Texte sur l’image */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 bg-black/30 rounded-[15px]">
        <main className="max-w-4xl">
            <motion.h1 
              initial={{ opacity:0, y: 25, scale: 1}}
              animate={{ opacity: 1, y:0}}
              transition={{ duration: 1, ease: "easeInOut" }}
             className="text-white font-bold mb-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
              {url.title}
            </motion.h1>
            <motion.p  
            initial={{ opacity:0, y: 25, scale: 1}}
            animate={{ opacity: 1, y:0}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-white text-sm sm:text-base md:text-lg mt-2">
              {url.description}</motion.p>
            <article className="flex gap-3 sm:gap-5 mt-4 flex-wrap">
                <Link href="../../ContactSection" className="px-4 py-2 bg-white rounded-full text-sm hover:bg-black
                 hover:text-white transition-all duration-300">Demande un Devis</Link>
                <Link href="https://wa.me/221770862226"
                     target="_blank"
                     className="px-4 py-2 border-2 border-white text-white rounded-full text-sm hover:bg-black 
                     hover:text-white transition-all duration-300">Contacter Nous</Link>
            </article>
        </main>
        </div>
              
            </SwiperSlide >

        ))}
          

        </Swiper>
       </section>
  </div>
       )
   }

   export default HeaderSection
   