import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ArenaBookingCard() {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("");
  const [court, setCourt] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Map duration string to number of hours (as per API requirement)
  const durationToHours = (val: string) => {
    if (val === "30") return 0.5;
    if (val === "60") return 1;
    if (val === "90") return 1.5;
    return 0;
  };

  // Example: you may want to set amount based on duration or court
  // For now, hardcode as per your example
  React.useEffect(() => {
    if (duration) {
      setAmount("1500");
    } else {
      setAmount("");
    }
  }, [duration]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch(
        "http://localhost:7000/api/booking/687a1f5baa4e491554b853e0/courts/687a2011aa4e491554b853e5",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            date,
            startTime,
            duration: durationToHours(duration),
            amount: Number(amount),
          }),
        }
      );
      if (!res.ok) throw new Error("Booking failed");
      setSuccess("Booking successful!");
    } catch (err: any) {
      setError(err.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#1f2937]">
            Make a Booking
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date">Select a date</Label>
            <Select value={date} onValueChange={setDate}>
              <SelectTrigger id="date" aria-label="Select a Date">
                <SelectValue placeholder="Select a Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025-08-20">August 20, 2025</SelectItem>
                <SelectItem value="2025-08-21">August 21, 2025</SelectItem>
                <SelectItem value="2025-08-22">August 22, 2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Select a start time and duration</Label>
            <div className="grid grid-cols-2 gap-4">
              <Select value={startTime} onValueChange={setStartTime}>
                <SelectTrigger id="time" aria-label="Time">
                  <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="08:00">08:00 AM</SelectItem>
                  <SelectItem value="09:00">09:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="18:00">06:00 PM</SelectItem>
                </SelectContent>
              </Select>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger id="duration" aria-label="Duration">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 Minutes</SelectItem>
                  <SelectItem value="60">1 Hour</SelectItem>
                  <SelectItem value="90">1.5 Hours</SelectItem>
                  <SelectItem value="120">2 Hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="court">Select a preferred court</Label>
            <Select value={court} onValueChange={setCourt}>
              <SelectTrigger id="court" aria-label="Court">
                <SelectValue placeholder="Court" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="court1">Court 1</SelectItem>
                <SelectItem value="court2">Court 2</SelectItem>
                <SelectItem value="court3">Court 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-[#1f2937] text-white"
            type="submit"
            disabled={loading || !date || !startTime || !duration || !court}
          >
            {loading ? "Booking..." : "Book"}
          </Button>
        </CardFooter>
        {success && (
          <div className="mt-2 text-center text-green-600">{success}</div>
        )}
        {error && <div className="mt-2 text-center text-red-600">{error}</div>}
      </form>
    </Card>
  );
}
