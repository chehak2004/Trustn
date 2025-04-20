import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaPause, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  useEffect(() => {
    // Optional: Animation trigger
  }, [playStatus]);

  const handlePrev = () => {
    setHeroCount((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setHeroCount((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center text-white px-4">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-70 transition"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-70 transition"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dot navigation */}
      <ul className="absolute bottom-10 left-4 flex gap-3">
        {[0, 1, 2].map((i) => (
          <li
            key={i}
            onClick={() => setHeroCount(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${heroCount === i ? 'bg-black' : 'bg-white'}`}
          ></li>
        ))}
      </ul>

      {/* Play / Pause Control */}
      <div className="absolute bottom-10 right-80 flex flex-col items-center gap-2">
        <button
          onClick={() => setPlayStatus(!playStatus)}
          className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
        >
          {playStatus ? <FaPause className="text-purple-700" /> : <FaPlay className="text-purple-700" />}
        </button>
        <p className="text-white text-sm">See the video</p>
      </div>

      {/* Read More Button */}
      <Link
        to="/readmore"
        className="absolute bottom-20 left-6 px-5 py-2 rounded-md text-sm bg-purple-700 hover:bg-purple-800 transition-colors"
      >
        Read More
      </Link>
    </div>
  );
};

export default Hero;
