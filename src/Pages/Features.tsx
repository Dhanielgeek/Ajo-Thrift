import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import contributionPage from "../assets/display.svg";

const Features = () => {
  const features = [
    "Create and join thrifts with ease.",
    "See contributions in realtime.",
    "Never worry about the safety of your funds.",
    "Manage your contributions seamlessly on the app and web.",
  ];

  return (
    <div className="bg-[#4B3737]  h-[28rem] -mb-2 flex items center  gap-[20rem] justify-between lg:p-24 p-10 ">
      <div>
        <h1 className="text-white text-[26px] font-bold">
          Do thrifts with ease
        </h1>
        <div className=" w-[55px] h-[3px] bg-white mb-5"></div>
        {features.map((feature, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="flex gap-3 mb-3 items-center"
          >
            <div className="border border-[#786577] rounded-md p-1 text-[#786577]">
              <FiCheck className="text-sm" />
            </div>
            <p className="text-white text-sm lg:text-[15px]">{feature}</p>
          </div>
        ))}

        <button
          data-aos="fade-up"
          className="bg-[#c3b1e1] mt-6 p-2 w-[100px] rounded-md transition-all duration-500 hover:bg-purple-200"
        >
          <Link to="reg">Get started</Link>
        </button>
      </div>

      <div className="lg:flex hidden items-center">
        <img
          src={contributionPage}
          alt="contribution page"
          className=" object-cover w-[300px] h-[300px] "
        />
      </div>
    </div>
  );
};

export default Features;
