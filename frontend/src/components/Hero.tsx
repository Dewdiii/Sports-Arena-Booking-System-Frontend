import heroImage from "../assets/Hero Section.png";

const HeroComponent = () => {
  return (
    <div className="bg-gray-800">
      <div className="container mx-auto flex flex-col items-center gap-2">
        <img
          src={heroImage} // Use the imported image variable here
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

export default HeroComponent;
