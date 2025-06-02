// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";

// const AvailabilityRectangle = ({
//   startTime,
//   endTime,
//   isAvailable,
// }: {
//   startTime: string;
//   endTime: string;
//   isAvailable: Boolean;
// }) => {
//   const startHour = parseInt(startTime.split(":")[0]);
//   const endHour = parseInt(endTime.split(":")[0]);
//   const width = `${((endHour - startHour) * 100) / 12}%`;

//   return (
//     <div
//       className={`h-8 ${isAvailable ? "bg-green-400" : "bg-red-400"}`}
//       style={{ width }}
//     ></div>
//   );
// };

// const LiveAvailabilityComponent = () => {
//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-teal-700 mb-2">
//         Courts - Live Availability
//       </h2>
//       <p className="text-gray-600 mb-4">
//         Maecenas sagittis eros quis erat suscipit, vitae bibendum orci
//         imperdiet. Nullam pellentesque luctus rhoncus.
//       </p>

//       <div className="flex space-x-2 mb-6">
//         <button className="bg-teal-700 text-white px-4 py-2 rounded">
//           Indoor Cricket
//         </button>
//         <button className="border border-teal-700 text-teal-700 px-4 py-2 rounded">
//           Futsal
//         </button>
//         <button className="border border-teal-700 text-teal-700 px-4 py-2 rounded">
//           Badminton
//         </button>
//       </div>

//       <div className="bg-teal-800 p-4 rounded-lg">
//         <div className="flex space-x-2 mb-4">
//           <Select>
//             <SelectTrigger className="w-[280px]">
//               <SelectValue placeholder="Court" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="1">Playground 1</SelectItem>
//               <SelectItem value="2">Playground 2</SelectItem>
//               <SelectItem value="3">Playground 3</SelectItem>
//               <SelectItem value="4">Playground 4</SelectItem>
//               <SelectItem value="5">Playground 5</SelectItem>
//               <SelectItem value="6">Playground 6</SelectItem>
//             </SelectContent>
//           </Select>
//           <Select>
//             <SelectTrigger className="w-[280px]">
//               <SelectValue placeholder="Dates" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="2022-01-01">January 1, 2022</SelectItem>
//               <SelectItem value="2022-01-02">January 2, 2022</SelectItem>
//               <SelectItem value="2022-01-03">January 3, 2022</SelectItem>
//               <SelectItem value="2022-01-04">January 4, 2022</SelectItem>
//               <SelectItem value="2022-01-05">January 5, 2022</SelectItem>
//               <SelectItem value="2022-01-06">January 6, 2022</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="flex items-center">
//           <AvailabilityRectangle
//             startTime="8:00"
//             endTime="9:00"
//             isAvailable={true}
//           />
//           <AvailabilityRectangle
//             startTime="9:00"
//             endTime="11:00"
//             isAvailable={false}
//           />
//           <AvailabilityRectangle
//             startTime="11:00"
//             endTime="16:00"
//             isAvailable={true}
//           />
//           <AvailabilityRectangle
//             startTime="16:00"
//             endTime="17:00"
//             isAvailable={false}
//           />
//           <AvailabilityRectangle
//             startTime="17:00"
//             endTime="20:00"
//             isAvailable={true}
//           />
//         </div>

//         <div className="flex justify-between text-white text-sm mt-2">
//           <span>8:00 a.m.</span>
//           <span>12:00 p.m.</span>
//           <span>4:00 p.m.</span>
//           <span>8:00 p.m.</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LiveAvailabilityComponent;

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"; // Assuming you have a UI library for this

