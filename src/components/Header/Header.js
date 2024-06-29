import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="h-10 inPhone my-2">
      <div className="flex content-center">
        <div className="flex items-center cursor-pointer ml-auto lg:ml-18">
          <img
            onClick={() => navigate("/")}
            src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Beige_%26_Green_Minimalist_Organic_Sho.png"
            className="logoWeb"
            alt=""
          />
          <h3 className="text-md font-bold opacity-[.70]">
            AgriGuard: Smart Agriculture Drone Project
          </h3>
        </div>
        <div className="flex-2 w-6/12 mx-auto">
          <ul className="flex mt-4 items-around">
            <li
              onClick={() => navigate("/")}
              className="text-sm cursor-pointer font-semibold text-[#486D28] hover:opacity-90 lg:ml-7 ml-6 mr-1.5"
            >
              Home
            </li>
            <li
              className="text-sm cursor-pointer font-semibold text-[#486D28] hover:opacity-90 ml-6 mr-1.5"
              onClick={() => navigate("/crop")}
            >
              Crop Recommendation
            </li>
            <li
              onClick={() => navigate("/fertilizer")}
              className="text-sm cursor-pointer font-semibold text-[#486D28] hover:opacity-90 ml-6 mr-1.5"
            >
              Fertilizer Recommendation
            </li>
            <li
              onClick={() => navigate("/disease")}
              className="text-sm cursor-pointer font-semibold text-[#486D28] hover:opacity-90  ml-6 mr-1.5"
            >
              Disease Prediction
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
