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
  const [description, setDescription] = useState("");
  const [pricePerHour, setPricePerHour] = useState("");
  const [type, setType] = useState("");
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", courtName);
    formData.append("sports", JSON.stringify(availableSports));
    // Convert availableTimes to array of objects as in the sample
    const availableTimeArr = Object.keys(availableTimes).map((day) => ({
      day,
      openTime: availableTimes[day].open,
      closeTime: availableTimes[day].close,
    }));
    formData.append("availableTime", JSON.stringify(availableTimeArr));
    if (imageFiles) {
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append("imageFiles", imageFiles[i]);
      }
    }
    formData.append("description", description);
    formData.append("pricePerHour", pricePerHour);
    formData.append("type", type);
    try {
      const response = await fetch(
        "http://localhost:7000/api/my-arenas/687a1f5baa4e491554b853e0/courts",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add court");
      }
      alert("Court added successfully!");
      setCourtName("");
      setAvailableSports([]);
      setAvailableTimes({
        Monday: { open: "", close: "" },
        Tuesday: { open: "", close: "" },
        Wednesday: { open: "", close: "" },
        Thursday: { open: "", close: "" },
        Friday: { open: "", close: "" },
        Saturday: { open: "", close: "" },
        Sunday: { open: "", close: "" },
      });
      setDescription("");
      setPricePerHour("");
      setType("");
      setImageFiles(null);
    } catch (error: any) {
      alert("Error: " + (error?.message || error));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg rounded-md bg-white p-4 shadow-md"
    >
      <h2 className="mb-4 text-xl font-bold">Add Court</h2>
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
          className="mt-1 block w-full rounded-md border p-2 shadow-sm"
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
          <div key={day} className="mb-2 flex items-center">
            <span className="w-20">{day}</span>
            <select
              value={availableTimes[day].open}
              onChange={(e) => handleTimeChange(day, "open", e.target.value)}
              className="mx-2 rounded-md border p-2 shadow-sm"
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
              className="ml-6 rounded-md border p-2 shadow-sm"
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

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border p-2 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Price Per Hour
        </label>
        <input
          type="number"
          value={pricePerHour}
          onChange={(e) => setPricePerHour(e.target.value)}
          className="mt-1 block w-full rounded-md border p-2 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 block w-full rounded-md border p-2 shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Image Files
        </label>
        <input
          type="file"
          multiple
          onChange={(e) => setImageFiles(e.target.files)}
          className="mt-1 block w-full rounded-md border p-2 shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-teal-700 px-4 py-2 font-bold text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default AddCourt;
