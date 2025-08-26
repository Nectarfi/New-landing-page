import Image from "next/image";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import WhyNectarfi from "./components/whyNectarfi";
import MoneyWithoutBorders from "./components/moneyWithoutBorders";
import WhoIsNectarfiFor from "./components/whoIsNectarfiFor";
import SafeSecureOwned from "./components/safeSecureOwned";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <NavBar />
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
