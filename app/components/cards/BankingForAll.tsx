import React from 'react';
import Image from 'next/image';

export default function BankingForAll() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-24 mt-10 bg-[#4B3922] text-white relative">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image src={"/images/pattern-brown.png"} alt="Background Pattern" className="w-full h-full object-cover" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:w-full text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              International <br />Banking for <br />All
            </h1>
            <p className="text-xl mb-8">
              Get a USD, EUR and GBP account in your name to receive or send money globally.
            </p>

            <div className="flex flex-row gap-6 justify-start">
              <button className="bg-[#AA8F6B] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#8e765b] transition duration-300">
                Download App
              </button>
              <button className="border-white border-1 text-white py-3 px-8 rounded-lg text-lg font-semibold">
                Contact Us
              </button>
            </div>

          </div>

          <div className="flex justify-center h-full lg:justify-end">
            <Image
              src={"/images/nectarfi-people.jpg"}
              alt="People interacting with Nectarfi app"
              className="w-full max-w-lg h-auto rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
