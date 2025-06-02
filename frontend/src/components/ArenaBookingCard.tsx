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
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#1f2937]">
          Make a Booking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="date">Select a date</Label>
          <Select>
            <SelectTrigger id="date" aria-label="Select a Date">
              <SelectValue placeholder="Select a Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023-10-01">October 1, 2023</SelectItem>
              <SelectItem value="2023-10-02">October 2, 2023</SelectItem>
              <SelectItem value="2023-10-03">October 3, 2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Select a start time and duration</Label>
          <div className="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger id="time" aria-label="Time">
                <SelectValue placeholder="Time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="08:00">08:00 AM</SelectItem>
                <SelectItem value="09:00">09:00 AM</SelectItem>
                <SelectItem value="10:00">10:00 AM</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="duration" aria-label="Duration">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30">30 Minutes</SelectItem>
                <SelectItem value="60">1 Hour</SelectItem>
                <SelectItem value="90">1.5 Hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="court">Select a preferred court</Label>
          <Select>
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
        <Button className="w-full bg-[#1f2937] text-white">Book</Button>
      </CardFooter>
    </Card>
  );
}
