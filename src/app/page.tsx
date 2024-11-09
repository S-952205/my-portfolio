"use client"

import About from "@/components/About";
import Contact from "@/components/contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 50,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh()
  }, [])
  return (
    <div>
      <main>
        <Hero />
        <Skills/>
        <Contact/>
        <About/>
      </main>
    </div>
  );
}
