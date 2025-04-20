import { useState, useEffect } from "react";
import Background from "../../Components/Background/Background";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";

const Home = () => {
  const heroData = [
    { text1: "Students celebrating after NEET results" }, // ✅ Only first slide has text
    { text1: "" }, // Empty slide
    { text1: "" }  // Empty slide
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 3000);
  
    return () => clearInterval(interval);
  }, []); // ✅ Empty dependency — runs only once on mount
  
 

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}  // ✅ Pass correct slide data
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      
      
      
    </div>
  );
};

export default Home;
