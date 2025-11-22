import image1 from './image/Bim-modeling.jpg'
import {MainNavbarSection} from "../../aceuile/Component/mainNavbar"
import {BackgroundImage} from '../Component/BackgroundImage'; 
import {NosServiceBim} from './Component/NosServiceBim'
import {LogicielSection} from './Component/LogicielSection';
import  {AvantageSection} from './Component/AvantageSection';
import {NotreProcessus} from './Component/NotreProcessus';
import {ProjectBimSection} from './Component/ProjectBim';
import {TechnologyBim} from './Component/TechnologyBim';
import {ModernisezProject} from './Component/ModernisezProject'
import {FooterSection} from '../../aceuile/Component/FooterSection'
const Cards = {
    image : image1,
    title: "Modélisation BIM",
    description: "Maquettes numériques 3D, plans 2D automatisés et coordination de projet pour une construction plus efficace et collaborative.",
    alt: "construction plus efficace et collaborative."
}
export default function App() {
  return (
       <>
     {/*Navbar Section import from the root component folder*/}
       <MainNavbarSection/>
     {/*Background image component import from  the service component folder*/}
       <BackgroundImage Data ={[Cards]}/>
     {/*import nos service section from the component folder*/}
     <NosServiceBim/>
     {/*import logiciel component from component folder*/}
     <LogicielSection/>
     {/*import avatage component from component folder*/}
     <AvantageSection/>
     {/*import Processus compoent from component folder*/}
     <NotreProcessus/>
     {/* import ProjectBimSection component from component folder*/}
     <ProjectBimSection/>
       {/*import technlogy component from component folder*/}
     <TechnologyBim/>
     {/*import ModernisezProject component from component folder*/}
     <ModernisezProject/>
    {/*import Footer component from root component folder*/}
     <FooterSection/>
    </>
  )
}
