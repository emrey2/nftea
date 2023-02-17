import React from "react";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Mailbox from "./components/Mailbox";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Roadmap />
      <Mailbox />
      <Footer />
    </div>
  );
}

export default App;
