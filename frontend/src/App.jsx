import { useState } from "react";

import "./App.css";
import Hero from "./pages/Hero";
import Info from "./pages/Info";
import Ticket_part from "./pages/Ticket_part";

function App() {
  return (
    <>
      <Hero />
      <Info />
      <Ticket_part />
    </>
  );
}

export default App;
