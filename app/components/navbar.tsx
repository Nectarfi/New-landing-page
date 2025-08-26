import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center py-5">
      <div className="w-32 sm:w-40 lg:w-[187px]">
        <Link href="/">
          <Image src={"/images/nectar-logo-brown.png"} alt="NectarFi Logo" width={120} height={40} className="w-full h-auto" />
        </Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
        <div className="hidden sm:block text-center text-gray-800 font-semibold">
          <p>Contact Us</p>
        </div>

        <div className="text-center text-white bg-[#957343] rounded-xl py-2 px-3 whitespace-nowrap hover:bg-[#7a5f37] hover:scale-105 transition-all duration-300">
          <p className="text-xs sm:text-sm">Download App</p>
        </div>
      </div>

    </div>
  )
}