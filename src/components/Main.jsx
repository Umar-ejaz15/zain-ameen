import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";

const Main = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <main>
      <div className="w-full min-h-screen py-15 bg-[#F4F3F2] rounded-b-[100px] md:rounded-b-[170px] hero flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="imgsection relative mt-20"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-full w-40 h-40 object-center object-cover"
            src="/pfp.jpg"
            alt="Hero background"
          />
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="imgoverlay text-sm top-0 rounded-md -rotate-12 -right-20 absolute px-6 bg-white py-3 shadow-lg"
          >
            Zain Ul Abdin 👋🏼
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="info w-full md:w-1/2 text-5xl md:text-6xl mt-5 text-center font-medium bg-gradient-to-br from-[#1D1D1D] to-[#60605F] bg-clip-text text-transparent tracking-tighter leading-none"
        >
          <motion.h1 
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Product Marketing
          </motion.h1>
          <motion.h1 
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6 }}
          >
            Specialist &
          </motion.h1>
          <motion.h2 
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.7 }}
          >
            Growth Specialist
          </motion.h2>
        </motion.div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-10 cursor-pointer bg-gray-900 text-white px-6 py-2 rounded-full transition-all shadow-md hover:shadow-xl"
        >
          Currently Available
        </motion.button>
      </div>
    </main>
  );
};

export default Main;