import HeroLogo from "../../assets/Images/HeroLogo.jpg";
import Features from '../Features/Features';

const Hero = () => {
  return (
    <>
      <div className="bg-black py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="font-GreatVibes text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-yellow-400">
                <span className="font-MeowScript mr-2 text-shadow-neon text-black">Neon</span>
                Loop
              </h1>
              <h2 className="font-serif mt-3 font-extrabold text-2xl sm:text-3xl lg:text-4xl text-pink-500 text-glow">
                Creative style
              </h2>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                Experience world-class craftsmanship with LED neon signs that brighten up your space and match your aesthetic.
              </p>
            </div>
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden box-shadow-neon-blue">
              <img
                className="w-full h-64 sm:h-80 lg:h-[500px] object-cover object-center"
                src={HeroLogo}
                alt="Neon Lights Brand"
              />
            </div>
          </div>
        </div>
      </div>
      <Features />
    </>
  );
};

export default Hero;