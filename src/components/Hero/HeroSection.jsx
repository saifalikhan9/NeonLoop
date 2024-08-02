
import HeroLogo from "../../assets/Images/HeroLogo.jpg";
import Features from '../Features/Features'


const Hero = () => {


  return (
    <>
    
    <div className="relative w-full  bg-black">
    
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-10">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 style={{fontFamily: 'Vibes'}} className="mt-8 text-center lg:text-left text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-yellow-400">
              <span style={{fontFamily: 'Meow Script'}} className=" mr-5 text-shadow-neon text-black " >Neon</span > Loop
              
            </h1>
            <h2 className=" w-full  font-twister  mt-3 font-extrabold text-center lg:text-left md:text-lg lg:text-3xl  text-pink-500 text-glow " >Creative style</h2>
            <p className="mt-8 text-center lg:text-left text-base md:text-lg lg:text-xl  text-gray-300">
              Experience world-class craftsmanship with LED neon signs that brighten up your space and match your aesthetic.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 rounded-lg overflow-hidden box-shadow-neon-blue">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:h-[500px] lg:object-center min-w-2.5 "
              src={HeroLogo}
              alt="Neon Lights Brand"
            />
          </div>
        </div>
      </div>
    </div>
    <Features/>
    </>
  );
};

export default Hero;
