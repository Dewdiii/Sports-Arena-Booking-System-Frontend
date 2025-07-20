import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AddGround: React.FC = () => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState<[number, number] | null>(null);

  const handleCreate = async () => {
    if (!location) {
      alert("Please select a location on the map.");
      return;
    }
    const now = new Date().toISOString();
    const userId = "687a29d5b86718cc4edc01c8"; // Replace with actual userId if available
    const reqBody = {
      name: name,
      city: city,
      address: street,
      location: `${location[0]}, ${location[1]}`,
      imageUrls: [],
      lastUpdated: now,
      userId: userId,
      courts: [],
      createdAt: now,
      updatedAt: now,
    };
    try {
      const response = await fetch("http://localhost:7000/api/my-arenas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });
      if (!response.ok) {
        throw new Error("Failed to create ground");
      }
      alert("Ground created successfully!");
      // Optionally reset form or redirect
      setName("");
      setStreet("");
      setCity("");
      setLocation(null);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleCancel = () => {
    // Handle the cancel action
    setName("");
    setStreet("");
    setCity("");
    setLocation(null);
  };

  function LocationMarker() {
    useMapEvents({
      click(e) {
        setLocation([e.latlng.lat, e.latlng.lng]);
      },
    });

    return location === null ? null : (
      <Marker position={location}>
        <Popup>Your selected location</Popup>
      </Marker>
    );
  }

  return (
    <div className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-8 shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-teal-900">Add Ground</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Name of the Ground
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of the Ground"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Street Address
          </label>
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            placeholder="Street Address"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Location
        </label>
        <MapContainer
          center={[7.8731, 80.7718]}
          zoom={7}
          scrollWheelZoom={false}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
        </MapContainer>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleCancel}
          className="rounded-md bg-gray-300 px-4 py-2 text-gray-700"
        >
          Cancel
        </button>
        <button
          onClick={handleCreate}
          className="rounded-md bg-teal-900 px-4 py-2 text-white"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default AddGround;
