import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function PaymentOtp() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .custom-input::placeholder {
        color: gray;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <Card className="w-full max-w-lg p-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Enter One-Time Password</CardTitle>
          <CardDescription className="text-lg">
            Please enter the 6-digit code sent to your phone number which ending
            with *********123.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <Input
              type="text"
              maxLength={1}
              pattern="[0-9]*"
              className="custom-input w-16 h-16 text-center text-4xl font-bold rounded-md"
              placeholder="0"
            />
            <Input
              type="text"
              maxLength={1}
              pattern="[0-9]*"
              className="custom-input w-16 h-16 text-center text-4xl font-bold rounded-md"
              placeholder="0"
            />
            <Input
              type="text"
              maxLength={1}
              pattern="[0-9]*"
              className="custom-input w-16 h-16 text-center text-4xl font-bold rounded-md"
              placeholder="0"
            />
            <Input
              type="text"
              maxLength={1}
              pattern="[0-9]*"
              className="custom-input w-16 h-16 text-center text-4xl font-bold rounded-md"
              placeholder="0"
            />
            <Input
              type="text"
              maxLength={1}
              pattern="[0-9]*"
              className="custom-input w-16 h-16 text-center text-4xl font-bold rounded-md"
              placeholder="0"
            />
            <Input
              type="text"
              maxLength={1}
              pattern="[0-9]*"
              className="custom-input w-16 h-16 text-center text-4xl font-bold rounded-md"
              placeholder="0"
            />
          </div>
          <div className="flex justify-between space-x-6">
            <button className="bg-teal-800 text-white py-3 px-6 text-lg rounded">
              Resend
            </button>
            <button className="bg-teal-800 text-white py-3 px-6 text-lg rounded border border-transparent hover:border-teal-700">
              Confirm
            </button>
            <button className="border border-gray-300 text-gray-700 py-3 px-6 text-lg rounded hover:bg-gray-100">
              Cancel
            </button>
          </div>

          <div className="flex justify-between"></div>
        </CardContent>
      </Card>
    </div>
  );
}
