import React from 'react';
import Image from 'next/image';

export default function WhyNectarfi() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-white text-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold">Why Nectarfi?</h2>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 w-full items-stretch">
          <div className="w-full flex flex-col scroll-animate-left">
            <div className="flex flex-col w-full gap-4 sm:gap-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="bg-[#FFFDD0] rounded-2xl p-4 sm:p-6 shadow-md flex flex-col hover:scale-105 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Earn Daily on Digital Dollars</h3>
                    <p className="text-sm leading-relaxed">
                      Save in USD* to protect your money from depreciation. Get a competitive yield every day without any fees, minimums, or lock-ups. Your money continues to grow and is always available to you.
                    </p>
                  </div>

                  <div className="bg-[#F5F5DC] rounded-2xl p-4 sm:p-6 shadow-md relative overflow-hidden flex flex-col hover:scale-105 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Move Money with Ease</h3>
                    <p className="text-sm leading-relaxed mb-4 pr-8">
                      Enjoy same-day settlements and instant access to your funds. Withdraw your savings directly to your local bank account or mobile money whenever you need it.
                    </p>
                    <div className="absolute -bottom-4 -right-4 scale-50 sm:scale-75">
                      <Image src={"/images/bolt-nectar.png"} alt="Lightning Icon" width={128} height={128} className="w-32 h-32" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFE0F0] rounded-2xl p-4 sm:p-6 shadow-md relative overflow-hidden sm:row-span-2 flex flex-col hover:scale-105 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Your Own USD & EUR Accounts</h3>
                  <p className="text-sm leading-relaxed mb-4 pr-8">
                    Open a free international bank account in minutes. Receive payments from anyone, anywhere via ACH, Wire, or SEPA, just like a local. No monthly charges, ever.
                  </p>
                  <div className="absolute bottom-2 right-1 flex items-end scale-50 sm:scale-75">
                    <Image src={"/images/wallet.png"} alt="Wallet Icon" width={150} height={150} className="w-auto h-[150px]" />
                  </div>
                </div>
              </div>

              <div className="bg-[#E0FFFF] w-full rounded-2xl flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 p-4 sm:p-6 shadow-md relative overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300">
                <p className="text-lg sm:text-xl lg:text-2xl text-center sm:text-left self-center leading-relaxed">
                  You can also withdraw funds directly to local banks & mobile money.
                </p>
                <div className="flex-shrink-0 flex justify-center sm:justify-end">
                  <Image src={"/images/100-countries.png"} alt="Flag EU" width={200} height={100} className="w-full max-w-[200px] h-auto" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: 40% width on large screens, full width on small screens */}
          <div className="flex w-full h-full items-center justify-center lg:justify-end scroll-animate-right">
            <Image
              src={"/images/why-nectarfi.png"}
              alt="Nectarfi App Screenshot"
              width={400}
              height={500}
              className="w-full max-w-sm h-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
