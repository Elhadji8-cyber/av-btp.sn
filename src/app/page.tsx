import HeaderSection from './aceuile/Component/Header';
import { ExperienceSection } from './aceuile/Component/Experience';
import { ServiceSection } from './aceuile/Component/ServiceSection';
import {ProjectSection }from './aceuile/Component/ProjectSecton';
import {CompteProject} from './aceuile/Component/compteProject'
import { AvFooterSection } from './aceuile/Component/avFooter';
import {FooterSection} from './aceuile/Component/FooterSection';
export default function Home() {
  return (
    ///*Header section Component*/
     <section>
    <HeaderSection />
    <CompteProject/>
    <ExperienceSection />
    {/*Service Section Component*/}
    <ServiceSection />
    {/*Project Section Component*/}
    <ProjectSection />
    <AvFooterSection/>
    <FooterSection />
   </section>
  );
}
