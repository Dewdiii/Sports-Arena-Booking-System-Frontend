import TopImage from "../assets/Top Rated Arenas .png";

const TopRate = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex flex-col items-center gap-2">
        <img
          src={TopImage} // Use the imported image variable here
          alt="Hero Section Image"
          style={{
            maxWidth: "850px",
            maxHeight: "500px",
            width: "100%",
            height: "auto",
          }} // Adjusted style for smaller size
        />
      </div>
    </div>
  );
};

export default TopRate;
