import React, { useState } from "react";

const PersonalizationForm = ({ handleOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleOptionSelected(option);
    console.log(option);
  };

  const options = [
    { value: "student", label: "Student or soon to be enrolled", emoji: "👨‍🎓" },
    {
      value: "Professional",
      label: "Professional pursuing a career",
      emoji: "👩‍💼",
    },
    { value: "Parent", label: "Parent of a school-age child", emoji: "👦" },
    { value: "Lifelong Learner", label: "Lifelong learner", emoji: "👴" },
    { value: "Teacher", label: "Teacher", emoji: "👩‍🏫" },
    { value: "Other", label: "Other", emoji: "👤" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white w-full max-w-lg px-4 py-6">
        <h2 className="text-3xl mb-5 font-bold text-center">
          Which describes you best?
        </h2>
        <p className="text-gray-600 mb-[50px] text-center">
          This will help us personalize your experience.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {options.map((option) => (
            <button
              key={option.value}
              className={`flex items-center justify-start border-2 hover:border-yellow-300 hover:shadow-md rounded-lg px-4 py-2 ${
                selectedOption === option.value
                  ? "border-yellow-400 shadow-md"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option.value)}
            >
              <span role="img" aria-label={option.label}>
                {option.emoji}
              </span>
              <span className="ml-2 text-gray-500">
                <b className="text-black font-semibold">{option.label}</b>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalizationForm;
