import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Approach from "./Approach";
import Features from "./Features";
import Hero from "./Hero";
import Highlights from "./Highlights";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Hero />
      <Highlights />
      <Features />
      <Approach />
    </div>
  );
};

export default Home;
