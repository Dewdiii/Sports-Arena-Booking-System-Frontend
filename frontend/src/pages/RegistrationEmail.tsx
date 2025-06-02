import background from "../assets/Background Image.png";
import text from "../assets/Component 2.png";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";
import player from "../assets/player.png";

const RegisterEmail = () => {
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
          <br />
          <br />
          <div className="flex items-center justify-center mb-4">
            <FaCheckCircle className="text-lime-300 text-4xl" />
          </div>
          <br />
          <h2 className="text-2xl font-semibold text-center mb-2">
            Check your email inbox. <FaEnvelope className="inline-block ml-2" />
          </h2>

          <p className="text-gray-600 text-justify mb-4 text-sm">
            Please verify your email address by clicking on the link we just
            sent you. If you don't see the email, check your spam folder or
            click the button below to resend.
          </p>
          <button className="mt-6 w-full py-2 px-4 bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-700">
            Resend
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterEmail;
