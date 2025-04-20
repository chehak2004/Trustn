import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReadMore = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const cards = [
    {
      title: "Choosing the Right College",
      content:
        "Factors beyond NEET rank, such as faculty expertise, infrastructure quality, hospital tie-ups, clinical exposure, internship opportunities, and patient inflow, should be carefully considered.",
    },
    {
      title: "Information Gap",
      content:
        "Finding the right and reliable information on Google or YouTube medical admission counselling can be highly frustrating and stressful for students and parents. Many students end up with outdated or incorrect information.",
    },
    {
      title: "Deemed Universities",
      content:
        "Admission process, eligibility criteria, counselling procedure, and detailed fee structure for various deemed medical universities offering MBBS and PG courses.",
    },
    {
      title: "Guidance Gap",
      content:
        "Medical admission guidance lacks ethical and professional counsellors. Many fake consultants exploit students financially, making it difficult to find genuine and professional guidance.",
    },
  ];

  return (
    <div className="flex flex-col items-center px-5 py-10">
      <div className="max-w-[1200px] w-full text-center">
        {/* MBBS Section */}
        <div className="bg-[rgba(128,0,128,0.7)] text-white p-5 rounded-[10px] mb-5 text-center">
          <h1 className="text-[24px] mb-5">MBBS</h1>
          <p className="text-[16px] leading-[1.5] text-left">
            Are you aspiring to get admission to the best medical college in India? At Trustn,
            we understand the challenges and intricacies of the NEET medical admissions process.
            Whether you're aiming for NEET Undergraduate (UG) or NEET Postgraduate (PG) medical admissions,
            our expert counseling services are designed to be your guiding light.
          </p>
        </div>

        {/* Why Trustn Section */}
        <div className="bg-[rgba(128,0,128,0.7)] text-white p-5 rounded-[10px] mb-5 text-center">
          <h2 className="text-[24px] mb-5">Why Trustn</h2>
          <p className="text-[16px] leading-[1.5] text-left">
            In India, managing medical admission counselling is highly complex and stressful because of inherent challenges associated with the process.
            A student may fail to optimize the outcome of NEET UG, NEET PG counselling process if they don’t understand and manage the following challenges.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-5 items-center justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "ml-[260px]" : "" // Increased margin for first column cards
              } w-[220px] sm:w-[250px] lg:w-[270px] bg-white p-[15px] rounded-[10px] text-center transition-all duration-300 shadow-[0px_15px_50px_rgba(128,0,128,1)] overflow-hidden flex flex-col justify-between ${
                openCard === index ? "min-h-[220px]" : "h-[150px]"
              }`}
            >
              <h3 className="text-[18px] text-[#333] mb-2 text-center">{card.title}</h3> {/* Centered heading */}
              <button
                onClick={() => toggleCard(index)}
                className="w-[100px] mx-auto py-[8px] px-[12px] bg-[#800080] text-white text-sm rounded-[5px] hover:bg-[#5e005e] transition"
              >
                {openCard === index ? "Close" : "Open"}
              </button>
              {openCard === index && (
                <p className="text-[14px] text-left text-[#555] mt-2 animate-fadeIn">
                  {card.content}
                </p>
              )}
            </div>
          ))}
        </div>

        <Link
          to="/"
          className="inline-block mt-[30px] px-[20px] py-[10px] bg-[#800080] text-white rounded-[5px] hover:bg-[#5e005e] transition"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ReadMore;
