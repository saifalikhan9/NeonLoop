import React   from 'react'
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

const featureItems = [
  { icon: <ShieldCheck />, text: "Two year warranty" },
  { icon: <Truck />, text: "Free + Fast shipping" },
  { icon: <WorkspacePremiumOutlinedIcon fontSize="large" />, text: "Premium quality" },
  { icon: <BatteryCharging />, text: "Power-efficient" },
  { icon: <HandHeart />, text: "World-Class Craftsmanship" },
  { icon: <PencilLine />, text: "Easy Customizations" },
  { icon: <Users />, text: "100% customer satisfaction rate" },
  { icon: <EngineeringOutlinedIcon fontSize="large" />, text: "2 Min Installation" },
];

const FeatureItem = ({ icon, text }) => (
  <div className="flex flex-col items-center">
    <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full box-shadow-neon text-shadow-neon bg-black">
      {React.cloneElement(icon, { className: "h-8 w-8 text-white" })}
    </div>
    <h3 className="mt-4 text-center text-sm sm:text-base lg:text-lg font-semibold text-white">
      {text}
    </h3>
  </div>
);

const Features = () => {
  return (
    <div className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-Neoneon text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-yellow-400">
            <span className="text-purple-600 font-Brittany">Why</span> Neon attack?
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12">
          {featureItems.map((item, index) => (
            <FeatureItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;