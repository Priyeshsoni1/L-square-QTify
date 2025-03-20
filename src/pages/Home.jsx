import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import Albums from "../components/albums/Albums";
import Search from "../components/search/Search";


const Home = () => {
  return (
    <>
      <Search placeHolder={"Search a song of your choice"} type={"mobile"}/>
      <HeroSection/>
      <Albums/>
      
    </>
  );
};

export default Home;
