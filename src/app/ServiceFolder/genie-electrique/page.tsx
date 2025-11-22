import image from './image/electric-banner.jpeg';
import {MainNavbarSection} from "../../aceuile/Component/mainNavbar";
import {BackgroundImage} from '../Component/BackgroundImage';
import {FooterSection} from '../../aceuile/Component/FooterSection';
import {ServiceElectric} from './component/ServiceElectric';
import {ExpertiseElectric} from './component/ExpertiseElectric'
import {NosMethodology} from './component/NosMethodology';
import {RealisationElectric} from './component/RealisationElectric'
import {InstallationSecurity} from './component/InstallationSecurity';
import {GenieElectric} from './component/GenieElectric'
const Cards = {
    image : image,
    title: "Génie Électrique",
    description: "Solutions électriques complètes de la conception à la maintenance. Expertise en installations, énergies renouvelables et automatisation.",
    alt: "ouvrages durables et sécurisés."
}
export default function App() {
  return (
      <>
       {/*Navbar component import from rout component folder*/}
               <MainNavbarSection/>
           {/*import Header image from servicefolder component*/}
               <BackgroundImage Data ={[Cards]}/>
           {/*import service component from thre component foler*/}
             <ServiceElectric/>
             {/*import expertise component from the component folder*/}
                <ExpertiseElectric/>
             {/* methodology component import from the component folder*/}
             <NosMethodology/>
             {/*import project build fro the main cononent folder*/}
             <RealisationElectric/>
               {/*import componenet from the component folder*/}
               <InstallationSecurity/>
               {/*genie Electric component import from component folder*/}
                 <GenieElectric/>
               {/*import footer section from the root component folder*/}
          <FooterSection/>
      </>
  )
}
