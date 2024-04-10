import React, { useState, useEffect } from "react";
import preAlgrebraPuzzleImage from "../Images/Pre-Algebra_puzzles-.png";
import LoadingScreen from "./LoadingScreen";

function LearningPathCard({
  title,
  description,
  isPopular,
  onClick,
  isSelected,
}) {
  return (
    <div
      className={`px-5 md:p-10 rounded-lg md:border-2 relative mt-10 hover:border-yellow-300 ${
        isSelected ? "md:border-2 md:border-yellow-400 md:shadow-md" : ""
      }`}
    >
      {isPopular && (
        <div className="bg-yellow-500 rounded-full px-4 py-1 mx-auto absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          Most Popular
        </div>
      )}
      <div
        className="flex flex-col border-2 md:border-none p-8 md:flex-row md:gap-5 hover:border-yellow-300"
        onClick={onClick}
      >
        <div className="md:w-2/3">
          <h3 className="text-lg md:text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-lg md:text-2xl font-semibold">
            {description}
          </p>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <img src={preAlgrebraPuzzleImage} className="w-[100px] md:w-full" />
        </div>
      </div>
    </div>
  );
}

function LearningPaths() {
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = (title) => {
    setSelected(title);
    console.log(title);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col justify-center items-center md:space-y-8 mx-auto md:px-20">
          <h2 className="text-lg md:text-5xl font-bold mt-10 md:mb-4 md:mt-20">
            Learning Paths Based On Your Answers
          </h2>
          <p className="text-xs text-center md:text-2xl text-gray-600 md:m-0 md:p-0">
            Choose one to get started. You can switch anytime.
          </p>
          <div className="flex flex-col md:flex-row md:gap-7">
            <LearningPathCard
              title="Foundational Math Build"
              description="Build Foundational skills in algebra, geometry, and probability."
              isPopular={true}
              onClick={() => handleClick("Foundational Math Build")}
              isSelected={selected === "Foundational Math Build"}
            />
            <LearningPathCard
              title="Mathematical Thinking"
              description="Build Foundational skills in algebra, geometry, and probability."
              isPopular={false}
              onClick={() => handleClick("Mathematical Thinking")}
              isSelected={selected === "Mathematical Thinking"}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default LearningPaths;
