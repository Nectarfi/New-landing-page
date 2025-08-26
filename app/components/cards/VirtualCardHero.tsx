import Image from "next/image";

export default function VirtualCardHero() {
  return (
    <div className="text-gray-700 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="lg:w-1/2 text-center lg:text-left scroll-animate-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
            Get a Virtual USD Card in your name
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            Use your card on global platforms like Netflix, Spotify, Amazon, Google Ads, AWS, and more.
          </p>
          <button className="bg-[#AA8F6B] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#8e765b] hover:scale-105 transition-all duration-300">
            Download App
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center scroll-animate-right">
          <div className="w-full max-w-md lg:max-w-lg flex items-center justify-center hover:scale-105 transition-transform duration-500">
            <Image src={"/images/Buttons.png"} alt="" width={500} height={300} className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
