import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="absolute top-0 z-[-2] w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
