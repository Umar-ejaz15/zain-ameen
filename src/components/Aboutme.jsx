import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import { FaRocket } from "react-icons/fa";
import { BiTrendingUp } from "react-icons/bi";
import { BsFileEarmarkText } from "react-icons/bs";
import { motion } from "framer-motion";

const Aboutme = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: false },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    viewport: { once: false }
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: false },
    transition: { duration: 0.5, ease: "easeOut", delay: 0.4 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="w-full h-auto bg-white md:rounded-b-[170px] px-4 md:px-16 py-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-sm flex justify-center items-center py-10"
        >
          <div className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-zinc-300 to-zinc-300"></div>
          <motion.h1 
           
            className="px-6 md:px-10 w-32 md:w-40 py-2 md:py-3 rounded-md -rotate-12 text-black bg-gradient-to-r from-zinc-200 to-zinc-300 text-xs md:text-sm font-medium shadow-md"
          >
            About me
          </motion.h1>
          <div className="h-[2px] w-1/2 bg-gradient-to-l from-transparent via-zinc-300 to-zinc-300"></div>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, margin: "-50px" }}
          className="text-[#2A2A2A] space-y-8 text-base md:text-lg"
        >
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl leading-relaxed"
          >
            This is Zain Ul Abdin, a{" "}
            <strong className="text-zinc-600">Product Marketing Specialist</strong> &{" "}
            <strong className="text-zinc-700">Growth Strategist</strong> who lives and breathes{" "}
            <strong className="text-zinc-600">digital marketing</strong>. From <strong className="text-zinc-700">SEO</strong>{" "}
            dominance to <strong className="text-zinc-600">Reddit growth hacking</strong>, I don't just
            follow trends—I create them. (I know what you're thinking...
            "Another marketing guy hyping himself up." But stay with me.)
          </motion.p>

          <motion.div variants={staggerContainer} className="space-y-6">
            <motion.div 
              variants={scaleIn}
              className="flex items-start p-4 bg-zinc-200 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <FaRocket className="text-2xl md:text-3xl mr-4 text-zinc-600 flex-shrink-0" />
              <p className="text-xl md:text-xl">
                Scaled <strong className="text-zinc-700">Blainy</strong> to{" "}
                <strong>50,000+ organic users</strong> and{" "}
                <strong>200+ paying customers</strong> in just a year—NO ads, NO
                shortcuts, just pure <strong className="text-zinc-600">SEO</strong> &{" "}
                <strong className="text-zinc-700">Reddit power</strong> (we're talking{" "}
                <strong>8.9M+ impressions</strong> from SEO and thousands of
                conversions).
              </p>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              className="flex items-start p-4 bg-zinc-200 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <BiTrendingUp className="text-2xl md:text-3xl mr-4 text-zinc-600 flex-shrink-0" />
              <p className="text-xl md:text-xl">
                Delivered <strong className="text-zinc-700">4,600+ conversions</strong> via Reddit in just
                5 months, consistently driving <strong className="text-zinc-600">10x ROI</strong> while
                others were still figuring out how to post.
              </p>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              className="flex items-start p-4 bg-zinc-100 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <BsFileEarmarkText className="text-2xl md:text-3xl mr-4 text-zinc-600 flex-shrink-0" />
              <p className="text-xl md:text-xl">
                Want proof? Check the <strong className="text-zinc-700">case studies</strong>. Or better
                yet, let's make YOUR business the next success story.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Aboutme;