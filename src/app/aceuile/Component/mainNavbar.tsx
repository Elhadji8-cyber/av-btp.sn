
//Navbar Section Items Import
"use client"
import Link from "next/link";
import Image from "next/image";
import project1 from '../../../../public/project-1.png'
import project2 from '../../../../public/project-chat.png'
import project3 from '../../../../public/ChatGPT Image 15 oct. 2025, 15_28_49.png'
import project4 from '../../../../public/project-4.png'
import logo from '../../../../public/min-logo.jpg'
import type { StaticImageData } from 'next/image';
import type { IconType } from 'react-icons';
import { IoIosArrowDown } from "react-icons/io";
import { MdArchitecture } from "react-icons/md";
import { MdHomeWork } from "react-icons/md";
import { LuChartNetwork } from "react-icons/lu";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

///Navigation Items type
type NavigationItems = {
  label: string;
  link?: string;
  children?: NavigationItems[];
  iconImage?: StaticImageData | IconType;
}
const NavItems :NavigationItems[]= [
     //Dropdown Service menu 2
      {label: "Accueil",
      link: '/',
      },
    {label: 'Services',
    link: '#',
    children: [
      {label: "Génie Civil",
      link: '../ServiceFolder/genie-civil',
      iconImage: MdArchitecture ,
      },
      
      {label: " Architecture",
      link: '../../ServiceFolder/architecture',
      iconImage:  MdArchitecture  ,
      },

      
      {label: "Construction BTP",
      link: '../../ServiceFolder/construction',
      iconImage: FaBuildingColumns,
      },

      {label: "BIM",
      link: '../../ServiceFolder/construction-bim',
      iconImage: FaBuildingColumns,
      },

      
      {label: "Génie Electrique",
      link: '../../ServiceFolder/genie-electrique',
      iconImage: MdHomeWork ,
      },

      {label: "Génie Mécanique",
      link: '../../ServiceFolder/genie-mecanique',
      iconImage: LuChartNetwork ,
      },
      {label: "Hydraulique & Plomberie",
      link: '../../ServiceFolder/hydraulique-plomberie',
      iconImage: LuChartNetwork ,
      }

    ]   
  },
    {label: 'Projets',
    link: '',
    children: [
      {label: "R+5 cote d'ivoire",
      link: '../../Projets/r-5-cote-divoire',
      iconImage: project2,
      },
      
      {label: "R+10 Almadies",
      link: '../../Projets/r-10-almadies',
      iconImage: project3,
      },

      
      {label: "Résidence Cayor",
      link: '../../Projets/residence-cayor',
      iconImage: project1,
      },

      
      {label: "Villa Cayor",
      link: '../../Projets/villa-cayor',
      iconImage: project4,
      }

    ]   
  },
      {label: "A propos",
      link: '/AboutSection',
      },
       {label: "Contact",
      link: '/ContactSection',
      }
] 




