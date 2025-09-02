import Image from "next/image";

export default function HowToGetCard() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-16">
          How to get a Virtual USD Card
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className=" w-[300px] h-[200px] rounded-lg flex items-center justify-center mb-6">
              <Image src={"/images/card-1.png"} alt="Step One" width={300} height={200} />
            </div>
            <span className="text-2xl font-semibold mb-4">1</span>
            <h3 className="text-xl font-bold mb-2">Create a free account</h3>
            <p className="text-gray-600 px-4">
              Receive USD & EUR payments from clients globally via ACH, Wire, SEPA & SWIFT transfers.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className=" w-[300px] h-[200px] rounded-lg flex items-center justify-center mb-6">
              <Image src={"/images/card-2.png"} alt="Step Two" width={300} height={200} />
            </div>
            <span className="text-2xl font-semibold mb-4">2</span>
            <h3 className="text-xl font-bold mb-2">Verify your identity and request a card</h3>
            <p className="text-gray-600 px-4">
              We offer the simplest and most affordable option to convert USD to USDC Stablecoin for your business.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className=" w-[300px] h-[200px] rounded-lg flex items-center justify-center mb-6">
              <Image src={"/images/card-3.png"} alt="" width={300} height={200} />
            </div>
            <span className="text-2xl font-semibold mb-4">3</span>
            <h3 className="text-xl font-bold mb-2">Your card is ready! Start spending</h3>
            <p className="text-gray-600 px-4">
              Make payment globally without stress.
            </p>
          </div>
        </div>
        <button className="mt-20 bg-[#AA8F6B] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#8e765b] transition duration-300">
          Coming soon
        </button>
      </div>
    </div>
  );
}
