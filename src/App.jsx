import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Strengths from "./components/Strengths";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-background min-h-screen text-text">
      <Hero />
      <Experience />
      <Projects />
      <Strengths />
      <Footer />
    </main>
  );
}
