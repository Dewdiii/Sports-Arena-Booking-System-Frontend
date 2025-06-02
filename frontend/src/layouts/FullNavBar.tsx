import NavigationBar from "../components/NavigationBar";

interface Props {
  children: React.ReactNode;
}

const FullNavbar = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <div className="container mx-auto py-20 flex-1">{children}</div>
    </div>
  );
};

export default FullNavbar;
