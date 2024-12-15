import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import background from "../assets/background.png";
import logo from "../assets/Logo.png";
import vector from "../assets/vector.png";
import { useNavigate } from "react-router-dom";

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
        <div className="content-center">
          <img src={logo} alt="logo" />
          <h1 className="text-5xl font-bold text-cyan-600 pb-9 tracking-[0.03em] text-center">
            S<span className="text-4xl">TROKE</span>S
            <span className="text-4xl">HIELD</span>
          </h1>
          <div
            className="rounded-[20px] bg-white flex flex-nowrap  border-white"
            onClick={handleNavigation}
          >
            <div className="flex flex-nowrap justify-between items-center bg-cyan-600 p-4 rounded-[20px] border-2">
              <img src={vector} alt="vector1" />
              <img src={vector} alt="vector2" />
              <img src={vector} alt="vector3" />
            </div>
            <div className="text-xl text-cyan-600 font-semibold flex items-center justify-center px-12 text-center">
              Start Diagnosis
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Start;
