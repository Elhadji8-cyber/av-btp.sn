import {BackgroundImage} from '../Component/BackgroundImage'
import image1 from './image/a-studio-portrait-of-a-man-a-civil-engin_IF99ij-ST5upSQQ7dHGFsw_8ZpzBsewSBi7xAIoi49zWg.jpeg'
import {ProjectSection} from './component/projectSection'
import {ProcessusSection} from './component/ProcessusSection'
import {ProjectArchiSection} from './component/projectArchiSection'
import AnaotherSection from './component/AnaotherSection';
import ConcrétisonSection from './component/ConcrétisonSection';
import {MainNavbarSection} from '../../aceuile/Component/mainNavbar';
import {FooterSection} from '../../aceuile/Component/FooterSection'
const BacgrounItems = {
    image: image1,
    title: "Services d'Architecture",
    description: "Conception architecturale innovante alliant esthétique, fonctionnalité et respect de l'environnement tropical sénégalais.",
    alt: "image de fond"
}
export default function App(){
    return(
        <>
        {/*Navbar section import from main component*/}
        <MainNavbarSection/>
        {/*BackgroundImage Section*/}
        <BackgroundImage Data={[BacgrounItems]}/>

        {/*ProjectSection Section*/}
        <ProjectSection/>
        <ProcessusSection/>
        <ProjectArchiSection/>
        <AnaotherSection/>
        <ConcrétisonSection/>
        {/*Footer Section*/}
        <FooterSection/>
        </>
    )
}