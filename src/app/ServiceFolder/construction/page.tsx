import image from './image/construction0.jpg';
import {MainNavbarSection} from "../../aceuile/Component/mainNavbar";
import {BackgroundImage} from '../Component/BackgroundImage';
import {ServiceConstruction} from './component/ServiceConstruction'
import {FooterSection} from '../../aceuile/Component/FooterSection';
import {ExpertiseConstruction } from './component/ExpertiseConstruction'
import {ProcessusConstruction} from './component/ProcessusConstruction'
import {RealisationConstruction} from './component/RealisationConstruction'
import {DemarrageConstruction} from './component/DemarrageConstruction'
import {GarantieSection} from './component/GarantieSection'
const Cards = {
    image : image,
    title: "Construction & Travaux Publics",
    description: "Entreprise générale de construction spécialisée dans le gros œuvre, second œuvre et travaux publics au Sénégal.",
    alt: "ouvrages durables et sécurisés."
}
export default function App() {
  return (
    <>
    {/*Navbar component import from rout component folder*/}
         <MainNavbarSection/>
     {/*import Header image from servicefolder component*/}
         <BackgroundImage Data ={[Cards]}/>
      {/*import sevice component from the component folder*/}
      <ServiceConstruction/>
      {/*import the service component from the component folder*/}
       <ExpertiseConstruction />
      {/*import processus  component from the component folder*/}
      <ProcessusConstruction/>
       {/*import project component from the component folder*/}
       <RealisationConstruction/>
       {/*import Garanti component from th component folder*/}
       <GarantieSection/>
       {/*import the component from the component folder*/}
       <DemarrageConstruction/>
      {/*import footer section from the root component folder*/}
          <FooterSection/>
    </>
  )
}
