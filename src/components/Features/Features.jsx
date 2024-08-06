import {
  ShieldCheck,
  Truck,
  BatteryCharging,
  HandHeart,
  PencilLine,
  Users,
} from "lucide-react";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";

const Features = () => {
  return (
    <>
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
        <div className="mx-auto max-w-xl text-center  ">
          <h2 className="my-6 font-Neoneon text-3xl font-bold leading-tight  text-yellow-400  sm:text-4xl lg:text-6xl">
            <span className="text-purple-600 font-Brittany"> Why </span> Neon attack?
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full box-shadow-neon text-shadow-neon bg-black">
              {/* <DollarSign className="h-9 w-9 text-gray-700" /> */}
              <ShieldCheck color="white" className="h-9 w-9" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white ">
              Two year warranty
            </h3>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full box-shadow-neon bg-black">
              {/* <Zap className="h-9 w-9 text-gray-700" /> */}
              <Truck color="white" className="h-9 w-9"  />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white ">
              Free + Fast shipping{" "}
            </h3>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full box-shadow-neon bg-black">
              <WorkspacePremiumOutlinedIcon
                className="h-50 w-50 text-white "
                fontSize="large"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold  text-white">
              Premium quality
            </h3>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full box-shadow-neon bg-black">
              {/* <Filter className="h-9 w-9 text-gray-700" /> */}
              <BatteryCharging color="white" className="h-9 w-9" />
            </div>
            <h3 className="mt-8 text-lg font-semibold  text-white">
              Power-efficient
            </h3>
          </div>

          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full box-shadow-neon bg-black">
              {/* <DollarSign className="h-9 w-9 text-gray-700" /> */}
              <HandHeart className="h-9 w-9 " color="white" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white ">
              World-Class Craftsmanship
            </h3>
          </div>

          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full box-shadow-neon bg-black">
              {/* <Zap className="h-9 w-9 text-gray-700" /> */}
              <PencilLine className="h-9 w-9 " color="white" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              Easy Customizations
            </h3>
          </div>


          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full box-shadow-neon bg-black">
              <Users className="h-9 w-9 " color="white" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              100% customer satisfaction rate
            </h3>
          </div>

          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full box-shadow-neon bg-black">
              {/* <Filter className="h-9 w-9 text-gray-700" /> */}

              <EngineeringOutlinedIcon
                fontSize="large"
                className=" text-white"
              />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-white">
              2 Min Installation
            </h3>
          </div>
        </div>
      </div>


      
      
    </>
  );
};

export default Features;
