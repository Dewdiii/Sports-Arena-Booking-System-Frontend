import background from "../assets/Background Image.png";
import text from "../assets/Component 2.png";
import player from "../assets/player.png";

const RegisterContactDetails = () => {
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

        <div className="w-full lg:w-1/2 py-16 px-12 ">
          <h2 className="text-2xl mb-4 text-center font-bold">
            Contact Details
          </h2>
          <p className="mb-4 text-justify text-sm">
            Hello there, kindly give us your personal contact details and we’ll
            send you a link to a register as an our customer.
          </p>
          <form className="space-y-6 ">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile
              </label>
              <input
                type="mobile"
                id="mobile"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-900 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterContactDetails;
