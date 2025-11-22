import image from './image/bg-image.jpeg';
import {MainNavbarSection} from "../../aceuile/Component/mainNavbar";
import {BackgroundImage} from '../Component/BackgroundImage';
import {FooterSection} from '../../aceuile/Component/FooterSection'
import {NosService} from './component/NosService';
import {ExpertiseMecanic} from './component/ExpertiseMecanic'
import {MethodologyMecanic} from './component/MethodologyMecanic'
import {ProjectMecanic} from './component/ProjectMecanic'
import  {ConceptionExpert} from './component/ConceptionExpert'
import {GenieMecanic} from './component/GenieMecanic'
const Cards = {
    image : image,
    title: "Génie Mécanique",
    description: " Solutions mécaniques complètes pour l'industrie, le tertiaire et les infrastructures. Expertise en systèmes CVC, équipements industriels et maintenance.",
    alt: "ouvrages durables et sécurisés."
}
export default function App() {
  return (
      <>
          {/*Navbar component import from rout component folder*/}
               <MainNavbarSection/>
           {/*import Header image from servicefolder component*/}
               <BackgroundImage Data ={[Cards]}/>
              <NosService/>
              <ExpertiseMecanic/>
              <MethodologyMecanic/>
              <ProjectMecanic/>
              <ConceptionExpert/>
              <GenieMecanic/>
              <FooterSection/>
      </>
  )
}
