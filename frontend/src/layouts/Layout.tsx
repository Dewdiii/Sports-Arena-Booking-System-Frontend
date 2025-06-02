import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewlyAddedArenas from "../components/NewlyAddedArenas";

import SportsList from "../components/SportsList";
import TopRate from "../components/TopRate";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <br />
      <br />
      <h2 className="text-m mb-4 font-bold text-teal-900 ">Quick Booking</h2>
      <SportsList />
      <div className="container mx-auto py-2 flex-1">{children}</div>
      <TopRate />
      <br />
      <br />
      <NewlyAddedArenas />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Layout;
