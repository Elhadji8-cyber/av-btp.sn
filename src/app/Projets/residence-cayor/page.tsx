
import {MainNavbarSection} from '../../aceuile/Component/mainNavbar'
import HeadingSection from '../Component/Headingsection'
import image1 from './image/résidence-1.jpg'
import HeaderResidence from './Component/HeaderResidence';
import {FooterSection} from '../../aceuile/Component/FooterSection'
const Lescards = [
    {image: image1,
    title: 'Résidence Cayor'}
]


export default function App(){
         return(
            <>
            {/*Navbar Section*/}
            <MainNavbarSection/>
            {/*Header Section*/}
            <HeadingSection HeaderCards={Lescards} />
            {/*PageLayoutSection from main project component*/}
            <HeaderResidence/>
            {/* footer section from main component footer*/}
            <FooterSection/>
            </>
         )
}