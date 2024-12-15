import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import background from "../assets/background.png";
import logo from "../assets/Doctor-0.png";
import vector from "../assets/vector.png";
import { useNavigate } from "react-router-dom";
import '../App.css';

function Start() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/Output"); // Navigate to the new page (e.g., "/another-page")
  };

  return (
    <>
      <body
        className="h-screen bg-cover bg center flex items-center justify-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="content-center px-6">
          <img src={logo} alt="logo" className="w-full md:w-2/3 mx-auto"/>
          <h1 className="text-5xl md:text-9xl font-bold text-cyan-600 pb-4 md:pb-9 tracking-[0.03em] text-center">
            S<span className="text-4xl md:text-8xl">TROKE</span>S
            <span className="text-4xl md:text-8xl">HIELD</span>
          </h1>
          <div
            className="rounded-[20px] md:rounded-[30px] w-11/12 md:w-3/4 mx-auto bg-white flex flex-nowrap border-white"
            onClick={handleNavigation}
          >
            <div className="flex flex-nowrap justify-between items-center bg-cyan-600 p-4 md:p-8 rounded-[20px] md:rounded-[30px] border-2">
              <img src={vector} alt="vector1" className="w-2 md:w-4"/>
              <img src={vector} alt="vector2" className="w-2 md:w-4"/>
              <img src={vector} alt="vector3" className="w-2 md:w-4"/>
            </div>
            <div className="text-xl md:text-4xl text-cyan-600 font-semibold flex items-center justify-center text-center mx-auto">
              Start Diagnosis
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Start;
