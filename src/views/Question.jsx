import React, { useState } from "react";
import background from "../assets/background.png";
import { useNavigate } from "react-router-dom";
import Doctor1 from "../assets/Doctor-1.png";
import PreloadedImage from "../components/PreloadedImage";
import "../App.css";

function Question() {
  const navigate = useNavigate();

  // Enhanced list of questions
  const questions = [
    {
      question: "What is your gender?",
      type: "radio",
      options: ["Male", "Female", "Other"],
    },
    {
      question: "What is your age?",
      type: "number",
      placeholder: "Enter your age",
    },
    {
      question: "Have you ever been diagnosed with hypertension?",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      question: "Have you ever been diagnosed with heart disease?",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      question: "Have you ever been married?",
      type: "radio",
      options: ["Yes", "No"],
    },
    {
      question: "What is your occupation?",
      type: "radio",
      options: ["Self-employed", "Private", "Government job", "Never worked", "Child"],
    },
    {
      question: "What is your residence type?",
      type: "radio",
      options: ["Rural", "Urban"],
    },
    {
      question: "What is your average glucose level in blood?",
      type: "number",
      placeholder: "Enter your average glucose level",
    },
    {
      question: "What is your body mass index (BMI)?",
      type: "number",
      placeholder: "Enter your BMI",
    },
    {
      question: "What is your smoking status",
      type: "radio",
      options: ["Smokes", "Formerly smoked", "Never smoked"],
    },
  ];

  // State to track current question index and responses
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});

  const currentQuestion = questions[currentQuestionIndex];

  // Handle changes in input values
  const handleChange = (event) => {
    const { value } = event.target;
    setResponses((prevResponses) => ({
      ...prevResponses,
      [currentQuestionIndex]: value,
    }));
  };

  // Navigate to the previous or next question
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigate("/"); // Navigate to the initial page
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Responses:", responses); // Debug: log the responses
      navigate("/Output"); // Navigate to the final output page
    }
  };
  
  // Validation: Check if the current question has been answered
  const isNextDisabled = () => {
    const response = responses[currentQuestionIndex];
    if (currentQuestion.type === "radio") {
      return !response; // Disable if no option is selected
    }
    if (currentQuestion.type === "number" || currentQuestion.type === "text") {
      return !response || response === ""; // Disable if input is empty
    }
    return false; // Default to enabled
  };  

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex flex-col justify-between items-center px-7 pb-24"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Upper Div */}
      <div className="w-2/3 md:w-2/12 flex flex-col px-6 pt-12 items-center">
        {/* <img src={Doctor1} alt="logo" className="h-full" /> */}
        <PreloadedImage src={Doctor1} alt="logo" className="h-full" />
      </div>

      {/* Lower Div */}
      <div className="w-full min-h-[65%] md:min-h-[60%] bg-white flex flex-col pt-10 md:pt-14 pb-8 px-6 md:px-24 shadow-2xl rounded-[30px]">
        <h1 className="text-cyan-600 text-xl md:text-3xl font-bold text-center">
          {currentQuestion.question}
        </h1>

        <div className="w-full flex flex-col items-center gap-4 px-4 py-6">
          {currentQuestion.type === "radio" &&
            currentQuestion.options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center w-full md:w-2/3 px-4 py-2 border-2 rounded-lg cursor-pointer ${
                  responses[currentQuestionIndex] === option
                    ? "border-gray-600"
                    : "border-gray-200"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={responses[currentQuestionIndex] === option}
                  onChange={handleChange}
                  className="hidden"
                />
                <div
                  className={`w-4 h-4 border-2 rounded-full flex justify-center items-center ${
                    responses[currentQuestionIndex] === option
                      ? "border-gray-600"
                      : "border-gray-400"
                  }`}
                >
                  {responses[currentQuestionIndex] === option && (
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  )}
                </div>
                <span
                  className={`ml-4 text-md font-bold ${
                    responses[currentQuestionIndex] === option
                      ? "text-gray-700"
                      : "text-gray-500"
                  }`}
                >
                  {option}
                </span>
              </label>
            ))}

          {currentQuestion.type === "number" && (
            <input
              type="number"
              value={responses[currentQuestionIndex] || ""}
              onChange={handleChange}
              placeholder={currentQuestion.placeholder}
              className="w-full md:w-2/3 px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
          )}

          {currentQuestion.type === "text" && (
            <input
              type="text"
              value={responses[currentQuestionIndex] || ""}
              onChange={handleChange}
              placeholder={currentQuestion.placeholder}
              className="w-full md:w-2/3 px-4 py-2 border-2 border-gray-300 rounded-lg"
            />
          )}
        </div>

        <div className="flex-grow md:flex-col"></div>

        <div className="flex flex-row items-center justify-center gap-x-1.5">
          <div className="flex justify-center items-center">
            <button
              className="bg-slate-100 text-cyan-600 font-semibold rounded-[20px] px-10 md:px-12 py-2 md:py-4 text-lg md:text-xl"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
                className={`bg-cyan-600 text-white font-semibold rounded-[20px] px-10 md:px-12 py-2 md:py-4 text-lg md:text-xl ${
                  isNextDisabled() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleNext}
                disabled={isNextDisabled()}
              >
                Next
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;