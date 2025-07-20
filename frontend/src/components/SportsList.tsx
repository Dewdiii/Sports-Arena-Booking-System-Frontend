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
      <h2 className="mb-4 text-xl font-bold text-teal-900">
        Explore by Sports
      </h2>
      <div className="mb-4 flex flex-wrap gap-5">
        {categories.map((category) => (
          <Link to="/">
            <button
              key={category}
              className="rounded-full border border-teal-900 bg-white px-5 py-2 text-sm font-bold text-teal-900 hover:bg-teal-900 hover:text-white"
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
