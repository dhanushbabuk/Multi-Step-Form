import React, { useState } from "react";

const options = [
  {
    icon: "📈",
    label: "Learning specific skills to advance my career",
    option: "Learning specific skills to advance my career",
  },
  {
    icon: "🌍",
    label: "Exploring new topics I'm interested in",
    option: "Exploring new topics I'm interested in",
  },
  {
    icon: "🧭",
    label: "Refreshing my math foundations",
    option: "Refreshing my math foundations",
  },
  {
    icon: "🎯",
    label: "Exercising my brain to stay sharp",
    option: "Exercising my brain to stay sharp",
  },
  {
    icon: "👀",
    label: "Something else",
    option: "Something else",
  },
];

const InterestSelection = ({ handleOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleOptionSelected(option);
    console.log(option);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white w-full max-w-xl px-4 py-6">
        <h2 className="text-3xl mb-5 font-bold text-center">
          Which are you most interested in?
        </h2>
        <p className="text-gray-600 mb-[50px] text-center text-sm">
          Choose just one. This will help us get you started (but won't limit
          your experience).
        </p>
        <div className="grid grid-cols-1 gap-4">
          {/* Use map to iterate through options and create buttons */}
          {options.map((option) => (
            <button
              key={option.option} // Add a unique key for each button
              className={`flex items-center justify-start border-2 hover:border-yellow-300 hover:shadow-md rounded-lg px-4 py-2 ${
                selectedOption === option.option
                  ? "border-yellow-400 shadow-md"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option.option)}
            >
              <span className="mr-2">{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterestSelection;
