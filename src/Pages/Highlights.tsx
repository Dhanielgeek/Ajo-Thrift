import showcase from "../assets/showcase.svg";
import { FaArrowDown } from "react-icons/fa6";
import googleplay from "../assets/googleplay.png";
import apple from "../assets/apple.png";
import { Link } from "react-router-dom";
import seperator from "../assets/seperator.svg";

const Highlights = () => {
  const showcaseItems = [
    {
      title: "Join or create a pool",
      description: "Easily create your own ajo or join one from the comunity.",
      icon: <FaArrowDown className="text-[#292D32]" />,
    },
    {
      title: "Transparent transactions",
      description:
        "Get direct access to your savings. Be confident that your funds are secure.",
      icon: <FaArrowDown className="text-[#292D32]" />,
    },
    {
      title: "  Automatic payouts",
      description: "Get your pay immediately. No stories, no worries",
    },
  ];

  return (
    <>
      <img src={seperator} alt="seperator" className="-mt-2 w-full " />

      <div>
        <div
          className="bg-white rounded-b-[2rem] flex gap-8 md:gap-[14rem] 
            items-start pt-[4rem] md:pt-[6rem] lg:mt-0 lg:items-center lg:justify-start justify-center lg:gap-[25rem] lg:p-10 md:h-[650px]  "
        >
          <img
            data-aos="fade-left"
            src={showcase}
            alt="showcase"
            className="w-[50%] lg:w-[30%] max-md:hidden"
          />
          <div className="">
            <div className=" lg:[&>*:nth-child(even)]:translate-x-32 ">
              {showcaseItems.map((item, index) => (
                <div
                  key={index}
                  className="flex lg:text-sm md:mt-8 text-[8px] lg:text-md items-center flex-col lg:mb-8 lg:last:translate-x-64"
                >
                  <div className="bg-[#d9d9d9] border-2 border-black rounded-lg lg:w-[195px] w-[140px] lg:mr-0 mt-2 lg:mt-0 h-[100px] lg:h-[125px]">
                    <h2 className="border-b-2 border-b-black font-extrabold px-4  py-2 text-[#292D32]">
                      {item.title}
                    </h2>
                    <p className="text-left py-2 px-4 font-bold text-xs text-[#292D32] ">
                      {item.description}
                    </p>
                  </div>
                  {item.icon && (
                    <div className=" lg:my-2 border lg:hidden border-[#292D32] rounded-full flex justify-center items-center w-8 h-8 mt-2 lg:mt-0">
                      {item.icon}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex py-4 justify-center items-center gap-4 relative  bottom-2  lg:right-16">
              <div className="bg-[#800080] w-12 h-12 rounded-full cursor-pointer p-2 flex justify-center items-center">
                <img src={apple} alt="apple logo" className="w-full" />
              </div>
              <div className="bg-[#800080] cursor-pointer w-12 h-12 rounded-full p-2 flex justify-center items-center">
                <img
                  src={googleplay}
                  alt="googleplay logo"
                  className="w-[50%]"
                />
              </div>
            </div>
            <Link
              to="/"
              className="text-[#292D32]
              underline relative  bottom-4 left-11 lg:left-4 font-bold"
            >
              Or get started here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;
