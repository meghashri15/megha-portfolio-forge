
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, MapPin, Mail, Phone, FileText, GitHub, Linkedin } from "lucide-react";

const About = () => {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-wrapper">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6">
              I'm an enthusiastic and detail-oriented Information Science Engineering student 
              with a strong foundation in Python, web development, and database management.
            </p>
            
            <p className="text-lg mb-6">
              I'm passionate about software development and problem-solving, seeking an internship 
              opportunity to apply my technical skills and gain industry experience in a dynamic environment.
            </p>
            
            <div className="space-y-3 mt-8">
              <div className="flex items-center gap-3">
                <User className="text-primary" size={20} />
                <span>Megha Shri</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={20} />
                <span>Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <a href="mailto:meghashrii21@gmail.com" className="hover:text-primary transition-colors">
                  meghashrii21@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={20} />
                <a href="tel:+916202440093" className="hover:text-primary transition-colors">
                  +91 6202440093
                </a>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-8">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <GitHub size={18} />
              </a>
              <Button asChild variant="outline" className="ml-2">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText size={16} />
                  Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary hover-card"
              onMouseEnter={() => setShowQuote(true)}
              onMouseLeave={() => setShowQuote(false)}
            >
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent to-primary/90 flex items-end justify-center p-6 text-white transform transition-all duration-300 ${showQuote ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-center font-medium">
                  "Never stop learning, because life never stops teaching."
                </p>
              </div>
              <div className="w-full h-full rounded-full bg-pastel-lavender flex items-center justify-center text-6xl font-bold text-primary/50">
                MS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
