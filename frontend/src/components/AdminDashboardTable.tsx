import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

type Arena = {
  _id: string;
  name: string;
  city: string;
  address: string;
  location: string;
  lastUpdated: string;
  [key: string]: any;
};

export default function AdminDashboardTable() {
  const [arenas, setArenas] = useState<Arena[]>([]);
  const [currentChunk, setCurrentChunk] = useState(0);
  const [currentData, setCurrentData] = useState<Arena[]>([]);

  useEffect(() => {
    async function fetchArenas() {
      try {
        const res = await fetch("http://localhost:7000/api/my-arenas");
        const data = await res.json();
        setArenas(data);
      } catch (err) {
        setArenas([]);
      }
    }
    fetchArenas();
  }, []);

  useEffect(() => {
    setCurrentData(arenas.slice(currentChunk * 5, currentChunk * 5 + 5));
  }, [currentChunk, arenas]);

  const handlePrevious = () => {
    if (currentChunk > 0) {
      setCurrentChunk(currentChunk - 1);
    }
  };

  const handleNext = () => {
    if ((currentChunk + 1) * 5 < arenas.length) {
      setCurrentChunk(currentChunk + 1);
    }
  };

  return (
    <div className="flex h-full flex-col">
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
              <h3 className="text-bold text-xl">Arenas</h3>
              <p>My Arenas</p>
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
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-muted">
              <TableHead className="w-[32px]">
                <Checkbox id="select-all" />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Last Updated</TableHead>
            </tr>
          </thead>
          <tbody>
            {currentData.map((arena) => (
              <TableRow key={arena._id}>
                <TableCell>
                  <Checkbox id={`select-${arena._id}`} />
                </TableCell>
                <TableCell className="font-medium">
                  {arena.name ? arena.name.replace(/"/g, "") : ""}
                </TableCell>
                <TableCell>
                  {arena.city ? arena.city.replace(/"/g, "") : ""}
                </TableCell>
                <TableCell>
                  {arena.address ? arena.address.replace(/"/g, "") : ""}
                </TableCell>
                <TableCell>
                  {arena.location ? arena.location.replace(/"/g, "") : ""}
                </TableCell>
                <TableCell>
                  {arena.lastUpdated
                    ? new Date(arena.lastUpdated).toLocaleString()
                    : ""}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border-t border-muted-foreground/20 px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing{" "}
            <strong>{arenas.length === 0 ? 0 : currentChunk * 5 + 1}</strong> to{" "}
            <strong>{Math.min((currentChunk + 1) * 5, arenas.length)}</strong>{" "}
            of <strong>{arenas.length}</strong> results
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

// ChevronLeftIcon
function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
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

// ChevronRightIcon
function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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

// DownloadIcon
function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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

// XIcon
function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
