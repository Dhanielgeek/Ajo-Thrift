import { useState } from "react";
import pool from "../assets/ajoo.png";
import secur from "../assets/Money income-bro.svg";
import { Swiper, SwiperSlide } from "swiper/react";

const Welcome = () => {
  const [info] = useState([
    {
      title: "Pool Savings Made Easy",
      text: "Join a pool, contribute with ease, and watch your savings grow. Enjoy the transparency and flexibility Ajo offers.",
      image: pool,
    },
    {
      title: "Secure Contribution",
      text: "Your contributions are protected and recorded in real-time. Track your progress with confidence.",
      image: secur,
    },
    {
      title: "Flexible Pool Management",
      text: "Manage your pools easily, swap slots, and get notified when it’s your turn to collect. No surprises, just savings.",
      image: secur,
    },
  ]);

  return (
    <div className="w-full h-[55rem] flex flex-col gap-1 justify-center items-center">
      {/* Swiper slider acting as a carousel */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-[50%] h-[70%] shadow-md max-md:w-[94%]"
      >
        {/* Each slide acts as a carousel item */}
        <SwiperSlide>
          <div className="w-full h-[80%] flex justify-center items-center">
            <img src={info[0].image} alt={info[0].title} />
          </div>
          <div className="w-full h-[20%] flex justify-center items-center flex-col px-2">
            <h3 className="font-bold">{info[0].title}</h3>
            <p className="text-center">{info[0].text}</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[80%] flex justify-center items-center">
            <img src={info[1].image} alt={info[1].title} />
          </div>
          <div className="w-full h-[20%] flex justify-center items-center flex-col px-2">
            <h3 className="font-bold">{info[1].title}</h3>
            <p className="text-center">{info[1].text}</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[80%] flex justify-center items-center">
            <img src={info[2].image} alt={info[2].title} />
          </div>
          <div className="w-full h-[20%] flex justify-center items-center flex-col px-2">
            <h3 className="font-bold">{info[2].title}</h3>
            <p className="text-center">{info[2].text}</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="w-[50%] h-[15%] max-md:w-[94%] flex flex-col justify-center items-center mt-5">
        <button className="px-7 py-2 bg-purple-400 rounded font-bold text-white">
          Create an Account
        </button>

        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-64 h-1 my-5 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div className="absolute px-4 rounded-sm -translate-x-1/2 bg-white left-1/2">
            <p>OR</p>
          </div>
        </div>
        <p className="font-semibold cursor-pointer">
          Login if already have an account
        </p>
      </div>
    </div>
  );
};

export default Welcome;
