import React from "react";
import celebrationImage from "../Images/celebrationImage.png";

const TestimonialCard = () => {
  return (
    <div className="px-4 md:px-20 md:mb-0 mb-5">
      <div className="flex  md:flex  max-w-[100%] md:items-center md:px-20 md:mx-auto  flex-col md:flex-row items-center">
        {/* Image */}
        <div className="w-full md:p-4 md:w-full mb-4 md:mb-0 md:mr-4">
          <img src={celebrationImage} alt="happy" />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-5 md:mb-10">
            You're on your way!
          </h2>
          <div className="flex items-center mt-2 mb-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <svg
                key={rating}
                className="w-10 h-10 fill-current text-yellow-500 mr-1 md:mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>

          <p className="text-gray-600 mb-4 md:pr-20 text-justify">
            <i>
              "Through its engaging and well-structured courses, Brilliant has
              taught me mathematical concepts that I previously struggled to
              understand. I now feel confident approaching both technical job
              interviews and real-world problem-solving situations."
            </i>
          </p>
          <p className="text-gray-600 font-bold">
            – <i>Jacob S.</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
