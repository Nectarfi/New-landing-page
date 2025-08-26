import React from 'react';
import Image from 'next/image';

export default function WhoIsNectarfiFor() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 my-10 bg-[#FFFAF3] text-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Who is <span className="text-[#BB8F54]">Nectarfi</span> for?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-[#E0F0E8] rounded-2xl px-6 py-3 shadow-md">
              <h3 className="text-lg font-semibold mb-2">People who wants Dollars</h3>
              <p className="text-sm leading-relaxed">
                Avoid Inflation and bad FX rates, use Stablecoins to Access US dollars and send them to anyone with Nectarfi for free
              </p>
            </div>

            <div className="bg-[#E0F8FF] rounded-2xl px-6 py-3 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Remote workers and freelancers</h3>
              <p className="text-sm leading-relaxed">
                Get paid like you live in San Francisco or Paris share your USD or EUR virtual Accounts details with international clients. Get paid in digital dollars and then withdraw to your local bank account at the best rates or keep to earn yield.
              </p>
            </div>

            <div className="bg-[#F5E0FF] rounded-2xl px-6 py-3 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Web 3 Builder and Crypto earners</h3>
              <p className="text-sm leading-relaxed">
                Offramp from crypto to cash across 80+ countries globally. If you earn in USDC, Nectarfi let's you cash out fast. No seed phrase, gas fees or exchanges
              </p>
            </div>

            <div className="bg-white rounded-2xl px-6 py-3 shadow-md">
              <h3 className="text-lg font-semibold mb-2">REMITTANCE</h3>
              <p className="text-sm leading-relaxed">
                Send money home instantly, without the hassle. Invite your friends and family to Nectarfi and pay them instantly and for free singing stablecoins, knowing they can access their cash in local currency whenever they want.
              </p>
            </div>
          </div>

          <div className="flex justify-center h-full lg:justify-end">
            <img
              src="/images/nectarfi-people.jpg"
              alt="People interacting with Nectarfi app"
              className="w-full max-w-lg h-auto rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
