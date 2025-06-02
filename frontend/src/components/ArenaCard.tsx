import React from "react";
import Indoor from "../assets/Indoor Cricket.png";
interface ArenaCardProps {
  title: string;
  location: string;
  imgSrc: string;
}

const ArenaCard: React.FC<ArenaCardProps> = ({ title, location, imgSrc }) => {
  return (
    <div className="bg-teal-900 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={Indoor} alt={title} />
      <div className="p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-gray-200 text-sm">{location}</p>
        <div className="mt-2 flex justify-between">
          <button className="flex items-center border text-sm border-white bg-teal-900 text-white px-4 py-2 font-bold rounded hover:bg-white hover:text-teal-900 transition duration-300">
            Details
          </button>
          <button className="flex items-center border text-sm border-white bg-teal-900 text-white px-4 py-2 font-bold rounded hover:bg-white hover:text-teal-900 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArenaCard;
