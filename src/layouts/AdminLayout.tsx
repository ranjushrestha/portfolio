import { useEffect, useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import Footer from "../components/layouts/Footer";

import About from "../pages/About";
import Skills from "../pages/Skills";
import Tools from "../pages/Tools";
import Services from "../pages/Services";
import Results from "../pages/Results";
import Contact from "../pages/Contact";

const sections = ["ABOUT", "SKILLS", "TOOLS", "SERVICES", "RESULTS", "CONTACT"];

const AdminLayout: React.FC = () => {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // middle of screen
      let current = sections[0];

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar active={active} />

      <div className="flex flex-col flex-1 bg-gray-100 ml-60">
        <main className="flex-grow overflow-auto">
          <section id="ABOUT" className="min-h-screen p-8">
            <About />
          </section>
          <section id="SKILLS" className="min-h-screen p-8">
            <Skills />
          </section>
          <section id="TOOLS" className="min-h-screen p-8">
            <Tools />
          </section>
          <section id="SERVICES" className="min-h-screen p-8">
            <Services />
          </section>
          <section id="RESULTS" className="min-h-screen p-8">
            <Results />
          </section>
          <section id="CONTACT" className="min-h-screen p-8">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;