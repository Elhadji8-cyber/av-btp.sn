import HeaderSection from './Component/Header';
import { ExperienceSection } from './Component/Experience';
import { ServiceSection } from './Component/ServiceSection';
import {ProjectSection }from './Component/ProjectSecton';
import {CompteProject} from './Component/compteProject'
import { AvFooterSection } from './Component/avFooter';
import {FooterSection} from './Component/FooterSection';
export default function App() {
  return (
      <>
    <HeaderSection />
    <CompteProject/>
    <ExperienceSection />
    {/*Service Section Component*/}
    <ServiceSection />
    {/*Project Section Component*/}
    <ProjectSection />
    <AvFooterSection/>
    <FooterSection />
      </>
  )
}
