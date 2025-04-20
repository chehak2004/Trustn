import React from "react";
import Navbar from "../../Components/Navbar/Navbar";

const reviewsData = [
  { id: 1, name: "Aarav Sharma", rating: 5, comment: "Amazing guidance! Helped me choose the best medical college." },
  { id: 2, name: "Sneha Patel", rating: 4, comment: "Very informative and reliable counseling service." },
  { id: 3, name: "Rahul Verma", rating: 5, comment: "Excellent insights on the admission process." },
  { id: 4, name: "Priya Kapoor", rating: 5, comment: "Great support throughout the entire application journey." },
  { id: 5, name: "Vikram Iyer", rating: 4, comment: "The information provided was up-to-date and extremely helpful." },
  { id: 6, name: "Meera Joshi", rating: 5, comment: "A seamless experience with personalized advice. Highly recommend!" }
];

const Reviews = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Left Panel */}
        <div className="bg-[#2a0033] text-white w-1/3 p-10 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-4">Student Reviews</h2>
          <p className="text-sm text-center max-w-xs">
            We’ve helped thousands of students make informed choices. Here's what they say.
          </p>
        </div>

        {/* Right Panel */}
        <div className="bg-[#ff5a3c] w-2/3 p-12 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reviewsData.map((review) => (
              <div key={review.id} className="bg-white/90 text-black p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
                <div className="text-yellow-500 mb-2">
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
                <p className="text-sm italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
