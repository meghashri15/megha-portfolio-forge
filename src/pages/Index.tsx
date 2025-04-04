
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBubble from "@/components/ChatBubble";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Index;
