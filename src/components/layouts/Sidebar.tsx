import React from "react";
import logo from "../../assets/image.png"

interface SidebarProps {
  active: string;
}

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
 const sections = ["ABOUT", "SKILLS", "TOOLS", "SERVICES", "RESULTS", "CONTACT"];

  return (
    <aside className="fixed top-0 left-0 h-screen w-60 bg-black text-white p-5 flex flex-col pt-4">
      {/* Logo + Profile */}
      <div className="flex flex-col items-center mb-5 text-center">
       <img src={logo} alt="logo" className="w-24 h-24 object-cover rounded-full mb-2 border-2 border-blue-400 shadow-md"/>
        <p className="font-bold pb-2">Raju Shrestha</p>
        <p className="text-sm text-blue-400 pb-1">Email Outreach Specialist</p>
        <p className="text-sm text-gray-300 mb-1">Kathmandu, Nepal</p>
        <p className="text-sm text-gray-300">shrestharaju160@gmail.com</p>
      </div>

      {/* ScrollSpy Links */}
      <nav className="flex flex-col gap-2 mt-6">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`flex items-center px-4 py-2 rounded cursor-pointer transition-colors ${
              active === section ? "bg-gray-500 font-bold" : "hover:bg-gray-500/30"
            }`}
          >
            {section}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;