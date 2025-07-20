import React from "react";
import { useNavigate } from "react-router-dom";
import Indoor from "../assets/Indoor Cricket.png";
interface ArenaCardProps {
  title: string;
  location: string;
  imgSrc: string;
}

const ArenaCard: React.FC<ArenaCardProps> = ({ title, location, imgSrc }) => {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden rounded-lg bg-teal-900 shadow-md">
      <img className="h-48 w-full object-cover" src={Indoor} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-200">{location}</p>
        <div className="mt-2 flex justify-between">
          <button
            className="flex items-center rounded border border-white bg-teal-900 px-4 py-2 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-teal-900"
            onClick={() => navigate("/arena")}
          >
            Details
          </button>
          <button
            className="flex items-center rounded border border-white bg-teal-900 px-4 py-2 text-sm font-bold text-white transition duration-300 hover:bg-white hover:text-teal-900"
            onClick={() => navigate("/arena")}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArenaCard;
