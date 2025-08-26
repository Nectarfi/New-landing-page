
export default function VirtualCardHero() {
  return (
    <div className="text-gray-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Get a Virtual USD Card <br /> in your name
          </h1>
          <p className="text-xl mb-8">
            Use your card on global platforms like Netflix, Spotify, Amazon, Google Ads, AWS, and more.
          </p>
          <button className="bg-[#AA8F6B] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#8e765b] transition duration-300">
            Download App
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-[500px] h-[300px] flex items-center justify-center">
            <img src="/images/Buttons.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
