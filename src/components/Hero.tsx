
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient opacity-10 -z-10"></div>
      <div className="section-wrapper flex flex-col items-center justify-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
            <span className="bg-gradient-to-r from-primary to-pastel-pink bg-clip-text text-transparent">
              Megha Shri
            </span>
          </h1>
          <div className="h-12">
            <p className="typewriter inline-block text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground mb-8">
              Passionate Developer | Problem Solver | Future Innovator
            </p>
          </div>

          <p className="max-w-3xl mx-auto text-muted-foreground mt-6 mb-12">
            Information Science Engineering student with a strong foundation in Python, 
            web development, and database management. Seeking opportunities to apply 
            technical skills in a dynamic environment.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary animate-bounce-light"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
