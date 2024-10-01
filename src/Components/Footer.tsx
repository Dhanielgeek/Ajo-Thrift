import googleplay from "../assets/googleplay.png";
import apple from "../assets/apple.png";

const Footer = () => {
  return (
    <div className="w-full h-[10rem] lg:px-24 px-10 bg-black " id="footer">
      <h1 className="text-white flex justify-end text-[3rem] font-bold">
        Ajo.
      </h1>
      <div className="flex  items-center  justify-between">
        <p className="text-white">&copy; All rights reserved. 2024, Ajó</p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4  lg:pl-24 ">
          <button className=" flex gap-2 items-center text-white justify-center cursor-pointer">
            <img src={googleplay} alt="googleplay logo" className="w-5" />
            <p className="text-white text-sm font-bold">
              Get it on Google Play
            </p>
          </button>
          <button className="cursor-pointer flex items-center justify-center text-white ">
            <img src={apple} alt="apple logo" className="w-10" />
            <p className="text-white text-sm font-bold">Get it on App Store</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
