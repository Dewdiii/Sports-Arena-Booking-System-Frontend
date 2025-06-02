import React, { useState } from "react";

interface ArenaAvailabilityDetailsProps {
  // You can add props here if needed (e.g., to pass data)
}

const ArenaAvailabilityDetails: React.FC<
  ArenaAvailabilityDetailsProps
> = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // Track as a Date object

  // Data is now more structured and easier to manage
  const availabilityData = {
    openingHours: {
      Mon: "8:00 AM - 8:00 PM",
      Tue: "8:00 AM - 8:00 PM",
      Wed: "8:00 AM - 8:00 PM",
      Thu: "8:00 AM - 8:00 PM",
      Fri: "8:00 AM - 8:00 PM",
      Sat: "8:00 AM - 8:00 PM",
      Sun: "8:00 AM - 8:00 PM",
    },
    pricing: {
      weekday: "2000 LKR / Hr",
      weekend: "4000 LKR / Hr",
    },
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const getDayFromDate = (date: Date): string => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[date.getDay()];
  };

  // Function to format date as "YYYY-MM-DD"
  const formatDate = (date: Date) => {
    return date.toISOString().slice(0, 10);
  };

  // Generate date buttons for a week (from selectedDate)
  const generateDateButtons = () => {
    const buttons = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(selectedDate);
      date.setDate(selectedDate.getDate() - selectedDate.getDay() + i); // Adjust for week start
      buttons.push(
        <button
          key={i}
          className={`px-4 py-2 rounded-full ${
            formatDate(selectedDate) === formatDate(date)
              ? "bg-green-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleDateClick(date)}
        >
          {date.getDate()} ({getDayFromDate(date)})
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* ... (Opening Hours section - same as before) */}

      {/* Pricing */}
      <h2 className="text-lg font-semibold mt-8 mb-4">Pricing</h2>
      <div className="flex gap-4">{generateDateButtons()}</div>

      {/* Display Price based on selected date */}
      <div className="mt-4 h-12 flex items-center justify-center bg-green-500 text-white rounded-md">
        {selectedDate &&
          (getDayFromDate(selectedDate) === "Sat" ||
          getDayFromDate(selectedDate) === "Sun"
            ? availabilityData.pricing.weekend
            : availabilityData.pricing.weekday)}
      </div>
    </div>
  );
};

export default ArenaAvailabilityDetails;
