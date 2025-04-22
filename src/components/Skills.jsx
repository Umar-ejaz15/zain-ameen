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
    { icon: FaSearch, title: "Search Engine Optimization (SEO)", color: "text-blue-600" },
    { icon: FaGoogle, title: "Google Analytics 4 (GA4)", color: "text-[#4285F4]" },
    { icon: FaChartLine, title: "SaaS Product Marketing", color: "text-green-600" },
    { icon: FaBullhorn, title: "Content Marketing Strategy", color: "text-yellow-600" },
    { icon: FaSearchengin, title: "Google Search Console", color: "text-[#DB4437]" },
    { icon: FaKeyboard, title: "Keyword Research & Analysis", color: "text-purple-600" },
    { icon: FaHashtag, title: "Social Media Marketing", color: "text-sky-500" },
    { icon: FaTools, title: "SEMrush & Ahrefs", color: "text-gray-700" },
    { icon: FaCogs, title: "Campaign Management", color: "text-orange-500" },
    { icon: FaReddit, title: "Reddit Marketing", color: "text-[#FF4500]" },
  ];

  return (
    <>
     <motion.div 
       initial={{  y: -20 }}
       whileInView={{  y: 0 }}
       
       viewport={{ once: false }}
       transition={{ duration: 0.6, ease: "easeOut" }}
       className="text-center text-sm flex justify-center items-center py-10">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="h-[1px] bg-zinc-300"></motion.div>
          <motion.h1 
            initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
            whileInView={{ rotate: -12, scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="px-6 md:px-10 w-32 md:w-40 py-2 md:py-3 rounded-md text-black bg-zinc-300 text-xs md:text-sm font-medium">
            Skills
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="h-[1px] bg-zinc-300"></motion.div>
        </motion.div>{" "}
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="w-full py-20 px-4 bg-white">
     
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {skillsList.map((skill, index) => (
            <motion.div
              initial={{  y: 50, scale: 0.9 }}
              whileInView={{  y: 0, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, margin: "-50px" }}
              key={index}
              className="flex items-center bg-white rounded-xl p-5 cursor-pointer shadow-lg hover:shadow-xl border border-white hover:border-zinc-800 transition-all group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <skill.icon className={`w-8 h-8 mr-4 ${skill.color} group-hover:${skill.color}`} />
              </motion.div>
              <h3 className="font-semibold text-zinc-800">{skill.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
            </>
  );
};

export default Skills;