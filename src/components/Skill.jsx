import React from "react";

const Skill = () => {
  const data = [
    {
      icon: "🚀",
      heading: " Growth & Organic Marketing",
      para: " I don’t just “increase visibility”—I scale brands from zero to tens of thousands of users using proven strategies. 8.9M+ organic impressions, 50K+ users, 200+ paying customers, and zero ad spend. Sounds good? That’s just the beginning.",
    },
    {
      icon: "🔥",
      heading: " Reddit & Social Growth",
      para: " Reddit is a goldmine—if you know how to use it. I’ve driven 4,600+ conversions in just 5 months while others are still figuring out how to post. Oh, and I’ve also helped brands grow followers on YouTube, LinkedIn, Instagram, Threads,  and TikTok.",
    },
    {
      icon: "📈",
      heading: " SEO That Actually Delivers",
      para: "Forget useless traffic. I don’t just rank content; I rank SaaS products on Google’s front page and drive 200%+ organic growth—no gimmicks, just data-backed SEO that works.",
    },
    {
      icon: "🎯",
      heading: " Content That Sells, Not Just Ranks",
      para: " Millions in revenue, 1,000+ monthly conversions from Reddit alone, and SEO-powered articles that turn clicks into customers. If it doesn’t convert, what’s the point?",
    },
    {
      icon: "💰",
      heading: " Product Growth & Optimization",
      para: " I don’t just market products—I scale them. Led Blainy from 0 to 50K+ organic users in a year, fine-tuning everything from positioning to user retention. More traffic, more conversions, less wasted budget.",
    },
  ];
  return (
    <div className="w-full h-auto  bg-[#F4F3F2] rounded-b-[100px] rounded-t-[100px] py-20 md:rounded-b-[170px] md:rounded-t-[170px] px-4 md:px-16 py-10">
      <div className="text-center text-sm flex justify-center items-center py-10">
        <div className="h-[1px] w-full bg-zinc-300"></div>
        <h1 className="px-10 py-3 rounded-md -rotate-12 bg-white w-fit text-sm font-medium">
          Services
        </h1>
        <div className="h-[1px] w-full bg-zinc-300"></div>
      </div>
      <div className="cards w-full md:w-2/3 md:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="card flex flex-col md:flex-col  justify-center gap-5"
          >
            <div className="icon text-6xl text-center md:text-left grayscale">{item.icon}</div>
            <div className="info">
              <h2 className="text-xl text-center  md:text-left font-bold bg-gradient-to-br from-[#1D1D1D] to-[#60605F] bg-clip-text text-transparent ">{item.heading}</h2>
              <p className="text-md  md:text-left text-center">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
