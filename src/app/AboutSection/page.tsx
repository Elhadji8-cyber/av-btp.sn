import {HeaderImage} from './component/HeaderImage'
import {MainNavbarSection} from '../aceuile/Component/mainNavbar';
import {FooterSection} from '../aceuile/Component/FooterSection'
import {TransitionSection} from './component/TransitionSection'
import {DemarrageSection} from './component/DemmarageSection'
export default function App(){
    return(
        <>
        <MainNavbarSection/>
        <HeaderImage/>
        <TransitionSection/>
        <DemarrageSection/>
        <FooterSection/>
        </>
    )
}