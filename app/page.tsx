"use client";

import NavBar from "./components/navbar";
import Hero from "./components/hero";
import WhyNectarfi from "./components/whyNectarfi";
import MoneyWithoutBorders from "./components/moneyWithoutBorders";
import WhoIsNectarfiFor from "./components/whoIsNectarfiFor";
import SafeSecureOwned from "./components/safeSecureOwned";
import Footer from "./components/footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
        <NavBar />
      </div>
      <div className="px-4 sm:px-6 lg:px-8">
        <Hero />
      </div>
      <WhyNectarfi />
      <div className="px-4 sm:px-6 lg:px-8">
        <MoneyWithoutBorders />
      </div>
      <WhoIsNectarfiFor />
      <SafeSecureOwned />
      <Footer />
    </div>
  );
}
