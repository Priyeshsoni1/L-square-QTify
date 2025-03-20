import "./App.css";

import NavBar from "./components/navbar/NavBar";

import { Outlet } from "react-router-dom";

// import CustomCard from "./components/card/Card";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
