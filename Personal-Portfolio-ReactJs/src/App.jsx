import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";

// ====================================================================
// DYNAMIC TAB VISIBILITY PRODUCER (Fires seamlessly on live CDNs)
// ====================================================================
const setFavicon = (iconName) => {
  let favicon = document.querySelector("link[rel*='icon']");

  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    document.head.appendChild(favicon);
  }

  // Forces absolute domain target routing from the public directory
  favicon.href = `/${iconName.replace(/^\//, "")}`;
};

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    document.title = "Adeel Ahmad | Portfolio";
    setFavicon("favicon.png");
  } else {
    document.title = "Come Back To Portfolio";
    setFavicon("favhand.png");
  }
});

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
