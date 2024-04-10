import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div>
        <div className="flex justify-center items-center">
          <div className="md:w-28 md:h-28 w-10 h-10 rounded-full border-4 md:border-[15px] border-yellow-500 border-t-transparent animate-spin"></div>
        </div>
        <div className="mt-4 text-center md:text-3xl md:p-10 font-bold text-black">
          Finding learning path recommendations for you based on your responses
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
