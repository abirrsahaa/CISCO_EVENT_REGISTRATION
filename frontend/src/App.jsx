import { useState } from "react";

import "./App.css";
import Hero from "./pages/Hero";
import Info from "./pages/Info";
import Ticket_part from "./pages/Ticket_part";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

function App() {
  return (
    <main className="w-[100vw]  overflow-hidden overflow-x-hidden  bg-gradient-to-b  from-[#09131D] to-[#121E2C] ">
      <Navbar />
      {/* <Hero /> */}
      {/* <Info /> */}
      <Ticket_part />
      <Footer />
    </main>
  );
}

export default App;
