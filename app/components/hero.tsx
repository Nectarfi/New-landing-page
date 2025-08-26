import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-[#F5F5DC] rounded-3xl flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 scroll-animate-left">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Receive, Save and Spend USD Globally powered by{' '}
                <span className="text-[#D4AF37]">stablecoins</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                Get a USD and EUR account with your name to receive or send money globally. Sign up for free, in a tap.
              </p>
            </div>

            <button className="bg-gray-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg">
              Download App
            </button>
          </div>

          <div className="flex justify-center lg:justify-end scroll-animate-right">
            <div className="relative hover:scale-105 transition-transform duration-500">
              <Image
                src={"/images/hero-image.png"}
                alt="Hero Phone"
                width={500}
                height={600}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
