import React from "react";
import HeroSection from "../components/hero-section/HeroSection";
import Albums from "../components/albums/Albums";
import Search from "../components/search/Search";
import Songs from "../components/songs/Songs";
import Faq from "../components/faq/Faq";

const Home = () => {
  return (
    <>
      <Search placeHolder={"Search a song of your choice"} type={"mobile"} />
      <HeroSection />
      <Albums />
      <Songs />
      <Faq />
    </>
  );
};

export default Home;
