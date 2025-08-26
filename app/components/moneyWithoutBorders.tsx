import React from 'react';
import Image from 'next/image';

export default function MoneyWithoutBorders() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 py-10 bg-black rounded-3xl text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={"/images/background-pattern.png"} alt="Background Pattern" width={1920} height={1080} className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between w-full gap-12 items-center">
          <div className="space-y-8 lg:w-[35%]">
            <h2 className="text-4xl lg:text-4xl font-bold leading-tight">
              Your Money,
              <br />
              Without
              <span className="font-bold text-[#BB8F54]"> Borders</span>
            </h2>
            <p className="text-base lg:text-base leading-relaxed max-w-xl">
              Get ready for the only virtual card you&#39;ll ever need. Spend seamlessly at home and abroad, funded directly from your NectarFi savings. Coming soon.
            </p>
            <button
              onClick={() => window.location.href = '/cards'}
              className="bg-white text-gray-800 px-8 py-4 rounded-2xl text-sm font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg"
            >
              Learn more
            </button>
          </div>

          <div className="flex justify-center w-[35%] lg:justify-end">
            <Image
              src={"/images/cell-phone-and-credit-card.png"}
              alt="NectarFi App on Phone"
              width={400}
              height={500}
              className="z-20 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
