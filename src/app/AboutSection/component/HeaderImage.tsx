import Image from "next/image"
import Bgimage from '../image/a-professional-photograph-of-black-civil_QFeS5zP6SceFu540U8g7OQ_waMMz6ngQteNvTc-NR82IA.jpeg'
export const HeaderImage = function(){
    return(
        <section>
            {/*image background*/}
            <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] 
                    lg:h-[75vh] flex justify-center items-center">
            <Image 
            src={Bgimage} 
            alt="Bgimage"
            fill
            sizes='100vw'
            className='object-cover opacity-80'
            />
            </div>

             <div className="relative  sm bottom-50 md:bottom-100 lg:bottom-100 z-10 text-center p-2
              sm:p-4 rounded-[20px] w-[92%] sm:w-[75%] bg-white/60 md:w-[60%] sm:bg-none mx-auto sm:mt-5 md:mt-10 mt-5">
              <h1 className="text-black text-4xl sm:text-6xl md:text-7xl font-bold leading-tight break-words" >À Propos de Nous</h1> 
              <p className="text-black flex flex-col items-center text-base sm:text-lg md:text-xl mt-2 break-words">Une équipe passionnée d'experts en architecture et génie civil, dédiée à transformer vos visions
                <span>en réalités durables et innovantes.</span>
              </p>
            </div>
        </section>
    )
}