import React, { useState } from "react";

const AddCourt: React.FC = () => {
  const [courtName, setCourtName] = useState("");
  const [availableSports, setAvailableSports] = useState<string[]>([]);
  const [availableTimes, setAvailableTimes] = useState({
    Monday: { open: "", close: "" },
    Tuesday: { open: "", close: "" },
    Wednesday: { open: "", close: "" },
    Thursday: { open: "", close: "" },
    Friday: { open: "", close: "" },
    Saturday: { open: "", close: "" },
    Sunday: { open: "", close: "" },
  });

  const sports = [
    "Indoor Cricket",
    "Badminton",
    "Futsal",
    "Table Tennis",
    "Billiard",
    "Rowing",
    "Gym",
    "Swimming",
    "Volley Ball",
    "Basketball",
  ];

  const timeSlots = [
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const handleSportChange = (sport: string) => {
    setAvailableSports((prev) =>
      prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
    );
  };

  const handleTimeChange = (
    day: string,
    type: "open" | "close",
    value: string
  ) => {
    setAvailableTimes((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ courtName, availableSports, availableTimes });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-md"
    >
      <h2 className="text-xl font-bold mb-4">Add Court</h2>
      <div className="mb-4">
        <label
          htmlFor="courtName"
          className="block text-sm font-medium text-gray-700"
        >
          Court Name
        </label>
        <input
          type="text"
          id="courtName"
          value={courtName}
          onChange={(e) => setCourtName(e.target.value)}
          className="mt-1 p-2 block w-full border rounded-md shadow-sm"
        />
      </div>

      <div className="mb-4">
        <br />
        <span className="block text-sm font-medium text-gray-700">
          Available Sports
        </span>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {sports.map((sport) => (
            <label key={sport} className="flex items-center">
              <input
                type="checkbox"
                checked={availableSports.includes(sport)}
                onChange={() => handleSportChange(sport)}
                className="form-checkbox"
              />
              <span className="ml-2">{sport}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <br />
        <span className="block text-sm font-medium text-gray-700">
          Available Time
        </span>
        <br />
        {Object.keys(availableTimes).map((day) => (
          <div key={day} className="flex items-center mb-2">
            <span className="w-20">{day}</span>
            <select
              value={availableTimes[day].open}
              onChange={(e) => handleTimeChange(day, "open", e.target.value)}
              className="p-2 border rounded-md shadow-sm mx-2"
            >
              <option value="">Open Time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <select
              value={availableTimes[day].close}
              onChange={(e) => handleTimeChange(day, "close", e.target.value)}
              className="p-2 border rounded-md shadow-sm ml-6"
            >
              <option value="">Close Time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-teal-700 text-white font-bold rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default AddCourt;
