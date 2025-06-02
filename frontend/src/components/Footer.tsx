const Footer = () => {
  return (
    <div className="bg-gray-800 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-400">
        <div className="pl-20">
          <h3 className="text-white font-semibold mb-4">Home</h3>
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Quick Booking
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Search by Sports
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Top Rated Arenas
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Newly Added Arenas
              </a>
            </li>
          </ul>
        </div>
        <div className="pl-8">
          <h3 className="text-white font-semibold mb-4">About Us</h3>
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Quick Booking
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Search by Sports
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Top Rated Arenas
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Newly Added Arenas
              </a>
            </li>
          </ul>
        </div>
        <div className="pl-4">
          <h3 className="text-white font-semibold mb-4">Help</h3>
          <ul>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Report a Bug
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Search by Sports
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Top Rated Arenas
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Newly Added Arenas
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-5 border-t border-gray-700 pt-6 pl-20">
        <p className="text-gray-500 ">
          &copy; 2022 | Arena Ground Booking System, L.K.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-white">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
