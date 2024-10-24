// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Components/Home"
import Hero from "./Components/Hero"
import Aboutme from "./Components/Aboutme"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/', // Corrected missing comma
  //     element: <Home /> // Specify the component for home page
  //   },
  //   {
  //     path: '/about', // Route for about page
  //     element: <Aboutme />
  //   },
  //   {
  //     path: '/services', // Corrected route spelling
  //     element: <Services />
  //   },
  //   {
  //     path: '/contact',
  //     element: <Contact />
  //   },
  //   {
  //     path: '/projects', // Corrected route name
  //     element: <Projects />
  //   },
  //   {
  //     path: '/footer',
  //     element: <Footer/>
  //   }
  // ]);

  return (
    <>
      <Home/>
      <Hero />
      <Aboutme/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
