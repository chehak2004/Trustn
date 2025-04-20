import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ReviewCard from "./ReviewCard"; // The Tailwind version you now have

const reviews = [
  {
    name: "Ananya Sharma",
    avatar: "https://i.pravatar.cc/150?img=3",
    date: "March 2, 2025",
    review: "Amazing experience! The UI was sleek and the form submission was instant.",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    avatar: "https://i.pravatar.cc/150?img=5",
    date: "March 5, 2025",
    review: "Loved the design. Worked well on both desktop and mobile!",
    rating: 4.5,
  },
  {
    name: "Sana Khan",
    avatar: "https://i.pravatar.cc/150?img=8",
    date: "March 8, 2025",
    review: "Very smooth and responsive. Great job on the animations too!",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="bg-[#0f172a] text-white py-10 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">What People Say</h2>

        <VerticalTimeline>
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Reviews;
