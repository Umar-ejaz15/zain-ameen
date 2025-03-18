import React from "react";
import LocomotiveScroll from "locomotive-scroll";

const Aboutme = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-auto bg-white md:rounded-b-[170px] px-4 md:px-16 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-sm flex justify-center items-center py-10">
          <div className="h-[1px] w-1/2 bg-zinc-300"></div>
          <h1 className="px-6 md:px-10 w-32 md:w-40 py-2 md:py-3 rounded-md -rotate-12 text-black bg-zinc-300 text-xs md:text-sm font-medium">
            About me
          </h1>
          <div className="h-[1px] w-1/2 bg-zinc-300"></div>
        </div>{" "}
        <div className="text-[#2A2A2A] space-y-6 text-base md:text-lg">
          <p className="text-xl md:text-2xl">
            This is Zain Ul Abdin, a{" "}
            <strong>Product Marketing Specialist</strong> &{" "}
            <strong>Growth Strategist</strong> who lives and breathes{" "}
            <strong>digital marketing</strong>. From <strong>SEO</strong>{" "}
            dominance to <strong>Reddit growth hacking</strong>, I don't just
            follow trends—I create them. (I know what you're thinking...
            "Another marketing guy hyping himself up." But stay with me.)
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-xl md:text-2xl mr-2">🚀</span>
              <p className="text-xl md:text-xl">
                Scaled <strong>Blainy</strong> to{" "}
                <strong>50,000+ organic users</strong> and{" "}
                <strong>200+ paying customers</strong> in just a year—NO ads, NO
                shortcuts, just pure <strong>SEO</strong> &{" "}
                <strong>Reddit power</strong> (we're talking{" "}
                <strong>8.9M+ impressions</strong> from SEO and thousands of
                conversions).
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-xl md:text-2xl mr-2">📈</span>
              <p className="text-xl md:text-xl">
                Delivered <strong>4,600+ conversions</strong> via Reddit in just
                5 months, consistently driving <strong>10x ROI</strong> while
                others were still figuring out how to post.
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-xl md:text-2xl mr-2">🚀</span>
              <p className="text-xl md:text-xl">
                Want proof? Check the <strong>case studies</strong>. Or better
                yet, let's make YOUR business the next success story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
