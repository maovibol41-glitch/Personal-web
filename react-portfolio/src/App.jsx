import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <a
        href="#home"
        className="absolute left-4 top-[-60px] z-[100] rounded-b-[10px] bg-accent px-4 py-2.5 text-sm font-bold text-[#06202a] transition-[top] duration-250 focus:top-0"
      >
        Skip to content
      </a>

      <Header />

      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
