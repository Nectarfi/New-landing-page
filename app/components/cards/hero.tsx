import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-[#3A3A3A] mb-8 rounded-3xl flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/background-pattern.png" alt="Background Pattern" className="w-full h-full object-cover opacity-30 overflow-hidden" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                A functional card. <br /> For any moment.
              </h1>

              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-2xl">
                Instantly create a virtual USD card. Shop online, pay for subscriptions, and make payment overseas without restrictions, hold-ups, or additional costs.
              </p>
            </div>

            <button className="bg-[#BB8F54] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg">
              Join Waitlist
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/images/cards-nectar.png"
                alt="Nectar Cards"
                className="lg:w-[500px] h-auto md:w-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
