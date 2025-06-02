import Navbar from "../components/Navbar";
interface Props {
  children: React.ReactNode;
}

const LogoNavbar = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="container mx-auto py-20 flex-1">{children}</div>
    </div>
  );
};

export default LogoNavbar;
