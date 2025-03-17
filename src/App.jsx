import "./App.css";
import Button from "./components/button/Button";
import NavBar from "./components/navbar/NavBar";
import HeroSection from "./components/hero-section/HeroSection";
import TopAlbums from "./components/topAlbums/TopAlbums";

// import CustomCard from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <TopAlbums />
    </div>
  );
}

export default App;
