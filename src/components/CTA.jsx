import React from "react";
import LocomotiveScroll from "locomotive-scroll";

import { FaHandshake, FaEnvelope, FaPhone } from "react-icons/fa";

const CTA = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center py-12 bg-white rounded-t-[170px]">
        <FaHandshake className="text-8xl text-gray-800" />
        <div className="info w-full md:w-1/2 px-4 text-4xl md:text-5xl mt-5 text-center font-medium bg-gradient-to-br from-[#1D1D1D] to-[#60605F] bg-clip-text text-transparent tracking-tighter leading-none mb-8">
          Tell me about your next project
        </div>
        <div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:zain.ul.abdin558120@gmail.com"
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <FaEnvelope /> Email Me
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <FaPhone /> Book a Call
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white items-center px-10 py-4">
        <div className="text-sm text-gray-900">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </>
  );
};

export default CTA;
