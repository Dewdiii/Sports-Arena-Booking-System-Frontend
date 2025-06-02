import React from "react";
import ArenaCard from "./ArenaCard";

const NewlyAddedArenas: React.FC = () => {
  const arenas = [
    {
      title: "ABC",
      location: "Katubedda, Moratuwa",
      imgSrc: "../assets/IndoorCricket1.png", // Replace with actual image path
    },
    {
      title: "DEF",
      location: "Location 2",
      imgSrc: "../assets/indoor cricket2.jpg.png", // Replace with actual image path
    },
    {
      title: "GHI",
      location: "Location 3",
      imgSrc: "../assets/IndoorCricket3.png", // Replace with actual image path
    },
    {
      title: "KLM",
      location: "Location 4",
      imgSrc: "../assets/IndoorCricket4.png", // Replace with actual image path
    },
    {
      title: "PQR",
      location: "Location 5",
      imgSrc: "../assets/IndoorCricket5.png", // Replace with actual image path
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-bold mb-4 text-teal-900">
        Newly Added Arenas
      </h2>
      <div className="flex space-x-4 overflow-x-scroll">
        {arenas.map((arena, index) => (
          <ArenaCard key={index} {...arena} />
        ))}
      </div>
    </div>
  );
};

export default NewlyAddedArenas;
