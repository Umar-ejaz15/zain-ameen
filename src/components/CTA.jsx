import React from "react";
import {
  FaHandshake,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const CTA = () => {
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
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white border-2 border-gray-500 text-black rounded-full hover:bg-gray-600 hover:text-white transition-colors flex items-center gap-2"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between bg-white items-center px-10 py-4 gap-4 mt-8">
        <div className=" text-sm text-gray-900">
          © {new Date().getFullYear()} All rights reserved.
        </div>
        <div className="flex gap-4 justify-center items-center">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1"
          >
            <FaInstagram /> Instagram
          </a>
        </div>
      </div>
    </>
  );
};

export default CTA;