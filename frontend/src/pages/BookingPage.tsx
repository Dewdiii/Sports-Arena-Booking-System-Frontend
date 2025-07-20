// src/pages/BookingPage.tsx

import React, { useEffect, useState } from "react";

type BookingType = {
  _id: string;
  userId: string;
  date: string;
  startTime: string;
  duration: number;
  court: string;
  paymentStatus: string;
  status: string;
  __v: number;
};

const statusColors = {
  active: "bg-green-500",
  past: "bg-yellow-500",
  cancelled: "bg-red-500",
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString();
}

function formatTime(start: string, duration: number): string {
  const [h, m] = start.split(":").map(Number);
  const startDate = new Date(0, 0, 0, h, m);
  const endDate = new Date(startDate.getTime() + duration * 60 * 60 * 1000);
  const pad = (n: number) => n.toString().padStart(2, "0");
  const to12 = (d: Date) => {
    let hour = d.getHours();
    const min = pad(d.getMinutes());
    const ampm = hour >= 12 ? "p.m." : "a.m.";
    hour = hour % 12 || 12;
    return `${pad(hour)}:${min} ${ampm}`;
  };
  return `${to12(startDate)} - ${to12(endDate)}`;
}

function Booking() {
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBookings() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("http://localhost:7000/api/booking");
        if (!res.ok) throw new Error("Failed to fetch bookings");
        const data: BookingType[] = await res.json();
        setBookings(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message || "Error fetching bookings");
        } else {
          setError("Error fetching bookings");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="filter"
        >
          Filter
        </label>
        <select
          id="filter"
          className="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
          disabled
        >
          <option>All</option>
        </select>
      </div>
      {loading && <div>Loading bookings...</div>}
      {error && <div className="text-red-600">{error}</div>}
      <div>
        {bookings.map((booking, index) => (
          <div
            key={booking._id || index}
            className="bg mb-4 flex items-center overflow-hidden rounded-xl border bg-gray-300 text-teal-800 shadow-lg"
          >
            <img
              src={"src/assets/arena-small-2.png"}
              alt={booking._id}
              className="h-40 w-60 object-cover"
            />
            <div className="flex-1 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Court: {booking.court}</h3>
                <span
                  className={`ml-4 px-2 py-1 text-white text-sm rounded ${
                    statusColors[
                      (
                        booking.status || "active"
                      ).toLowerCase() as keyof typeof statusColors
                    ] || "bg-gray-400"
                  }`}
                >
                  {booking.status}
                </span>
              </div>
              <p className="text-teal-800">ID: {booking._id}</p>
              <p className="text-teal-800">Date: {formatDate(booking.date)}</p>
              <p className="text-teal-800">
                Time: {formatTime(booking.startTime, booking.duration)}
              </p>
              <p className="text-teal-800">Payment: {booking.paymentStatus}</p>
            </div>
            <div
              className={`h-40 w-2 bg-black rounded-r-3xl ${
                statusColors[
                  (
                    booking.status || "active"
                  ).toLowerCase() as keyof typeof statusColors
                ] || "bg-gray-400"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booking;
