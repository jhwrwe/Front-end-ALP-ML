import { useState, useEffect } from "react";
import background from "../assets/background.png";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import Doctor2 from "../assets/Doctor-2.png";
import PreloadedImage from "../components/PreloadedImage";
import { classifyData } from "../utils/api";
import '../App.css';

function Output() {
  const [percentage, setPercentage] = useState(null); // Updated to null initially
  const navigate = useNavigate();
  const location = useLocation(); // Get data from the previous page
  const features = location.state?.features || []; // Features passed from the Question component

  // Fetch prediction when the component loads
  useEffect(() => {
    const getResult = async () => {
      if (features.length > 0) {
        try {
          const prediction = await classifyData(features);
          setPercentage(prediction); // Assuming prediction is a percentage
        } catch (error) {
          console.error("Error fetching prediction:", error);
          setPercentage(0); // Fallback value in case of an error
        }
      } else {
        console.error("No features provided!");
        setPercentage(0); // Handle case where no features are passed
      }
    };
  
    getResult();
  }, [features]);
  

  // Helper function to determine the risk level
  function getRiskLevel(num) {
    if (num > 70) {
      return "high";
    } else if (num > 40) {
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
        <PreloadedImage src={Doctor2} alt="logo" className="h-full" />
      </div>

      {/* Lower Div */}
      <div className="w-full h-full bg-white flex flex-col items-center justify-center pt-6 md:pt-8 pb-8 px-6 shadow-2xl rounded-t-[30px] md:rounded-t-[70px]">
        <h1 className="text-cyan-600 text-2xl md:text-3xl font-bold text-center">
          Risk of Stroke
        </h1>
        {percentage !== null ? (
          <>
            <h1 className="text-cyan-600 text-7xl font-bold text-center pb-4 md:pt-4">
              {percentage}%
            </h1>
            <h2 className="text-black text-center font-medium tracking-[0.03em] text-lg md:text-xl">
              You have a {getRiskLevel(percentage)} risk of suffering from stroke. Seek medical attention immediately.
            </h2>
          </>
        ) : (
          <h2 className="text-gray-500 text-center font-medium tracking-[0.03em] text-lg md:text-xl">
            Loading your risk prediction...
          </h2>
        )}
        <div className="flex justify-center items-center pt-6">
          <button
            className="bg-cyan-600 text-white font-semibold rounded-[20px] px-8 md:px-12 py-2 text-xl"
            onClick={() => navigate("/")}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Output;