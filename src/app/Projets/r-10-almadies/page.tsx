import {MainNavbarSection} from "../../aceuile/Component/mainNavbar";
import { AlmadiesHeader } from './Component/almadiesHeader'
import { ProjectAlmadies } from './Component/projectaAlmadies';
import { FooterSection } from '../../aceuile/Component/FooterSection'
export default function App(){
    return(
        <>
        {/*Navbar section impor from main navbar*/}
        <MainNavbarSection/>
        {/*Header Image section from almadies folder component*/}
         <AlmadiesHeader/>
        {/* poject almadies section import from almadies compenent*/}
        <ProjectAlmadies/>
        {/*footer section impor from the main component folder*/}
        <FooterSection/>
        </>
    )
}