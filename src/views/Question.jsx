import { useState } from "react";
import background from "../assets/background.png";
import { useNavigate } from "react-router-dom";
import Doctor1 from "../assets/Doctor-1.png";
import '../App.css';

function Output() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col justify-between items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Upper Div */}
      <div className="w-full min-h-[57%] flex flex-col px-6 pt-12 items-center">
        <img src={Doctor1} alt="logo" className="h-full"/>
      </div>

      {/* Lower Div */}
      <div className="w-full min-h-[43%] bg-white flex flex-col pt-6 md:pt-14 pb-8 px-6 shadow-2xl rounded-t-[30px] md:rounded-t-[70px]">
        <h1 className="text-cyan-600 text-2xl md:text-6xl font-bold text-center">
          Risk of stroke
        </h1>
        <h1 className="text-cyan-600 text-7xl md:text-9xl font-bold text-center pb-4 md:pb-10 md:pt-4">
          {percentage}%
        </h1>
        <h2 className="text-black text-center font-medium tracking-[0.03em] text-lg md:text-4xl">
          You have a {GetResultBasedOnPercentage(percentage)} risk of suffering
          from stroke. Seek medical attention immediately.
        </h2>
        <div className="flex justify-center items-center pt-6 md:pt-10">
          <button className="bg-cyan-600 text-white font-semibold rounded-[20px] px-8 md:px-12 py-2 md:py-4 text-xl md:text-4xl">
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Output;
