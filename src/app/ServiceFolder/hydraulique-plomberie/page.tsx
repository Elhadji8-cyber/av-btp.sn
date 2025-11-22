import {MainNavbarSection} from "../../aceuile/Component/mainNavbar";
import {BackgroundImage} from '../Component/BackgroundImage';
import {FooterSection} from '../../aceuile/Component/FooterSection';
import { ExpertiseHydraulic } from "./Component/ExpertiseHydraulic";
import image from './image/Plomberie.jpg';
import { NosServiceSection } from "./Component/NosService";
import { NotreApproche } from "./Component/NotreApproche";
import { ProjectHydraulic } from "./Component/ProjectHydraulic";
import { HydraulicTechnologi } from "./Component/HydraulicTechnologi";
import { DefisHydraulic } from "./Component/DefisHydraulic";
import { ProjectVue } from "./Component/ProjectVue";
const Cards = {
    image : image,
    title: "Ingénierie Hydraulique",
    description: "Solutions complètes en hydraulique : adduction d'eau potable, assainissement, irrigation et gestion durable des ressources en eau.",
    alt: "ouvrages durables et sécurisés."
}

export default function App() {
  return (
     <>
     {/*Navbar component import from rout component folder*/}
     <MainNavbarSection/>
     {/*import Header image from servicefolder component*/}
     <BackgroundImage Data ={[Cards]}/>
     {/*import Nos Service component from the component folder*/}
     <NosServiceSection/>
     {/*import expertise Hydraulic section from the component folder*/}
     <ExpertiseHydraulic/>
     {/*import notre approche component from the component folder*/}
       <NotreApproche/>
       {/*import project from the component folder*/}
        <ProjectHydraulic/>
        {/*import thenologi component from the component folder*/}
         <HydraulicTechnologi/>
         {/*import Defis Hydraulic component from the component folder*/}
         <DefisHydraulic/>
         {/*import project vue from the component folder*/}
         <ProjectVue/>
         {/*import footer section from the root component folder*/}
         <FooterSection/>
     </>
  )
}
