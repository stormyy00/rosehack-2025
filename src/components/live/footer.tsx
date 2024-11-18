import Image from "next/image";
import Clouds from "@/public/assets/Clouds.svg";
import Hills from "@/public/assets/hill.svg";
import LOGO from "@/public/assets/RoseHackLogo.svg";
import Windmill1 from "@/public/assets/farWindmill.svg";
import Windmill2 from "@/public/assets/middleWindmill.svg";
import Windmill3 from "@/public/assets/closeWindMill.svg";
import { Instagram } from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-rosehack-100 relative mt-[20vh] flex h-full flex-col items-center justify-end md:h-screen">
      <div className="relative w-full">
        <Image
          src={Clouds}
          alt="clouds"
          className="absolute top-[-60%] -z-10 h-full w-full bg-rosehack-blue-100"
        />

        <Image
          src={Windmill3}
          alt="hills"
          className="absolute right-[15%] top-[-60%] -z-10 h-4/5 w-full"
        />
        <Image
          src={Windmill2}
          alt="hills"
          className="w-fulll absolute right-[15%] top-[-50%] -z-10 h-4/5 md:right-[37%]"
        />
        <Image
          src={Windmill1}
          alt="hills"
          className="absolute left-[30%] top-[-40%] -z-10 h-1/2 w-full"
        />

        <Image src={Hills} alt="hills" className="h-full w-full" />
      </div>
      <div className="absolute my-1 flex w-full items-end justify-between px-2 md:my-4 md:items-center md:px-10">
        <div className="flex">
          <Image
            src={LOGO}
            alt="RoseHack Logo"
            className="h-1/5 w-1/5 md:h-full md:w-full"
          />
          <div className="flex flex-col justify-center text-white">
            <p className="font-netron text-base md:text-3xl">ROSEHACK 2025</p>
            <p className="whitespace-nowrap text-xs md:text-xl">
              {" "}
              Made with 💜 by the RoseHack team at UCR
            </p>
          </div>
        </div>
        <div className="flex h-full flex-col gap-2 text-white md:flex-row md:gap-4">
          <Instagram className="md:h-14 md:w-14" />
          <Instagram className="md:h-14 md:w-14" />
          <Instagram className="md:h-14 md:w-14" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
