import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <main className="flex min-h-screen flex-col bg-[#121212] ">
        <Navbar />
        <div className="container mt-24 mx-auto py-4 px-12">
        <div id="HeroSection">
            <HeroSection />
          </div>
<div id="about">
            <About />
          </div>
          <div id="project">
            <Project />
          </div>
          <div id="contact">
            <EmailSection />
          </div>
          {/* <Footer /> */}
        </div>
      </main>
     
     
    </div>
  );
}
