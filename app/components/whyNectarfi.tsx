import React from 'react';

export default function WhyNectarfi() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-white text-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Why Nectarfi?</h2>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 w-full min-h-[600px] lg:min-h-[600px] items-stretch">
          <div className="w-full h-full flex flex-col">
            <div className="flex flex-col w-full gap-6 flex-1">

              <div className="grid grid-cols-2 gap-6 flex-1 h-full">
                <div className="flex flex-col justify-between gap-6 h-full">
                  <div className="bg-[#FFFDD0] rounded-2xl p-6 shadow-md h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-4">Earn Daily on Digital Dollars</h3>
                    <p className="text-sm leading-relaxed flex-1">
                      Save in USD* to protect your <br />money from depreciation. Get a <br />competitive yield every day <br />without any fees, minimums, or <br />lock-ups. Your money continues to <br />grow and is always available to you.
                    </p>
                  </div>

                  <div className="bg-[#F5F5DC] rounded-2xl p-6 shadow-md relative overflow-hidden h-full flex flex-col">
                    <h3 className="text-xl font-bold mb-4">Move Money with Ease</h3>
                    <p className="text-sm leading-relaxed mb-4 flex-1">
                      Enjoy same-day settlements
                      <br />
                      and instant access to your <br />funds. Withdraw your savings <br />directly to your local bank <br />account or mobile money <br />whenever you need it.
                    </p>
                    <div className="absolute -bottom-4 -right-4" style={{ transform: 'scale(0.6)' }}>
                      <img src="/images/bolt-nectar.png" alt="Lightning Icon" className="w-32 h-32" />
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFE0F0] rounded-2xl p-6 shadow-md relative overflow-hidden row-span-2 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4">Your Own USD & EUR Accounts</h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1">
                    Open a free international bank account in minutes. Receive payments from anyone, anywhere via ACH, Wire, or SEPA, just like a local. No monthly charges, ever.
                  </p>
                  <div className="absolute bottom-2 right-1 flex items-end" style={{ transform: 'scale(0.8)' }}>
                    <img src="/images/wallet.png" alt="Wallet Icon" className="w-auto h-[150px]" />
                  </div>
                </div>
              </div>

              <div className="bg-[#E0FFFF] w-full rounded-2xl flex flex-row justify-between gap-8 p-6 shadow-md relative overflow-hidden">
                <p className="text-[24px] text-center self-center leading-relaxed mb-4">
                  You can also withdraw <br />funds directly to local <br />banks & mobile money.
                </p>
                <div className="w-[35%] gap-2 mb-3 flex justify-end">
                  <img src="/images/100-countries.png" alt="Flag EU" className="self-end right-0" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: 40% width on large screens, full width on small screens */}
          <div className="flex w-full h-full items-center justify-center lg:justify-end">
            <img
              src="/images/why-nectarfi.png"
              alt="Nectarfi App Screenshot"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
