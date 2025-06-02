import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

export default function promtPage() {
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
      <Card className="w-full max-w-lg p-8 shadow-lg">
        <CardHeader>
          <div className="flex justify-center">
            <CardTitle className="text-3xl font-bold text-center">
              Payment Successful!
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-gray-700 text-center mb-4">
              Your payment has been processed successfully. Thank you for your
              purchase!
            </p>
            <button className="bg-teal-800 text-white py-3 px-6 text-lg rounded border border-transparent hover:border-teal-700 shadow-md">
              Close
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
