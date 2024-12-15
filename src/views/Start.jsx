import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import background from "../assets/background.png";
import logo from "../assets/Doctor-0.png";
import vector from "../assets/vector.png";
import { useNavigate } from "react-router-dom";
import '../App.css';
import React from 'react';
import Draggable from 'react-draggable';

function Start() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Question"); // Navigate to the new page (e.g., "/another-page")
  };

  return (
    <>
      <body
        className="h-screen bg-cover bg center flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="content-center px-6 md:px-24">
          <img src={logo} alt="logo" className="w-full md:w-2/5 mx-auto" />
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-600 pb-4 md:pb-6 tracking-[0.03em] text-center">
            S<span className="text-4xl">TROKE</span>S
            <span className="text-4xl">HIELD</span>
          </h1>
          <div
            className="rounded-[20px] w-11/12 md:w-3/5 mx-auto bg-white flex flex-nowrap border-white cursor-pointer relative"
          >
            <Draggable
              axis="x" // Restrict movement to horizontal axis
              bounds="parent" // Restrict dragging to within the parent container
              onStop={(e, data) => {
                if (data.x > 0) {
                  handleNavigation(); // Trigger navigation when dragged to the right
                }
              }}
            >
              <div className="flex flex-nowrap justify-between items-center bg-cyan-600 p-4 md:p-5 rounded-[20px] border-2">
                <img src={vector} alt="vector1" className="w-2" />
                <img src={vector} alt="vector2" className="w-2" />
                <img src={vector} alt="vector3" className="w-2" />
              </div>
            </Draggable>
            <div className="text-xl md:text-2xl text-cyan-600 font-semibold flex items-center justify-center text-center mx-auto">
              Start Diagnosis
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Start;
