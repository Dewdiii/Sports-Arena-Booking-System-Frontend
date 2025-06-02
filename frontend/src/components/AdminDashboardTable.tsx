import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const sampleData = [
  {
    id: 1,
    user: "John Doe",
    date: "2023-07-21",
    time: "10:30 AM",
    duration: "30 mins",
  },
  {
    id: 2,
    user: "Jane Smith",
    date: "2023-07-20",
    time: "2:15 PM",
    duration: "45 mins",
  },
  {
    id: 3,
    user: "Bob Johnson",
    date: "2023-07-19",
    time: "9:00 AM",
    duration: "1 hour",
  },
  {
    id: 4,
    user: "Alice Williams",
    date: "2023-07-18",
    time: "4:45 PM",
    duration: "15 mins",
  },
  {
    id: 5,
    user: "Tom Davis",
    date: "2023-07-17",
    time: "11:20 AM",
    duration: "1 hour 10 mins",
  },
  {
    id: 6,
    user: "Emma Brown",
    date: "2023-07-16",
    time: "1:00 PM",
    duration: "20 mins",
  },
  {
    id: 7,
    user: "Lucas Green",
    date: "2023-07-15",
    time: "3:30 PM",
    duration: "25 mins",
  },
  {
    id: 8,
    user: "Liam White",
    date: "2023-07-14",
    time: "8:45 AM",
    duration: "40 mins",
  },
  {
    id: 9,
    user: "Sophia Harris",
    date: "2023-07-13",
    time: "10:15 AM",
    duration: "35 mins",
  },
  {
    id: 10,
    user: "Mason Clark",
    date: "2023-07-12",
    time: "12:00 PM",
    duration: "1 hour 20 mins",
  },
  {
    id: 11,
    user: "Olivia Lewis",
    date: "2023-07-11",
    time: "9:30 AM",
    duration: "50 mins",
  },
  {
    id: 12,
    user: "Ethan Walker",
    date: "2023-07-10",
    time: "2:00 PM",
    duration: "55 mins",
  },
  {
    id: 13,
    user: "Ava Hall",
    date: "2023-07-09",
    time: "11:45 AM",
    duration: "30 mins",
  },
  {
    id: 14,
    user: "Noah Young",
    date: "2023-07-08",
    time: "4:00 PM",
    duration: "45 mins",
  },
  {
    id: 15,
    user: "Isabella King",
    date: "2023-07-07",
    time: "10:00 AM",
    duration: "1 hour 5 mins",
  },
  {
    id: 16,
    user: "William Wright",
    date: "2023-07-06",
    time: "3:00 PM",
    duration: "25 mins",
  },
  {
    id: 17,
    user: "Mia Scott",
    date: "2023-07-05",
    time: "5:15 PM",
    duration: "35 mins",
  },
  {
    id: 18,
    user: "James Turner",
    date: "2023-07-04",
    time: "1:30 PM",
    duration: "40 mins",
  },
  {
    id: 19,
    user: "Charlotte Moore",
    date: "2023-07-03",
    time: "8:00 AM",
    duration: "50 mins",
  },
  {
    id: 20,
    user: "Benjamin Harris",
    date: "2023-07-02",
    time: "6:45 PM",
    duration: "30 mins",
  },
];

export default function AdminDashboardTable() {
  const [currentData, setCurrentData] = useState(sampleData.slice(0, 5)); // Initial data
  const [currentChunk, setCurrentChunk] = useState(0);
  const [data] = useState(sampleData); // Complete data set

  useEffect(() => {
    setCurrentData(data.slice(currentChunk * 5, currentChunk * 5 + 5));
  }, [currentChunk, data]);

  const handlePrevious = () => {
    if (currentChunk > 0) {
      setCurrentChunk(currentChunk - 1);
    }
  };

  const handleNext = () => {
    if ((currentChunk + 1) * 5 < data.length) {
      setCurrentChunk(currentChunk + 1);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row">
        <img
          src="src/assets/barchart.png"
          alt=""
          className="w-2/3 object-contain"
        />
        <img
          src="src/assets/piechart.png"
          alt=""
          className="w-1/3 object-contain"
        />
      </div>

      <div className="border-b border-muted-foreground/20 px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <span>
              <h3 className="text-bold text-xl">Bookings</h3>
              <p>Court 1</p>
            </span>
          </div>
          {/* <div className="ml-4 mt-4 flex-shrink-0">
            <Button variant="outline">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div> */}
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-muted">
              <TableHead className="w-[32px]">
                <Checkbox id="select-all" />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Duration</TableHead>
            </tr>
          </thead>
          <tbody>
            {currentData.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>
                  <Checkbox id={`select-${entry.id}`} />
                </TableCell>
                <TableCell className="font-medium">{entry.id}</TableCell>
                <TableCell>{entry.user}</TableCell>
                <TableCell>{entry.date}</TableCell>
                <TableCell>{entry.time}</TableCell>
                <TableCell>{entry.duration}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-muted-foreground/20 px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing <strong>{currentChunk * 5 + 1}</strong> to{" "}
            <strong>{Math.min((currentChunk + 1) * 5, data.length)}</strong> of{" "}
            <strong>{data.length}</strong> results
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={handlePrevious}>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
