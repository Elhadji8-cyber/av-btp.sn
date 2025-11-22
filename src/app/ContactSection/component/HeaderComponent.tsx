import Image from "next/image"
import Bgimage from '../image/bg1.jpeg'
export const HeaderComponent = function(){
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
              sm:p-4 rounded-[20px] w-[92%] sm:w-[75%] md:w-[60%] sm:bg-none mx-auto sm:bg-white/60 sm:mt-5 md:mt-10 mt-5">
              <h1 className="text-black text-4xl sm:text-6xl md:text-7xl font-bold leading-tight break-words" >Contactez-Nous</h1> 
              <p className="text-black flex flex-col items-center text-base sm:text-lg md:text-xl mt-2 break-words">
                Discutons de votre projet et transformons vos idées en réalité. Notre équipe est là pour vous
                <span>accompagner à chaque étape.</span>
              </p>
            </div>
        </section>
    )
}