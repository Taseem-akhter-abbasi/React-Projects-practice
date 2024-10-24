import Header from './Header.jsx'
import { Footer } from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Student from './Student.jsx';
import Renderinglist from './Renderinglist.jsx';
import Counter from './Counter.jsx';
import Textinput from './Textinput.jsx';
import RENDER from './RENDER.jsx';

function App() {
 return(
  <>
  <Header/>
  <RENDER/>
  <Footer/>
  <Food/>
  <Card/>
  <Card/>
  <Card/>
  <Student name = "taseem" age ="23" istudent = "true"/>
  <Student name = "Maamoon" age ="23" istudent = "true"/>
  <Student name = "MUQADDIS" age ="23" istudent = "true"/>
  <Student name = "ABDAL" age ="23" istudent = "true"/>

  <Renderinglist/>
  <Counter/>
  <Textinput/>

  </>
 );
}

export default App
