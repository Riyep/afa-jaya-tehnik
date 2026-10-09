"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppBubble from "../components/WhatsAppBubble";
import WindParticles from "../components/WindParticles";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children"
    );
    elements.forEach((el) => observer.observe(el));

    // Intercept any anchor click targeting # to keep URL clean without /#
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const id = href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }
    };

    // Clean initial hash if present
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    document.addEventListener("click", handleAnchorClick);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <main className="relative">
      <WindParticles />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}