interface AvailabilitySlot {
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

const AvailabilityRectangle = ({
  startTime,
  endTime,
  isAvailable,
}: AvailabilitySlot) => {
  const startHour = parseInt(startTime.split(":")[0]);
  const endHour = parseInt(endTime.split(":")[0]);
  const width = `${((endHour - startHour) * 100) / 12}%`;

  return (
    <div
      className={`h-8 ${isAvailable ? "bg-green-400" : "bg-red-400"}`}
      style={{ width }}
    ></div>
  );
};

const LiveAvailabilityComponent: React.FC = () => {
  const [selectedSport, setSelectedSport] = useState("Indoor Cricket");

  const sportsData: Record<string, AvailabilitySlot[]> = {
    "Indoor Cricket": [
      { startTime: "8:00", endTime: "9:00", isAvailable: true },
      { startTime: "9:00", endTime: "11:00", isAvailable: false },
      { startTime: "11:00", endTime: "16:00", isAvailable: true },
      { startTime: "16:00", endTime: "17:00", isAvailable: false },
      { startTime: "17:00", endTime: "20:00", isAvailable: true },
    ],
    Futsal: [
      { startTime: "8:00", endTime: "10:00", isAvailable: false },
      { startTime: "10:00", endTime: "12:00", isAvailable: true },
      { startTime: "12:00", endTime: "14:00", isAvailable: false },
      { startTime: "14:00", endTime: "16:00", isAvailable: true },
      { startTime: "16:00", endTime: "18:00", isAvailable: false },
      { startTime: "18:00", endTime: "20:00", isAvailable: true },
    ],
    Badminton: [
      { startTime: "8:00", endTime: "9:00", isAvailable: true },
      { startTime: "9:00", endTime: "10:00", isAvailable: true },
      { startTime: "10:00", endTime: "11:00", isAvailable: false },
      { startTime: "11:00", endTime: "12:00", isAvailable: false },
      { startTime: "12:00", endTime: "13:00", isAvailable: true },
      { startTime: "13:00", endTime: "14:00", isAvailable: false },
      { startTime: "14:00", endTime: "15:00", isAvailable: true },
      { startTime: "15:00", endTime: "16:00", isAvailable: true },
      { startTime: "16:00", endTime: "17:00", isAvailable: false },
      { startTime: "17:00", endTime: "18:00", isAvailable: false },
      { startTime: "18:00", endTime: "19:00", isAvailable: true },
      { startTime: "19:00", endTime: "20:00", isAvailable: true },
    ],
  };

  const handleSportChange = (sport: string) => {
    setSelectedSport(sport);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-teal-700 mb-2">
        Courts - Live Availability
      </h2>
      <p className="text-gray-600 mb-4">
        Maecenas sagittis eros quis erat suscipit, vitae bibendum orci
        imperdiet. Nullam pellentesque luctus rhoncus.
      </p>

      <div className="flex space-x-2 mb-6">
        <button
          className={`bg-${
            selectedSport === "Indoor Cricket" ? "teal-700 text-white" : ""
          } text-teal-700 border-teal-700 px-4 py-2 rounded`}
          onClick={() => handleSportChange("Indoor Cricket")}
        >
          Indoor Cricket
        </button>
        <button
          className={`border border-teal-700 text-teal-700 px-4 py-2 rounded ${
            selectedSport === "Futsal" ? "bg-teal-700 text-white" : ""
          }`}
          onClick={() => handleSportChange("Futsal")}
        >
          Futsal
        </button>
        <button
          className={`border border-teal-700 text-teal-700 px-4 py-2 rounded ${
            selectedSport === "Badminton" ? "bg-teal-700 text-white" : ""
          }`}
          onClick={() => handleSportChange("Badminton")}
        >
          Badminton
        </button>
      </div>

      <div className="bg-teal-800 p-4 rounded-lg">
        <div className="flex space-x-2 mb-4">
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Court" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Playground 1</SelectItem>
              <SelectItem value="2">Playground 2</SelectItem>
              <SelectItem value="3">Playground 3</SelectItem>
              <SelectItem value="4">Playground 4</SelectItem>
              <SelectItem value="5">Playground 5</SelectItem>
              <SelectItem value="6">Playground 6</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Dates" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2022-01-01">January 1, 2022</SelectItem>
              <SelectItem value="2022-01-02">January 2, 2022</SelectItem>
              <SelectItem value="2022-01-03">January 3, 2022</SelectItem>
              <SelectItem value="2022-01-04">January 4, 2022</SelectItem>
              <SelectItem value="2022-01-05">January 5, 2022</SelectItem>
              <SelectItem value="2022-01-06">January 6, 2022</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center">
          {sportsData[selectedSport].map((slot, index) => (
            <AvailabilityRectangle
              key={index}
              startTime={slot.startTime}
              endTime={slot.endTime}
              isAvailable={slot.isAvailable}
            />
          ))}
        </div>

        <div className="flex justify-between text-white text-sm mt-2">
          <span>8:00 a.m.</span>
          <span>12:00 p.m.</span>
          <span>4:00 p.m.</span>
          <span>8:00 p.m.</span>
        </div>
      </div>
    </div>
  );
};

export default LiveAvailabilityComponent;
