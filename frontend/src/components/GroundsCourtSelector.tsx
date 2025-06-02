import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Props {
  selectedGround: string;
  selectedCourt: string;
  onGroundChange: (ground: string) => void;
  onCourtChange: (court: string) => void;
}

const GroundsCourtsSelector: React.FC<Props> = () => {
  const selectedGround = "";
  const selectedCourt = "";

  const onGroundChange = (ground: string) => {};
  const onCourtChange = (court: string) => {};

  const navigate = useNavigate();

  const [ground, setGround] = useState<string>(selectedGround || "Ground 1");
  const [court, setCourt] = useState<string>(selectedCourt || "Court 1");
  const [grounds, setGrounds] = useState<string[]>(["Ground 1", "Ground 2"]);
  const [courts, setCourts] = useState<string[]>(["Court 1", "Court 2"]);
  const [newGround, setNewGround] = useState<string>("");
  const [newCourt, setNewCourt] = useState<string>("");

  const handleGroundChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGround = e.target.value;
    setGround(selectedGround);
    onGroundChange(selectedGround);
  };

  const handleCourtChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCourt = e.target.value;
    setCourt(selectedCourt);
    onCourtChange(selectedCourt);
  };

  const handleAddGround = () => {
    navigate("/addground");
  };

  const handleAddCourt = () => {
    navigate("/addcourt");
  };

  return (
    <div className="flex items-center justify-between p-4 bg-teal-800 text-white rounded-2xl mb-2">
      <div className="flex items-center bg-white p-4 text-teal-800">
        <div className="mr-4">
          <label htmlFor="ground" className="text-bold text-sm">
            Ground
          </label>
          <div className="flex items-center">
            <select
              id="ground"
              className="mt-1 block w-full rounded-md border-transparent focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              value={ground}
              onChange={handleGroundChange}
            >
              <option value="">Select a Ground</option>
              {grounds.map((g, index) => (
                <option key={index} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <button
              className="ml-2 bg-teal-800 text-white font-bold py-1 px-3 rounded"
              onClick={handleAddGround}
            >
              +
            </button>
          </div>
        </div>
        <div className="mr-4">
          <label htmlFor="court" className="text-bold text-sm">
            Court
          </label>
          <div className="flex items-center">
            <select
              id="court"
              className="mt-1 block w-full rounded-md border-transparent focus:border-indigo-500 focus:ring-indigo-500 text-sm"
              value={court}
              onChange={handleCourtChange}
            >
              <option value="">Select a Court</option>
              {courts.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <button
              className="ml-2 bg-teal-800 text-white font-bold py-1 px-3 rounded"
              onClick={handleAddCourt}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center bg-white p-4 rounded-2xl text-teal-800">
        <div className="">
          <p className="text-lg font-semibold">KHR Indoor Cricket</p>
          <p className="text-sm">No. 112/3/E, Katubedda, Moratuwa</p>
        </div>
        <div className="ml-4">
          <div className="flex items-center text-lg">
            <span className="mr-1">4.2</span>
            <span>★★★★★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroundsCourtsSelector;
