import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const faqsData = [
  {
    question: "What is the eligibility criteria to participate in State medical admission counselling?",
    answer: "To participate in State medical admission counselling for admission on state quota seats, a student must be domicile/native of that state. There are some states however who allow non- domicile students to participate in their state medical admission counselling for admission in private medical colleges of that state.",
  },
  {
    question: "What is the eligibility criteria to participate in MCC counselling?",
    answer: "MCC medical admission counselling is domicile free. That means, all students who have qualified NEET are eligible to participate in MCC counselling irrespective of their domicile state. NRI students are also eligible to participate in MCC counselling.",
  },
  {
    question: "What is medical admission counselling?",
    answer: "Medical admission counselling is the process of allotting medical college seats to NEET qualified and eligible candidates based on their NEET All India Rank, Domicile and Category. Medical admission counselling is generally an online process involving 3-4 rounds of seat allotment in participating medical colleges.",
  },
  {
    question: "What are NEET exams and who conducts NEET exams in India?",
    answer: "NEET exams are conducted for admissions in UG, PG and SS programs in medical field. NEET UG for UG admissions is conducted by NTA (National Testing Agency). NEET PG and NEET SS are conducted by NBEMS (National Board of Examination in Medical Sciences). While NEET UG is comprehensive and include admission eligibility for all INIs (Institute of National Importance such as AIIMS), there is a separate exam for INI admissions in PG (INI CET) and SS (INI-SS) programs which is conducted by AIIMS Delhi.",
  },
  {
    question: "Who can participate in medical admission counselling?",
    answer: "Medical admission counselling is a post NEET Exam stage of medical admissions. To participate in medical admission counselling, an applicant must qualify the NEET exams. The qualifying criteria for general category candidates is 50th percentile and for EWS category candidates it is 45th percentile. The reserved category candidates from OBC, SC, ST category are considered qualified at 40th percentile. The qualification criteria is flexible and central government agency may modify the qualification criteria as per need.",
  },
  {
    question: "What is state medical admission counselling?",
    answer: "State medical admission counselling is conducted by respective state counselling committees for state quota seats (85% of seats in government medical colleges) and 100% of seats private medical colleges within the state.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-white overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-900 mb-10">
          FAQs
        </h1>

        <div className="w-full max-w-4xl flex-grow">
          {faqsData.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              <div
                className="flex justify-between items-center cursor-pointer font-semibold text-lg md:text-xl"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex-1">{faq.question}</span>
                <span className="text-indigo-800 text-3xl ml-3 select-none">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 pl-2 text-sm md:text-base text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* ✅ Go Back Button at Bottom with Violet Color */}
        <button
          onClick={() => navigate(-1)}
          className="mt-12 px-6 py-2 bg-purple-700 text-white rounded-full text-sm hover:bg-purple-800 transition"
        >
          ← Go Back
        </button>
      </div>
    </>
  );
};

export default Faqs;
