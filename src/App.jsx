import React, { createContext, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import White from "./components/White";
import PlayReel from "./components/PlayReel";
import Images from "./components/Images";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

export const contextMenu = createContext(null);

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [isOpen, setisOpen] = useState(false);

  return (
    <contextMenu.Provider value={[isOpen, setisOpen]}>
      <div className="w-full min-h-screen overflow-hidden">
        <Menu />
        <Navbar />
        <Home />
        <White />
        <PlayReel />
        <Images />
        <Footer />
      </div>
    </contextMenu.Provider>
  );
}

export default App;
