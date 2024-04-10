import React, { useState, useEffect } from "react";
import MathComfortLevel from "./MathComfortLevel ";
import RightPlaceScreen from "./RightPlaceScreen ";
import PersonalizationForm from "./PersonalizationForm ";
import leftarrow from "../Images/left-arrow-line-symbol.png";
import InterestSelection from "./InterestSection";
import TestimonialCard from "./TestinomialCard";
import LearningPaths from "./learningPaths";
import LoadingScreen from "./LoadingScreen";

const Form = () => {
  const [page, setPage] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelected = (option) => {
    setSelectedOption(option);
  };
  // Array of form components
  const formComponents = [
    <PersonalizationForm handleOptionSelected={handleOptionSelected} />,
    <InterestSelection handleOptionSelected={handleOptionSelected} />,
    <RightPlaceScreen />,
    <MathComfortLevel handleOptionSelected={handleOptionSelected} />,
    <TestimonialCard />,
  ];

  // Function to handle navigation to the previous step
  const goToPreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  // Function to handle navigation to the next step
  const goToNextPage = () => {
    if (page < formComponents.length - 1) {
      setPage(page + 1);
    }
  };

  // Calculate progress percentage
  const progress = ((page + 1) / formComponents.length) * 100;

  useEffect(() => {
    setSelectedOption(page === 2 || page === 4 ? true : null);
  }, [page]);

  return (
    <>
      {/* header or top div */}
      <div className="flex gap-0 md:justify-center">
        {/* previous left arrow button */}

        {/* Progress bar */}
        {progress === 100 ? (
          <></>
        ) : (
          <>
            <button
              disabled={page === 0}
              onClick={goToPreviousPage}
              className="px-4 py-2 mt-11 rounded-lg disabled:opacity-0"
            >
              <img src={leftarrow} alt="Previous" />
            </button>

            <div className="bg-gray-300 w-[80%] h-1  md:mx-0 rounded-lg mt-[60px] ">
              <div
                className="bg-teal-600 h-full rounded-lg"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </>
        )}
      </div>

      {/* Form content */}
      <div className="bg-white mb-10">
        {/* Display the current form page component */}
        {/* <LearningPaths />, */}
        {page === formComponents.length - 1 ? (
          <LearningPaths />
        ) : (
          <>
            {" "}
            {formComponents[page]}
            {/* Navigation buttons next*/}
            <div className="flex justify-between ">
              <button
                disabled={
                  page === formComponents.length - 1 || selectedOption === null
                }
                onClick={() => {
                  goToNextPage();
                }}
                className={`px-10 py-2 rounded-lg mx-auto ${
                  selectedOption !== null
                    ? "bg-black text-white shadow-md"
                    : "bg-gray-500 text-gray-200 opacity-25"
                }`}
              >
                Continue
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Form;
