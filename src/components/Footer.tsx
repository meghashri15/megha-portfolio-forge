
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} Megha Shri. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart size={14} className="mx-1 text-primary" /> in Bangalore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
