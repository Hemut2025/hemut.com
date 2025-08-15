import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import HemutLogo from "@/assets/logos/HemutLogo";

const Footer = () => {
  return (
    <footer className="bg-hemut-darkblue border-t border-hemut-blue/20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <HemutLogo color="#FFC300" width="100" />
            </div>
            <p className="text-hemut-offwhite/70 mb-6">
              AI-powered solutions for modern logistics and transportation
              management.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-hemut-yellow mr-3 mt-0.5" />
                <span className="text-hemut-offwhite/70">
                  2210 Harrison Ave, Rockford, IL 61104
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-hemut-yellow mr-3" />
                <a
                  href="mailto:info@hemut.ai"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow"
                >
                  info@hemut.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-hemut-yellow mr-3" />
                <a
                  href="tel:+1234567890"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow"
                >
                  (559) 944-7199
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mx-auto">
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources 
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-hemut-offwhite/70 hover:text-hemut-yellow transition-colors"
                >
                  API
                </a>
              </li>
            </ul>
          </div>
          */}

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-hemut-offwhite/70 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-hemut-blue/20 border border-hemut-blue/30 text-white placeholder:text-hemut-offwhite/50 focus:outline-none focus:ring-2 focus:ring-hemut-yellow/50"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-hemut-yellow text-hemut-darkblue font-medium rounded-lg hover:bg-hemut-brightyellow transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hemut-blue/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-hemut-offwhite/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hemut. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-hemut-offwhite/60 hover:text-hemut-yellow text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-hemut-offwhite/60 hover:text-hemut-yellow text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-hemut-offwhite/60 hover:text-hemut-yellow text-sm"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
