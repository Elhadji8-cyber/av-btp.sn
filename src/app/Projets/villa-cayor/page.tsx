import image1 from './image/villa-cayor3.jpg'
import {MainNavbarSection} from '../../aceuile/Component/mainNavbar'
import HeadingSection from '../Component/Headingsection';
import {ProjectSection} from './Component/projectSection';
import {FooterSection} from '../../aceuile/Component/FooterSection'
const Lescards = [
    {image: image1,
    title: 'Villa Cayor'}
]

export default function App(){
    return(
        <>
        {/*Navbar section import from main component*/}
        <MainNavbarSection/>
        {/*Header Section component import from project folder compnent*/}
        <HeadingSection HeaderCards={Lescards} />
        {/* import component from villa cayor folder component main section*/}
        <ProjectSection/>
        {/* import Footer section from the main component folder*/}
        <FooterSection/>
        </>
    )
}