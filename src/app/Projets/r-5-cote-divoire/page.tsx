import {MainNavbarSection} from "../../aceuile/Component/mainNavbar";
import { HeaderProjectSection } from "./Component/headerProject";
import {ProjectcodeIvoir} from './Component/projectcodeivoire';
import {FooterSection} from '../../aceuile/Component/FooterSection'
export default function App(){
    return(
        <>
        {/*Navbar section*/}
        <MainNavbarSection/>
        {/*Header section*/}
        <HeaderProjectSection/>
        {/*Project section*/}
        <ProjectcodeIvoir/>
        {/*Footer section*/}
        <FooterSection/>
        </>
    )
}