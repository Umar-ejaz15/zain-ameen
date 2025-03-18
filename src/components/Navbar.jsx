import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadCV = () => {
    window.open("/Zain Ul Abdin PMA CV.pdf", "_blank");
  };

  return (
    <nav className="w-full bg-[#F4F3F2] absolute top-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="left flex flex-col justify-center items-center mb-4 md:mb-0">
              <div>
                <h1 className="text-3xl md:text-4xl text-gray-800 font-bold uppercase text-center">
                  Zain Ul Abdin
                </h1>
              </div>
              <div className="text-[6px] md:text-[7.2px] flex flex-wrap gap-1 justify-center content-center">
                <h2 className="text-black">Product Marketing Specialist |</h2>
                <h2 className="text-black">Social Media Marketing | </h2>
                <h2 className="text-black">Digital Marketing Specialist</h2>
              </div>
            </div>
          </div>

          <div className="hidden md:flex gap-3 justify-center items-center">
            <ul className="flex space-x-4 lg:space-x-8">
              <li>
                <a
                  href="/"
                  className="text-sm lg:text-base hover:text-gray-700 hover:underline transition-colors"
                >
                  Home
                </a>
              </li>
              <div className="flex gap-2 justify-center items-center">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <li>
                  <a
                    href="/portfolio"
                    className="text-xs lg:text-base hover:text-gray-700 hover:underline transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
              </div>
            </ul>
            <button onClick={handleDownloadCV} className="px-8 text-sm font-medium rounded-md py-3 border-[.2px] border-gray-800 hover:bg-gray-800 hover:text-white">
              Get My CV
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute w-full bg-[#F4F3F2] shadow-lg`}
      >
        <div className="px-4 py-3 space-y-4">
          <a
            href="/"
            className="block text-sm hover:text-gray-700 hover:underline transition-colors"
          >
            Home
          </a>
          <a
            href="/portfolio"
            className="block text-sm hover:text-gray-700 hover:underline transition-colors"
          >
            Portfolio
          </a>
          <button onClick={handleDownloadCV} className="w-full text-sm font-medium rounded-md py-3 border-[.2px] border-gray-800 hover:bg-gray-800 hover:text-white">
            Get My CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;