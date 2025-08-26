import React from 'react';
import Image from 'next/image';

export default function SafeSecureOwned() {
  return (
    <div className="w-full py-10">
      <section className="relative bg-[#2D2214] px-4 sm:px-6 lg:px-8 py-10 w-full text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image src={"/images/pattern-brown.png"} alt="Background Pattern" width={1920} height={1080} className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-4xl font-bold mb-2">
            Safe, secure and owned by you
          </h2>
          <p className="text-base lg:text-lg mb-4">
            You have complete ownership of the money held in your wallet
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <button className="bg-[#BB8F54] text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-[#A37B3E] transition-colors duration-300 shadow-lg">
              Download App
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white hover:text-[#BB8F54] transition-colors duration-300 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>

      </section>

      <div className="text-center text-gray-800 max-w-2xl mx-auto pt-8">
          <p className="text-base lg:text-lg">
            Nectarfi is not a bank but a financial technology company.
            <br />
            We provide banking like services through our licenced partners
          </p>
        </div>

    </div>
  );
}