export const MainNavbarSection = function(){
    return(
        <section className="fixed md:left-1/2 transform -translate-x-1/2 top-1 mx-4 md:w-[calc(100%-2rem)] md:max-w-8xl flex items-center justify-between px-4 py-2 text-sm
        bg-sky-600/95 rounded-full backdrop-blur-sm z-30 sm w-[350px] sm left-40">
            {/*Navbar Section*/}
            <nav className="flex md:w-full items-center h-fit justify-between sm:w-fit">
                {/*Left box size logo*/}
              <div className="flex items-center gap-3">
               <Image src={logo} alt='logo' width={44} height={44} className="rounded-full object-cover"/>
               <main className="items-center mt-1">
                <h2 className="font-bold text-white md:text-lg text-sm">AV-BTP</h2>
                <p className=" text-white text-xs md:text-sm">Entreprise De Construction BTP</p>
               </main>
              </div>
              {/*midlle size box*/}
              <MobileNavbar/>
              <div className="hidden lg:flex items-center gap-6 transition-all duration-300 ease-in-out z-10">
                {/*Dropdown menu*/}
                {NavItems.map((item, index) => (
                  <div 
                  key={index}
                  className="relative group px-2 py-2 transition-all"
                  >
                    <Link href={item.link ?? '#'}className="flex cursor-pointer items-center gap-2 text-white group-hover:text-black select-none">
                     <span className="text-sm md:text-base">{item.label}</span>
                     {item.children && (
                      <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180" />
                     )}
                    </Link>
                    {/*Dropdown content*/}
                    {item.children && (
                      <div className="absolute top-full right-0 hidden w-[220px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all
                      group-hover:flex z-50 max-h-[80vh] overflow-y-auto">
                        {item.children.map((child, cIndex)=> (
                       <Link 
                       key={cIndex}
                       href={child.link ?? '#'}
                       className="flex cursor-pointer gap-3 items-center p-2 px-4 text-neutral-600 hover:text-black"
                       >
                        {/*Render image if exists*/}
                        {child.iconImage && (
                          typeof child.iconImage === 'object' ?  (
                            <Image src={child.iconImage} alt={child.label} width={40} height={40} className="object-cover rounded-sm"/>
                          ): (
                            (()=> {
                              const Icon = child.iconImage as IconType;
                              return <Icon className="w-5 h-5 text-neutral-600"/>;
                            })()
                          )
                          
                        )}
                        <p className="truncate text-sm">{child.label}</p>
                       </Link>
                        ))}
                       
                      </div>
                    )}
                  </div>
                ))}

          
              </div>
              {/*Right box size button*/}
              <div className="hidden lg:flex gap-4">
                <Link href='../../ContactSection' className="px-4 py-2 bg-white rounded-full text-xs 
                md:text-sm hover:bg-black hover:text-white transition-all duration-300">
                  Demande Devis
                </Link>
                <Link href="https://wa.me/221770862226"
                      target="_blank" 
                      className="px-4 py-2 border-2 border-white text-white rounded-full text-xs 
                      md:text-sm hover:bg-black hover:text-white transition-all duration-300">
                      Contacter Nous
                </Link>
              </div>
            </nav>
        </section> 

    )
}
{/*mobile Navbar Section*/}

export const MobileNavbar = function(){
    const [open, setOpen] = useState(false);
    return(
        <div className="lg:hidden flex items-center overflow-auto gap-3 ml-10 ">
          <button onClick={()=>setOpen(prev=>!prev)} aria-label="menu" className='p-2 bg-sky-600/0 rounded-md'>
            <IoMenu className='cursor-pointer w-7 h-7 text-white' />
          </button>

          {/* optional small brand on mobile next to hamburger */}
          <div className="flex items-center gap-2">
            <p className="text-white text-sm font-medium"></p>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="absolute top-17 left-3 w-full bg-white/95 backdrop-blur-sm rounded-lg p-4 z-40 shadow-lg
              max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col gap-3">
                {NavItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center justify-between px-2 py-2">
                      <Link href={item.link ?? '#'} className="font-medium text-neutral-700">{item.label}</Link>
                      {item.children ? <span className="text-neutral-500 text-sm">+</span> : null}
                    </div>
                    {item.children && (
                      <div className="mt-1 grid grid-cols-1 gap-2">
                        {item.children.map((c, ci) => (
                          <Link key={ci} href={c.link ?? '#'} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-sky-50">
                            {c.iconImage && (typeof c.iconImage === 'object' ? (
                              <Image src={c.iconImage} alt={c.label} width={36} height={36} className="object-cover rounded-sm"/>
                            ) : (
                              (() => {
                                const Icon = c.iconImage as IconType;
                                return <Icon className="w-5 h-5 text-sky-600
                                relative"/>;
                              })()
                            ))}
                            <span className="text-sm text-neutral-700">{c.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-2 flex gap-2">
                  <Link href="../../ContactSection" className="flex-1 px-3 py-2 bg-sky-600 text-white rounded-full text-sm">Demande Devis</Link>
                  <Link href="https://wa.me/221770862226" className="flex-1 px-3 py-2 border border-sky-600 text-sky-600 rounded-full text-sm">Contacter Nous</Link>
                </div>
              </nav>
            </div>
          )}
        </div>
    )
   }