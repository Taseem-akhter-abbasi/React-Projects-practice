import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import TrendingGames from "./Components/TrendingGames.jsx";
import RecommendedArticles from "./Components/RecommendedArticles.jsx";
import WhatsNew from "./Components/Whatsnew/Whatsnew.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingGames />
      <RecommendedArticles />
      <WhatsNew />
      <Footer />
    </>
  );
};

export default App;