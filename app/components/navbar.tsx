import React from "react";

export default function NavBar() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center py-5">
      <div className="lg:w-[187px]">
        <img src="/images/nectar-logo-brown.png" alt="" />
      </div>

      <div className="flex items-center gap-3 flex-row  text-base">
        <div className="self-center text-center text-gray-800 font-semibold">
          <p>Contact Us</p>
        </div>

        <div className="self-center text-center text-white bg-[#957343] rounded-xl py-2 px-3">
          <p>Download App</p>
        </div>
      </div>

    </div>
  )
}