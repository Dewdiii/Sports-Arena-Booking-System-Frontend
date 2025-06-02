import background from "../assets/Background Image.png";
import text from "../assets/Component 2.png";
import { FaUser, FaLandmark } from "react-icons/fa";

import player from "../assets/player.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterType = () => {
  const [isCustomer, setIsCustomer] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
        <div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex flex-col items-center justify-center h-full p-8">
            <div className="flex items-left p-1">
              <img
                src={text}
                alt="Arena"
                className="h-250 w-auto mr-8"
                style={{
                  marginBottom: "30px",
                  marginLeft: "-50px",
                  width: "165px",
                }}
              />
            </div>
            <img
              src={player}
              alt="Arena"
              className="h-250 w-auto mr-3"
              style={{
                marginBottom: "-50px",
                marginLeft: "50px",
                width: "600px",
              }}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 py-16 px-12 shadow-lg">
          <h2 className="text-3xl mb-4 text-center font-bold">
            Registration Type
          </h2>

          <p className="mb-4 text-center text-sm">
            Select one of registration types to continue the registration
            procedure.
          </p>
          <br />
          <div className="flex flex-col gap-4">
            <div
              className={`flex items-center p-4 border rounded-lg cursor-pointer  ${
                isCustomer ? "bg-teal-800 text-white" : "text-black"
              }`}
              onClick={() => {
                setIsCustomer(true);
              }}
            >
              <FaUser
                className={`text-lg mr-4  ${
                  isCustomer ? "text-white" : "text-black"
                }`}
              />
              <div>
                <h3 className="text-m font-semibold">Customer</h3>
              </div>
            </div>
            <div
              className={`flex items-center p-4 border rounded-lg cursor-pointer  ${
                !isCustomer ? "bg-teal-800 text-white" : ""
              }`}
              onClick={() => {
                setIsCustomer(false);
              }}
            >
              <FaLandmark
                className={`text-lg mr-4  ${
                  !isCustomer ? "text-white" : "text-black"
                }`}
              />
              <div>
                <h3 className="text-m font-semibold">Ground Owner</h3>
              </div>
            </div>
          </div>
          <br />
          <button
            className="mt-6 w-full py-2 px-4 bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-700"
            onClick={() => {
              navigate("/register", {
                state: { isCustomer },
              });
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterType;
