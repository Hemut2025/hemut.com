import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import HemutLogo from "@/assets/logos/HemutLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hemut-darkblue/90 backdrop-blur-md border-b border-hemut-blue/20">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <HemutLogo color="#FFC300" width="100" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#benefits" className="nav-link">
            Benefits
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://app.hemut.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* See Beta button removed for now
            <Button
              variant="outline"
              className="border-hemut-yellow text-hemut-yellow hover:bg-hemut-yellow hover:text-hemut-darkblue"
            >
              See Beta
            </Button>
            */}
          </a>
          <a
            href="https://form.typeform.com/to/kwmV357x"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-hemut-yellow text-hemut-darkblue hover:bg-hemut-brightyellow">
              Book Demo
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-hemut-offwhite hover:text-hemut-yellow p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-hemut-navyblue border-b border-hemut-blue/20 animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#benefits"
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className="nav-link py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            
            <div className="flex flex-col space-y-3 pt-2">
              <a
                href="https://app.hemut.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="border-hemut-yellow text-hemut-yellow hover:bg-hemut-yellow hover:text-hemut-darkblue w-full"
                >
                  See Beta
                </Button>
              </a>
              <a
                href="https://form.typeform.com/to/kwmV357x"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="bg-hemut-yellow text-hemut-darkblue hover:bg-hemut-brightyellow w-full">
                  Book Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
