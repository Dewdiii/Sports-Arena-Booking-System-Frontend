import ArenaBookingCard from "../components/ArenaBookingCard";
import RatingDisplay from "../components/Rating";
import LiveAvailabilityComponent from "../components/LiveAvailabilityCard";
import ArenaAvailabilityDetails from "@/components/ArenaAvailabilityDetails";

export default function Arena() {
  const largeArenaImage = {
    title: "a",
    imgSrc: "src/assets/arena-large.png",
  };
  const arenaImages = [
    {
      title: "b",
      imgSrc: "src/assets/arena-small-1.png",
    },
    {
      title: "c",
      imgSrc: "src/assets/arena-small-2.png",
    },
    {
      title: "d",
      imgSrc: "src/assets/arena-small-3.png",
    },
    {
      title: "e",
      imgSrc: "src/assets/arena-small-4.png",
    },
  ];
  const stadium = {
    name: "KHR Indoor Stadium",
    address: "No. 123, Galle Road, Colombo 03",
    telephone: "011 2345678",
    rating: 4.2,
  };
  return (
    <>
      <div>
        <div className="container mx-auto p-4 space-y-4">
          <h2 className="text-lg font-bold mb-4 text-teal-900">Arenas</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-2/3">
              <img
                src={largeArenaImage.imgSrc}
                alt={largeArenaImage.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/3 grid grid-cols-2 gap-2">
              {arenaImages.map((arena, index) => (
                <div key={index} className="relative h-[196px]">
                  <img
                    src={arena.imgSrc}
                    alt={arena.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-teal-800 h-56 rounded-lg text-white p-4 flex flex-row gap-y-4">
            <div className="md:w-2/3 h-full px-16 flex items-center justify-between">
              <div>
                <div className="flex flex-col">
                  <h2 className="font-bold text-3xl">{stadium.name}</h2>
                  <p className="mt-2">
                    <span className="flex items-center gap-x-2">
                      <LandmarkIcon />
                      {stadium.address}
                    </span>
                  </p>
                  <p className="mt-1">
                    <span className="flex items-center gap-x-2">
                      <TelephoneIcon />
                      {stadium.telephone}
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <RatingDisplay rating={stadium.rating} />
                </div>
              </div>
            </div>
            <div className=" w-[400px] rounded-2xl bg-white m-4"></div>
          </div>
          <div className="flex flex-row">
            <LiveAvailabilityComponent />
            <ArenaBookingCard />
          </div>
          <div>
            <ArenaAvailabilityDetails />
          </div>
        </div>
      </div>
    </>
  );
}

function LandmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="17"
      height="24"
      viewBox="0 0 17 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 0C3.80071 0 0 3.756 0 8.4C0 10.488 0.607143 12.444 1.71214 14.208C2.86571 16.056 4.38357 17.64 5.54929 19.488C6.12 20.388 6.53286 21.228 6.97 22.2C7.28571 22.86 7.54071 24 8.5 24C9.45929 24 9.71429 22.86 10.0179 22.2C10.4671 21.228 10.8679 20.388 11.4386 19.488C12.6043 17.652 14.1221 16.068 15.2757 14.208C16.3929 12.444 17 10.488 17 8.4C17 3.756 13.1993 0 8.5 0ZM8.5 11.7C6.82429 11.7 5.46429 10.356 5.46429 8.7C5.46429 7.044 6.82429 5.7 8.5 5.7C10.1757 5.7 11.5357 7.044 11.5357 8.7C11.5357 10.356 10.1757 11.7 8.5 11.7Z"
        fill="white"
      />
    </svg>
  );
}

function TelephoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.01 12.88C15.78 12.88 14.59 12.68 13.48 12.32C13.13 12.2 12.74 12.29 12.47 12.56L10.9 14.53C8.07 13.18 5.42 10.63 4.01 7.7L5.96 6.04C6.23 5.76 6.31 5.37 6.2 5.02C5.83 3.91 5.64 2.72 5.64 1.49C5.64 0.95 5.19 0.5 4.65 0.5H1.19C0.65 0.5 0 0.74 0 1.49C0 10.78 7.73 18.5 17.01 18.5C17.72 18.5 18 17.87 18 17.32V13.87C18 13.33 17.55 12.88 17.01 12.88Z"
        fill="white"
      />
    </svg>
  );
}
