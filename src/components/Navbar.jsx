import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("zain.ul.abdin558120@gmail.com")
      .then(() => {
        const notification = document.createElement("div");
        notification.textContent = "Email copied!";
        notification.style.cssText =
          "position:fixed;top:20px;left:50%;transform:translate(-50%, -50%);padding:10px;background:#333;color:white;border-radius:5px;";
        document.body.appendChild(notification);
        setTimeout(() => document.body.removeChild(notification), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  const handleDownloadCV = () => {
    window.open("/Zain Ul Abdin PMA CV.pdf", "_blank");
  };

  return (
    <nav className="w-full bg-[#F4F3F2] absolute top-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <h1 className="text-md sm:text-sm truncate">zain.ul.abdin558120@gmail.com</h1>
              <div className="flex space-x-2">
                <button
                  className="px-10 sm:px-10 text-lg cursor-pointer hover:bg-gray-200 py-1 sm:py-2 bg-white text-black rounded-full transition-colors"
                  onClick={handleCopyEmail}
                >
                  Copy
                </button>
                <button
                  className="px-10 sm:px-10 text-lg cursor-pointer hover:bg-gray-200 py-1 sm:py-2 bg-white text-black rounded-full transition-colors"
                  onClick={handleDownloadCV}
                >
                  CV
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-8">
              <li>
                <a
                  href="/"
                  className="text-sm lg:text-base hover:text-gray-700 hover:underline transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-sm lg:text-base hover:text-gray-700 hover:underline transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="text-sm lg:text-base hover:text-gray-700 hover:underline transition-colors"
                >
                  Portfolio
                </a>
              </li>
            </ul>
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
        <div className="px-4 pt-2 pb-4 space-y-2">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base hover:bg-gray-100 transition-colors"
          >
            Home
          </a>
          <a
            href="/projects"
            className="block px-3 py-2 rounded-md text-base hover:bg-gray-100 transition-colors"
          >
            Projects
          </a>
          <a
            href="/portfolio"
            className="block px-3 py-2 rounded-md text-base hover:bg-gray-100 transition-colors"
          >
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;