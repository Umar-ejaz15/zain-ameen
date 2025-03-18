import React from "react";
import LocomotiveScroll from "locomotive-scroll";

const Main = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main>
      <div className="w-full min-h-screen py-15 bg-[#F4F3F2] rounded-b-[100px] md:rounded-b-[170px]  hero flex flex-col  items-center justify-center">
        <div className="imgsection relative mt-20">
          <img
            className="rounded-full w-40 h-40 object-center object-cover"
            src="/profile.jpg"
            alt="Hero background"
          />
          <div className="imgoverlay text-sm  top-0 rounded-md  -rotate-12 -right-20 absolute animate-bounce px-6 bg-white py-3">
            zain ul abidin 👋🏼
          </div>
        </div>
        <div className="info w-full md:w-1/2 text-5xl md:text-6xl mt-5 text-center font-medium bg-gradient-to-br from-[#1D1D1D] to-[#60605F] bg-clip-text text-transparent tracking-tighter leading-none">
          <h1>Product Marketing Specialist</h1>
          <h2>& Growth Specialist</h2>
        </div>
        <button className="mt-10 cursor-pointer hover:bg-gray-900 hover:text-white bg-gray-100 text-gray-800 border border-gray-900 px-6 py-2 rounded-full hover:bg-gray-200 transition-all">
          Currently Available
        </button>{" "}
      </div>
    </main>
  );
};

export default Main;
