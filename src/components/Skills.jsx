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
     <div className="text-center text-sm flex justify-center items-center py-10">
          <div className="h-[1px] w-1/2 bg-zinc-300"></div>
          <h1 className="px-6 md:px-10 w-32 md:w-40 py-2 md:py-3 rounded-md -rotate-12 text-black bg-zinc-300 text-xs md:text-sm font-medium">
            Skills
          </h1>
          <div className="h-[1px] w-1/2 bg-zinc-300"></div>
        </div>{" "}
    <div className="w-full py-20 px-4 bg-white">
     
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {skillsList.map((skill, index) => (
            <div
            key={index}
              className="flex items-center bg-white rounded-xl p-5 hover:scale-105 duration-300 cursor-pointer shadow-lg hover:shadow-xl border border-white hover:border-zinc-800 transition-all group"
            >
              <skill.icon className={`w-8 h-8 mr-4 ${skill.color} group-hover:${skill.color}`} />
              <h3 className="font-semibold text-zinc-800">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
            </>
  );
};

export default Skills;