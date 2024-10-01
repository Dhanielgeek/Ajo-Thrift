import vector from "../assets/Vector 3.png";
import googleplay from "../assets/googleplay.png";
import apple from "../assets/apple.png";
import illustration from "../assets/illustration.svg";

const Hero = () => {
  return (
    <div data-aos="fade-up" className="bg-[#77DD77]  w-full lg:h-[55rem]">
      <div className="lg:px-24 px-10 py-10 text-[#0D290A] flex flex-col items-start text-center lg:block lg:text-left">
        <div className=" lg:w-1/3 w-full ">
          <h2 className=" font-bold text-[2rem] lg:text-[3rem] tracking-wide md:text-[3rem]">
            Transparent and
          </h2>

          <div className="relative">
            <p className=" font-bold text-[2rem] lg:text-[3rem] tracking-wide md:text-[3rem] ">
              secure thrifts
            </p>
            <img
              src={vector}
              alt="vector"
              className="w-[18%] lg:-mt-4 -mt-2 absolute right-[33%] lg:right-[55%] md:w-[15%] md:right-[36%]"
            />
          </div>
        </div>
        <p className="lg:ml-[0.27rem] font-semibold self-center mt-3 lg:mt-1  md:mt-5 md:text-[20px]">
          Ajo, the new school way
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 lg:justify-start lg:pl-24 ">
        <button className="bg-black flex gap-2 items-center text-white justify-center rounded-lg cursor-pointer p-2 w-[150px] h-[3rem]">
          <img src={googleplay} alt="googleplay logo" className="w-5" />
          <p className="text-white text-sm font-bold">Get it on Google Play</p>
        </button>
        <button className="bg-black cursor-pointer flex items-center justify-center text-white rounded-lg p-2 w-[150px] h-[3rem]">
          <img src={apple} alt="apple logo" className="w-10" />
          <p className="text-white text-sm font-bold">Get it on App Store</p>
        </button>
      </div>
      <div
        data-aos="fade-up"
        className="flex justify-end  relative lg:bottom-[20rem] lg:right-16"
      >
        <img src={illustration} alt="cash" className="w-[50%] lg:w-[50%]" />
      </div>
    </div>
  );
};

export default Hero;
