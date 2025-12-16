import { useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close menu after navigation
  };

  return (
    <>
      <nav className="relative w-full z-20 bg-slate-100 border md:flex md:justify-center text-black">
        <div className="bg-slate-100 max-w-screen-2xl md:flex md:items-center md:justify-evenly md:w-11/12 lg:flex lg:items-center lg:justify-between border-black">
          {/* Logo Section */}
          <a
            href="#home"
            className="flex justify-center items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/assets/logo.png" className="h-12 md:h-20 rounded-full" alt="" />
            <span className="flex self-center text-xl md:text-3xl lg:text-4xl font-semibold">
              <div className="flex items-center justify-center">
                <div className="flex flex-col">
                  <h3 style={{ fontFamily: 'Samarkan, cursive' }}>Shiv Shakti</h3>
                  <h3
                    className="title-2"
                    style={{ fontFamily: 'Oswald, serif' }}
                  >
                    Tours & Travels
                  </h3>
                </div>
              </div>
            </span>
            <img className="h-16 md:h-24 w-auto" src="/assets/car.gif" alt="" />
          </a>

          {/* Hamburger Menu */}
          <div className="block md:hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-7 h-7 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-auto md:w-auto md:flex md:items-center md:justify-between md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-gray-100 rounded-lg bg-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 md:text-lg text-black md:bg-transparent md:text-black md:hover:text-white md:hover:scale-125 md:hover:bg-black md:p-1 transition-all"
                  aria-current="page"
                  onClick={() => handleScrollToSection('home')}
                >
                  Home
                </Link>
              </li>
              <li
                className="relative group w-auto flex"
                ref={dropdownRef}
              >
                <a
                  className="relative flex items-center py-2 px-3 md:text-lg md:hover:bg-black md:hover:text-white md:hover:scale-125 md:p-1 transition-all group-hover:bg-black group-hover:text-white group-hover:scale-125 cursor-pointer"
                >
                  City Tours
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-8 w-8 pl-2"
                  >
                    <path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path>
                  </svg>
                </a>
                <div
                  className={`bg-white w-72 absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transform transition-all duration-300 text-black shadow-md`}
                >
                  <Link
                    to="/places/OneDayTour"
                    className="block text-left px-4 py-2 hover:bg-gray-100 border-b rounded-t"
                    onClick={() => setIsOpen(false)}
                  >
                    One Day Tours
                  </Link>
                  <Link
                    to="/places/Delhi Darshan"
                    className="block px-4 py-2 hover:bg-gray-100 border-b rounded-t"
                    onClick={() => setIsOpen(false)}
                  >
                    Delhi Darshan <div className='text-red-600 inline-block font-light text-xs rounded border-dotted border-2 border-red-600 p-1'>Exciting Offers</div>
                  </Link>
                  <Link
                    to="/places/Char Dham Yatra"
                    className="block space-x-2 px-4 py-2 hover:bg-gray-100 border-b rounded-t"
                    onClick={() => setIsOpen(false)}
                  >
                    Char Dham Yatra <div className='text-red-600 inline-block font-light text-xs rounded border-dotted border-2 border-red-600 p-1'>Exciting Offers</div>
                  </Link>
                  <Link
                    to="/places/Mathura - Vrindavan Tour"
                    className="block px-4 py-2 border-b hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Mathura - Vrindavan Tour
                  </Link>
                  <Link
                    to="/places/Agra Tour"
                    className="block px-4 py-2 hover:bg-gray-100  border-b rounded-t-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Agra Tour
                  </Link>
                  <Link
                    to="/places/Jaipur Tour"
                    className="block px-4 py-2 border-b hover:bg-gray-100 rounded-b-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Jaipur Tour
                  </Link>
                  <Link
                    to="/places/Mata Vaishno Devi Temple"
                    className="block px-4 py-2 border-b hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Mata Vaishno Devi Temple
                  </Link>
                  <Link
                    to="/places/Ayodhya Tour"
                    className="block px-4 py-2 border-b hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Ayodhya Tour
                  </Link>
                  <Link
                    to="/places/Himachal Pradesh Tour"
                    className="block px-4 py-2 border-b hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Himachal Pradesh Tour
                  </Link>
                  <Link
                    to="/places/Omkareshwar & Mahakaleshwar Temple"
                    className="block px-4 py-2 border-b hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Omkareshwar & Mahakaleshwar Temple
                  </Link>
                  
                  <Link
                    to="/places/Khatu Shyam Ji & Salasar Balaji Temple"
                    className="block px-4 py-2 border-b hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Khatu Shyam Ji & Salasar Balaji Temple
                  </Link>
                  <Link
                    to="/places/Uttarakhand Tour"
                    className="block px-4 py-2 border-b hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Uttarakhand Tour
                  </Link>
                  <Link
                    to="/places/Amritsar Tour"
                    className="block px-4 py-2 border-b hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Amritsar Tour
                  </Link>
                </div>
              </li>

              <li>
                <a
                  className="block py-2 px-3 md:text-lg md:text-black hover:bg-black md:hover:text-white md:hover:scale-125 transition-all md:hover:bg-black md:p-1 cursor-pointer"
                  onClick={() => handleScrollToSection('about')}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="block py-2 px-3 md:text-lg md:text-black hover:bg-gray-100 md:hover:text-white md:hover:scale-125 transition-all md:hover:bg-black md:p-1 cursor-pointer"
                  onClick={() => handleScrollToSection('contact')}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
