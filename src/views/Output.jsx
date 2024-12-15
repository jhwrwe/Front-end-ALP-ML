import { useState } from "react";
import background from "../assets/background.png";
import Doctor from "../assets/Doctor daddy.png"; // Add missing logo import
import vector from "../assets/vector.png"; // Add missing vector import
import { useNavigate } from "react-router-dom";

function Output() {
  const [result, setresult] = useState(0);
  const [percentage, setpercentage] = useState(76);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Output"); // Navigate to the same page, or change path accordingly
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
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <img src={Doctor} alt="logo" />
        <div className="w-full min-h-[50%] rounded-[20px] bg-white flex flex-col">
          <h1 className="text-cyan-600 text-2xl font-bold text-center pt-6 ">
            Risk of stroke
          </h1>
          <h1 className="text-cyan-600 text-6xl font-bold text-center pb-7">
            {percentage}%
          </h1>
          <h2 className="text-black text-center font-semibold tracking-[0.03em]">
            You have a {GetResultBasedOnPercentage(percentage)} risk of
            suffering
          </h2>
          <h2 className="text-black text-center font-semibold tracking-[0.03em]">
            from stroke. Seek medical
          </h2>
          <h2 className="text-black text-center font-semibold tracking-[0.03em]">
            attention immediately.
          </h2>

          <div className="flex justify-center items-center pt-8">
            <button className="bg-cyan-600 text-white font-semibold rounded-[10px] px-8 py-2">
              Finnish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Output;
