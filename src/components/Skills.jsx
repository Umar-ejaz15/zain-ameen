import {
  FaSearch,
  FaGoogle,
  FaChartLine,
  FaBullhorn,
  FaSearchengin,
  FaKeyboard,
  FaHashtag,
  FaTools,
  FaCogs,
  FaReddit,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsList = [
    {
      icon: FaSearch,
      title: "Search Engine Optimization (SEO)",
      color: "text-blue-600",
    },
    {
      icon: FaGoogle,
      title: "Google Analytics 4 (GA4)",
      color: "text-[#4285F4]",
    },
    {
      icon: FaChartLine,
      title: "SaaS Product Marketing",
      color: "text-green-600",
    },
    {
      icon: FaBullhorn,
      title: "Content Marketing Strategy",
      color: "text-yellow-600",
    },
    {
      icon: FaSearchengin,
      title: "Google Search Console",
      color: "text-[#DB4437]",
    },
    {
      icon: FaKeyboard,
      title: "Keyword Research & Analysis",
      color: "text-purple-600",
    },
    { icon: FaHashtag, title: "Social Media Marketing", color: "text-sky-500" },
    { icon: FaTools, title: "SEMrush & Ahrefs", color: "text-gray-700" },
    { icon: FaCogs, title: "Campaign Management", color: "text-orange-500" },
    { icon: FaReddit, title: "Reddit Marketing", color: "text-[#FF4500]" },
  ];

  return (
    <>
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-sm flex justify-center items-center py-10"
      >
        <div className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-zinc-300 to-zinc-300"></div>
        <motion.h1 className="px-6 md:px-10 w-32 md:w-40 py-2 md:py-3 rounded-md -rotate-12 text-black bg-gradient-to-r from-zinc-200 to-zinc-300 text-xs md:text-sm font-medium shadow-md">
          SKills
        </motion.h1>
        <div className="h-[2px] w-1/2 bg-gradient-to-l from-transparent via-zinc-300 to-zinc-300"></div>
      </motion.div>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        className="w-full py-30 sm:py-16 md:py-20 px-4 bg-white"
      >
        <div className="px-5 md:px-20 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillsList.map((skill, index) => (
              <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: false }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.05,
                }}
                key={index}
                className="flex items-center bg-white rounded-xl p-4 sm:p-5 cursor-pointer shadow-lg hover:shadow-xl border border-white hover:border-zinc-800 transition-all group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <skill.icon
                    className={`w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 ${skill.color} group-hover:${skill.color}`}
                  />
                </motion.div>
                <h3 className="font-semibold text-zinc-800 text-sm sm:text-base">
                  {skill.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
