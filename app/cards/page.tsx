'use client';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Hero from "../components/cards/hero"
import VirtualCardHero from "../components/cards/VirtualCardHero";
import HowToGetCard from "../components/cards/HowToGetCard";
import BankingForAll from "../components/cards/BankingForAll";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Cards() {
  useScrollAnimation();

  return (
    <div className="w-full bg-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <NavBar />
      </div>
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <VirtualCardHero />
      <HowToGetCard />
      <BankingForAll />
      <Footer />
    </div>
  )
}