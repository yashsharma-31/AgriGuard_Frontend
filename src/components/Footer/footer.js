import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import Vector from "../img/Vector.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#219653] inPhone py-20">
      <div className="flex justify-center items-center">
        <div className="flex-1 border-r-2 border-black-600">
          <div
            className="flex justify-center items-center mx-8 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Beige_%26_Green_Minimalist_Organic_Sho.png"
              className="footerLogo"
              alt=""
            />
            <div className="ml-4">
              <h3 className="text-2xl text-white font-bold mt-4">
                AgriGuard: Smart Agriculture Drone Model
              </h3>
              <p className="text-md font-normal text-white mt-2">
                WeAreFarmersPower
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 px-16 border-r-2 border-black-600">
          <div className="flex">
            <ul className="list-none mr-24">
              <li
                className="text-lg text-white font-bold cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </li>
            </ul>
            <ul>
              <li
                className="text-lg text-white font-bold cursor-pointer mb-1"
                onClick={() => navigate("/fertilizer")}
              >
                Fertilizer Prediction
              </li>
              <li
                className="text-lg text-white font-medium cursor-pointer"
                onClick={() => navigate("/crop")}
              >
                Crop Prediction
              </li>
              <li
                className="text-lg text-white font-medium cursor-pointer"
                onClick={() => navigate("/disease")}
              >
                Disease Prediction
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 px-16 border-r-2 border-black-600">
          <h1 className="text-xl ml-6 text-white font-bold w-2/3">
            Give us a follow on social media
          </h1>
          <div className="flex my-5 justify-left">
            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector}
              alt=""
            />
            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector1}
              alt=""
            />
            <img
              className="socialIcons mx-3 ml-6 cursor-pointer"
              src={Vector2}
              alt=""
            />
          </div>
          <p className="text-lg ml-6 text-white">
            Made by : <strong>Team Technox</strong>
          </p>
        </div>
        <div className="flex-1 flex mr-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/09/Blue_Minimalist_Drone.png"
            className="footerBgImg"
            alt=""
          />
          <h1 className="text-xl text-white font-bold mt-6">Trikon 1.0</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
