import React from "react";
import RightPlaceImage from "../Images/RightPlaceImage.png";

const RightPlaceScreen = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-8 mb-4">
      <div className="max-w-[100%] md:max-w-[34%] mx-auto bg-white mb-4 md:mb-0">
        <div className="flex items-center justify-center">
          <img src={RightPlaceImage} alt="Right Place" className="w-full" />
        </div>
      </div>
      <div className="max-w-[100%] md:max-w-[50%]">
        <h2 className="text-3xl font-bold mb-4 px-4 md:px-4 text-center md:text-left">
          You're in the right place
        </h2>
        <p className="text-gray-600 text-xl px-4 md:pr-32 text-center md:text-left">
          Brilliant gets you hands-on to help improve your professional skills
          and knowledge. You'll interact with concepts and solve fun problems in
          math, science, and computer science.
        </p>
      </div>
    </div>
  );
};

export default RightPlaceScreen;
