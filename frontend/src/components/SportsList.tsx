import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "Indoor Cricket",
  "Badminton",
  "Futsal",
  "Table Tennis",
  "Billiard",
  "Rowing",
  "Gym",
  "Swimming",
  "Basket Ball",
  "Volley Ball",
];

const SportsList: React.FC = () => {
  return (
    <div className="ml-auto mr-12">
      <h2 className="text-xl mb-4 font-bold text-teal-900 ">
        Explore by Sports
      </h2>
      <div className="flex flex-wrap gap-5 mb-4">
        {categories.map((category) => (
          <Link to="/login">
            <button
              key={category}
              className="px-5 py-2 font-bold bg-white border border-teal-900 text-teal-900 rounded-full hover:bg-teal-900 hover:text-white text-sm"
            >
              {category}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SportsList;
