import React, { useState } from "react";
import background from "../assets/background.png";
import { useNavigate } from "react-router-dom";
import Doctor1 from "../assets/Doctor-1.png";
import '../App.css';

function Question() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/"); // Navigate to the new page (e.g., "/another-page")
  };
  const handleNavigation2 = () => {
    navigate("/Output"); // Navigate to the new page (e.g., "/another-page")
  };

  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update state with the selected value
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col justify-between items-center px-7 pb-24"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Upper Div */}
      <div className="w-2/3 md:w-2/12 flex flex-col px-6 pt-12 items-center">
        <img src={Doctor1} alt="logo" className="h-full"/>
      </div>

      {/* Lower Div */}
      <div className="w-full min-h-[65%] md:min-h-[60%] bg-white flex flex-col pt-6 md:pt-14 pb-8 px-6 md:px-24 shadow-2xl rounded-[30px]">
        <h1 className="text-cyan-600 text-xl md:text-3xl font-bold text-center">
          Have you ever been diagnosed with heart disease?
        </h1>

        <div className="w-full flex flex-col items-center gap-4 p-4">
          {/* Option 1 */}
          <label
            className={`flex items-center w-full md:w-2/3 px-4 py-2 border-2 rounded-lg cursor-pointer ${
              selectedOption === "Yes" ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <input
              type="radio"
              name="option"
              value="Yes"
              checked={selectedOption === "Yes"}
              onChange={handleChange}
              className="hidden"
            />
            <div
              className={`w-4 h-4 border-2 rounded-full flex justify-center items-center ${
                selectedOption === "Yes" ? "border-gray-600" : "border-gray-400"
              }`}
            >
              {selectedOption === "Yes" && (
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              )}
            </div>
            <span
              className={`ml-4 text-md font-bold ${
                selectedOption === "Yes" ? "text-gray-700" : "text-gray-500"
              }`}
            >
              Yes
            </span>
          </label>

          {/* Option 2 */}
          <label
            className={`flex items-center w-full md:w-2/3 px-4 py-2 border-2 rounded-lg cursor-pointer ${
              selectedOption === "No" ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <input
              type="radio"
              name="option"
              value="No"
              checked={selectedOption === "No"}
              onChange={handleChange}
              className="hidden"
            />
            <div
              className={`w-4 h-4 border-2 rounded-full flex justify-center items-center ${
                selectedOption === "No" ? "border-gray-600" : "border-gray-400"
              }`}
            >
              {selectedOption === "No" && (
                <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              )}
            </div>
            <span
              className={`ml-4 text-md font-bold ${
                selectedOption === "No" ? "text-gray-700" : "text-gray-500"
              }`}
            >
              No
            </span>
          </label>
        </div>

        <div className="flex-grow md:flex-col"></div>

        <div className="flex flex-row items-center justify-center gap-x-1.5">
          <div className="flex justify-center items-center">
            <button className="bg-slate-100 text-cyan-600 font-semibold rounded-[20px] px-10 md:px-12 py-2 md:py-4 text-lg md:text-xl"
            onClick={handleNavigation}>
              Back
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-cyan-600 text-white font-semibold rounded-[20px] px-10 md:px-12 py-2 md:py-4 text-lg md:text-xl"
            onClick={handleNavigation2}>
              Next
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Question;
