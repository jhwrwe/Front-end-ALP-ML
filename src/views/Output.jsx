import { useState } from "react";
import background from "../assets/background.png";
import Doctor from "../assets/Doctor daddy.png"; // Add missing logo import
import vector from "../assets/vector.png"; // Add missing vector import
import { useNavigate } from "react-router-dom";
import Doctor2 from "../assets/Doctor-2.png"; // Add missing logo import
import '../App.css';

function Output() {
  const [result, setresult] = useState(0);
  const [percentage, setpercentage] = useState(76);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/"); // Navigate to the same page, or change path accordingly
  };

  function getresult() {
    //masukin resultnya disini
  }
  function GetResultBasedOnPercentage(num) {
    if (num > 70) {
      return "high";
    } else if (num <= 70 && num > 40) {
      return "average";
    } else {
      return "low";
    }
  }

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col justify-between items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Upper Div */}
      <div className="w-full min-h-[57%] md:min-h-[50%] flex flex-col px-6 pt-12 items-center">
        <img src={Doctor2} alt="logo" className="h-full"/>
      </div>

      {/* Lower Div */}
      <div className="w-full min-h-[43%] md:min-h-[50%] bg-white flex flex-col items-center justify-center pt-6 md:pt-8 pb-8 px-6 shadow-2xl rounded-t-[30px] md:rounded-t-[70px]">
        <h1 className="text-cyan-600 text-2xl md:text-3xl font-bold text-center">
          Risk of stroke
        </h1>
        <h1 className="text-cyan-600 text-7xl font-bold text-center pb-4 md:pt-4">
          {percentage}%
        </h1>
        <h2 className="text-black text-center font-medium tracking-[0.03em] text-lg md:text-xl">
          You have a {GetResultBasedOnPercentage(percentage)} risk of suffering
          from stroke. Seek medical attention immediately.
        </h2>
        <div className="flex justify-center items-center pt-6">
          <button className="bg-cyan-600 text-white font-semibold rounded-[20px] px-8 md:px-12 py-2 text-xl"
          onClick={handleNavigation}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Output;
