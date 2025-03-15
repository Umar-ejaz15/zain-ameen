import React from "react";

const Main = () => {
  return (
    <main>
      <div className="w-full md:h-auto min-h-screen py-15 bg-[#F4F3F2] rounded-b-[100px] md:rounded-b-[170px]  hero flex flex-col  items-center justify-center">
        <div className="imgsection relative">
          <img
            className="rounded-full w-40 h-40 object-center object-cover"
            src="/profile.jpg"
            alt="Hero background"
          />
          <div className="imgoverlay text-sm  top-0 rounded-md  -rotate-12 -right-20 absolute animate-bounce px-6 bg-white py-3">
            zain ul abidin 👋🏼
          </div>
        </div>
        <div className="info w-full md:w-1/2 text-5xl md:text-7xl mt-5 text-center font-medium bg-gradient-to-br from-[#1D1D1D] to-[#60605F] bg-clip-text text-transparent tracking-tighter leading-none">
          <h1>Product Marketing Specialist</h1>
          <h2>& Growth Specialist</h2>
        </div>
      </div>
    </main>
  );
};

export default Main;
