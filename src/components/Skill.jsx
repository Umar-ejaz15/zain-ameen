import React from "react";
import Tilt from "react-parallax-tilt";
import LocomotiveScroll from "locomotive-scroll";

const Skill = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const data = [
    {
      icon: "🚀",
      heading: " Growth & Organic Marketing",
      para: " I don't just increase visibility —I scale brands from zero to tens of thousands of users using proven strategies. 8.9M+ organic impressions, 50K+ users, 200+ paying customers, and zero ad spend. Sounds good? That's just the beginning.",
    },
    {
      icon: "🔥",
      heading: " Reddit & Social Growth",
      para: " Reddit is a goldmine—if you know how to use it. I've driven 4,600+ conversions in just 5 months while others are still figuring out how to post. Oh, and I've also helped brands grow followers on YouTube, LinkedIn, Instagram, Threads,  and TikTok.",
    },
    {
      icon: "📈",
      heading: " SEO That Actually Delivers",
      para: "Forget useless traffic. I don't just rank content; I rank SaaS products on Google's front page and drive 200%+ organic growth—no gimmicks, just data-backed SEO that works.",
    },
    {
      icon: "🎯",
      heading: " Content That Sells, Not Just Ranks",
      para: " Millions in revenue, 1,000+ monthly conversions from Reddit alone, and SEO-powered articles that turn clicks into customers. If it doesn't convert, what's the point?",
    },
    {
      icon: "💰",
      heading: " Product Growth & Optimization",
      para: " I don't just market products—I scale them. Led Blainy from 0 to 50K+ organic users in a year, fine-tuning everything from positioning to user retention. More traffic, more conversions, less wasted budget.",
    },
  ];
  return (
    <div className="w-full h-auto  bg-[#F4F3F2] rounded-b-[100px] rounded-t-[100px]  md:rounded-b-[170px] md:rounded-t-[170px] px-4 md:px-16 py-10">
      <div className="text-center text-sm flex justify-center items-center py-10">
        <div className="h-[1px] w-full bg-zinc-300"></div>
        <h1 className="px-10 py-3 rounded-md -rotate-12 bg-white w-fit text-sm font-medium">
          Services
        </h1>
        <div className="h-[1px] w-full bg-zinc-300"></div>
      </div>
      <div className=" flex justify-center items-center">
        <div className="cards w-full px-5 md:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-baseline justify-items-center">
          {data.map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              perspective={800}
              transitionSpeed={1500}
              scale={1}
            >
              <div className="card w-full max-w-md border-[.2px] p-2 border-gray-600/60 rounded-lg hover:shadow-lg transition-all duration-300 group flex flex-col gap-10 h-[390px] hover:scale-105">
                <div className="icon text-5xl grayscale group-hover:grayscale-1 text-center">
                  {item.icon}
                </div>
                <div className="info space-y-4">
                  <h2 className="text-2xl text-center font-bold bg-gradient-to-br from-[#1D1D1D] to-[#60605F] bg-clip-text text-transparent">
                    {item.heading}
                  </h2>
                  <p className="text-md text-center text-gray-700 leading-relaxed">
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
