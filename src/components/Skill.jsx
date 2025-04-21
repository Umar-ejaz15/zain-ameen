import React from "react";
import Tilt from "react-parallax-tilt";
import LocomotiveScroll from "locomotive-scroll";
import { FaRocket, FaReddit, FaChartLine, FaBullseye, FaMoneyBillWave } from "react-icons/fa";

const Skill = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const data = [
    {
      icon: <FaRocket className="text-5xl text-blue-600 group-hover:text-blue-700 transition-all duration-300" />,
      heading: "Growth & Organic Marketing",
      para: "I don't just increase visibility —I scale brands from zero to tens of thousands of users using proven strategies. 8.9M+ organic impressions, 50K+ users, 200+ paying customers, and zero ad spend. Sounds good? That's just the beginning.",
    },
    {
      icon: <FaReddit className="text-5xl text-orange-600 group-hover:text-orange-700 transition-all duration-300" />,
      heading: "Reddit & Social Growth",
      para: "Reddit is a goldmine—if you know how to use it. I've driven 4,600+ conversions in just 5 months while others are still figuring out how to post. Oh, and I've also helped brands grow followers on YouTube, LinkedIn, Instagram, Threads,  and TikTok.",
    },
    {
      icon: <FaChartLine className="text-5xl text-green-600 group-hover:text-green-700 transition-all duration-300" />,
      heading: "SEO That Actually Delivers",
      para: "Forget useless traffic. I don't just rank content; I rank SaaS products on Google's front page and drive 200%+ organic growth—no gimmicks, just data-backed SEO that works.",
    },
    {
      icon: <FaBullseye className="text-5xl text-red-600 group-hover:text-red-700 transition-all duration-300" />,
      heading: "Content That Sells, Not Just Ranks",
      para: "Millions in revenue, 1,000+ monthly conversions from Reddit alone, and SEO-powered articles that turn clicks into customers. If it doesn't convert, what's the point?",
    },
    {
      icon: <FaMoneyBillWave className="text-5xl text-purple-600 group-hover:text-purple-700 transition-all duration-300" />,
      heading: "Product Growth & Optimization",
      para: "I don't just market products—I scale them. Led Blainy from 0 to 50K+ organic users in a year, fine-tuning everything from positioning to user retention. More traffic, more conversions, less wasted budget.",
    },
  ];
  return (
    <div className="w-full h-auto bg-[#F4F3F2] rounded-b-[100px] rounded-t-[100px] md:rounded-b-[170px] md:rounded-t-[170px] px-4 md:px-16 py-10">
      <div className="text-center text-sm flex justify-center items-center py-10">
        <div className="h-[1px] w-full bg-zinc-300"></div>
        <h1 className="px-10 py-3 rounded-md -rotate-12 bg-white w-fit text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300">
          Services
        </h1>
        <div className="h-[1px] w-full bg-zinc-300"></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="cards w-full px-5 md:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-baseline justify-items-center">
          {data.map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={800}
              transitionSpeed={1500}
              scale={1}
            >
              <div className="card w-full max-w-md border-[.2px] p-6 border-gray-300 rounded-2xl hover:shadow-2xl transition-all duration-300 group flex flex-col gap-8 h-[400px] bg-white hover:bg-gradient-to-b hover:from-white hover:to-gray-50">
                <div className="icon flex justify-center items-center">
                  {item.icon}
                </div>
                <div className="info space-y-4">
                  <h2 className="text-2xl text-center font-bold bg-gradient-to-br from-[#1D1D1D] to-[#60605F] bg-clip-text text-transparent group-hover:from-black group-hover:to-gray-800">
                    {item.heading}
                  </h2>
                  <p className="text-md text-center text-gray-700 leading-relaxed group-hover:text-gray-800">
                    {item.para}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;