import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarFunc } from './Components/NavbarPage/NavbarPage';
import { HeaderPage } from './Components/HeaderPage/HeaderPage';
import { Section1 } from './Components/Section1/Section1';
import { SectionPage2 } from './Components/Section2/Section2';
import { Section3 } from './Components/Section3/Section3';
import { Section4 } from './Components/Section4/Section4';
import { FooterPage } from './Components/FooterPage/FooterPage';


function App() {
  return (
    <>
      <div className='hedr'>
        <NavbarFunc/>
        <HeaderPage/>
      </div>
      <Section1/>
      <SectionPage2/>
      <Section3/>
      <Section4/>
      <FooterPage/>
    </>
  );
}

export default App;
