import image1 from './image/bg.jpeg'
import {MainNavbarSection} from "../../aceuile/Component/mainNavbar"
import {BackgroundImage} from '../Component/BackgroundImage'; 
import {ServiceGenieCivil} from './Component/ServiceGenieCivil'
import {FooterSection} from '../../aceuile/Component/FooterSection';
import {ExpertiseSection} from './Component/Expertise';
import {NotreMethodologi} from './Component/NotreMethodologi';
import {RealisationSection } from './Component/Realisation'
import {DimansionSection} from './Component/DimansionSection';
import {BesoinSection} from './Component/BesoinSection'
const Cards = {
    image : image1,
    title: "Génie Civil & Structures",
    description: "Expertise technique en calculs de structures, infrastructures et suivi de chantier pour des ouvrages durables et sécurisés.",
    alt: "ouvrages durables et sécurisés."
}

export default function App() {
  return (
      <>
      {/*Navbar Section import from the root component folder*/}
       <MainNavbarSection/>
       {/*Background image component import from  the service component folder*/}
             <BackgroundImage Data ={[Cards]}/>
               {/*import service component from component folder*/}
             <ServiceGenieCivil/>
             {/*import expertise component from component folder*/}
              <ExpertiseSection/>
              {/*import component from genie-civil component folder*/}
              <NotreMethodologi/>
              {/*import realisation component from geneie-civil component folder*/}
              <RealisationSection />
              {/*import dimensionnement component dfrom genie-civil component folder*/}
              <DimansionSection/>
               {/*besoin component import from genie-civil component folder*/}
             <BesoinSection/>
             {/*import Footer component from root component folder*/}
             <FooterSection/>
      </>
  )
}
