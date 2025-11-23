import Image from 'next/image';
import logo from '../../../../public/logo-avbtp.png'
import Link from 'next/link';
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";

export const FooterSection = function(){
    return(
        <section className="w-full bg-black text-white px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-14
        relative bottom-5">
            <div className="w-full max-w-6xl mx-auto">
                {/* 4-cols on desktop, 2-cols on tablet, stacked on mobile */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Company / Logo */}
                    <div className="flex flex-col items-start sm:items-start">
                        <article className="flex items-center gap-3">
                            <Image src={logo} alt='logo image' width={48} height={48} className='rounded-full object-cover'/>
                            <h3 className="font-bold text-2xl">Av-btp</h3>
                        </article>

                        <p className="text-neutral-400 mt-3">
                            Expertise en génie civil et architecture.<br/>
                            Nous créons des espaces innovants et fonctionnels<br/>
                            qui allient technique et créativité.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-4 text-2xl">
                          <Link href="https://www.linkedin.com/in/adams-btp-1067a3205/" className='p-2 bg-neutral-400 hover:bg-sky-400 rounded-[10px] hover:transition-all duration-300' aria-label="LinkedIn">
                            <SlSocialLinkedin />
                          </Link>
                          <Link href="https://www.instagram.com/reel/DRRdokfEvUj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className='p-2 bg-neutral-400 hover:bg-sky-400 rounded-[10px] hover:transition-all duration-300' aria-label="Instagram">
                            <SlSocialInstagram/>
                          </Link>
                          <Link href="https://www.facebook.com/profile.php?id=61581544035912" className='p-2 bg-neutral-400 hover:bg-sky-400 rounded-[10px] hover:transition-all duration-300' aria-label="Facebook">
                            <SlSocialFacebook />
                          </Link>
                          <Link href="https://www.tiktok.com/@av.btp" className='p-2 bg-neutral-400 hover:bg-sky-400 rounded-[10px] hover:transition-all duration-300' aria-label="Twitter">
                            <FaTiktok />
                          </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-2xl'>Service</h3>
                        <nav className="mt-3 flex flex-col gap-2">
                            <Link href='../../ServiceFolder/architecture' className='text-neutral-400 hover:text-white'>Architecture</Link>
                            <Link href='../../ServiceFolder/genie-civil' className='text-neutral-400 hover:text-white'>Génie Civil</Link>
                            <Link href='../../ServiceFolder/genie-electrique' className='text-neutral-400 hover:text-white'>Genie Electrique</Link>
                            <Link href='../../ServiceFolder/hydraulique-plomberie' className='text-neutral-400 hover:text-white'>Hydraulique & Plomberie</Link>
                             <Link href='../../ServiceFolder/construction' className='text-neutral-400 hover:text-white'>Construction</Link>
                             <Link href='../../ServiceFolder/construction-bim' className='text-neutral-400 hover:text-white'>Bim</Link>
                             <Link href='../../ServiceFolder/genie-mecanique' className='text-neutral-400 hover:text-white'>Génie Mécanique</Link>
                        </nav>
                    </div>

                    {/* Projets */}
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-2xl'>Projets</h3>
                        <nav className="mt-3 flex flex-col gap-2">
                            <Link href='../../Projets/residence-cayor' className='text-neutral-400 hover:text-white'>Résidence Cayor</Link>
                            <Link href='../../Projets/villa-cayor' className='text-neutral-400 hover:text-white'>Villa Cayor</Link>
                            <Link href='../../Projets/r-10-almadies' className='text-neutral-400 hover:text-white'>R+10 Almadies</Link>
                            <Link href='../../Projets/r-5-cote-divoire' className='text-neutral-400 hover:text-white'>R+5 cote d&apos;ivoire</Link>
                        </nav>
                    </div>

                    {/* Entreprise */}
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-2xl'>Entreprise</h3>
                        <nav className="mt-3 flex flex-col gap-2">
                            <Link href='/AboutSection' className='text-neutral-400 hover:text-white'>À propos</Link>
                            <Link href='/AboutSection' className='text-neutral-400 hover:text-white'>Notre équipe</Link>
                            <Link href='/AboutSection' className='text-neutral-400 hover:text-white'>Nos valeur</Link>
                            <Link href='/ContactSection' className='text-neutral-400 hover:text-white'>Contact</Link>
                        </nav>
                    </div>
                </div>

                {/* Divider */}
                <hr className='border-neutral-700 my-8'/>

                {/* Contact info - stack on mobile, row on tablet+ */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
                    <div className='flex items-start gap-3'>
                        <FaLocationDot className='w-8 h-8 text-sky-400'/>
                        <div>
                            <h4 className="font-bold">Adresse</h4>
                            <p className="text-neutral-400">Dakar, Derklé Cité Marine</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-3'>
                        <FaPhone className='w-8 h-8 text-sky-400'/>
                        <div>
                            <h4 className="font-bold">Téléphone</h4>
                            <p className="text-neutral-400">+221 77 086 22 26</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-3'>
                        <MdEmail className='w-8 h-8 text-sky-400'/>
                        <div>
                            <h4 className="font-bold">Email</h4>
                            <p className="text-neutral-400">avbtp7@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className='border-neutral-700 my-8'/>

                {/* Bottom bar - stack on mobile, inline on tablet+ */}
                <article className='w-full flex flex-col sm:flex-row justify-between items-center text-neutral-400 gap-3'>
                    <p className="text-sm">© 2024 Av-btp. Tous droits réservés.</p>
                    <p className="text-sm">Design & build by <Link href='https://www.instagram.com/elhadji.dev?igsh=YXViMHpvOWVkNXNx&utm_source=qr' className='hover:underline hover:text-white'>Elhadji</Link></p>
                </article>
            </div>
        </section>
    )
}