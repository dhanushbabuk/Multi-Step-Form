import React, { useState } from "react";
import katex from "katex";

const MathComfortLevel = ({ handleOptionSelected }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (level) => {
    setSelected(level);
    handleOptionSelected(level);
    console.log(level);
  };

  const renderExpression = (expression) => {
    return katex.renderToString(expression);
  };

  const mathLevels = [
    {
      level: "arithmetic",
      expression: "5 \\times \\frac{1}{2} = ?",
      title: "Arithmetic",
      subtitle: "Introductory",
    },
    {
      level: "basic-algebra",
      expression: "3x + 5 = 4",
      title: "Basic Algebra",
      subtitle: "Foundational",
    },
    {
      level: "intermediate-algebra",
      expression: "x = \\pm\\sqrt{a^2 + b^2}",
      title: "Intermediate Algebra",
      subtitle: "Intermediate",
    },
    {
      level: "calculus",
      expression: "\\int x^2 \\, dx = ?",
      title: "Calculus",
      subtitle: "Advanced",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-fit mx-auto p-6 bg-white">
        <h2 className="text-3xl mb-5 font-bold text-center mt-10">
          What is your math comfort level?
        </h2>
        <p className="text-gray-800 mb-5 text-center text-sm">
          Choose the highest level you feel confident in — you can always adjust
          later.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {mathLevels.map(({ level, expression, title, subtitle }) => (
            <div
              key={level}
              className={`bg-white border-2 rounded-lg p-4 flex flex-col hover:border-yellow-300 items-center cursor-pointer ${
                selected === level ? "border-2 border-yellow-400 shadow-md" : ""
              }`}
              onClick={() => handleClick(level)}
            >
              <span
                className="text-3xl mt-2"
                dangerouslySetInnerHTML={{
                  __html: renderExpression(expression),
                }}
              />
              <span className="text-lg font-semibold mb-2">{title}</span>
              <span className="text-gray-600">{subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MathComfortLevel;
