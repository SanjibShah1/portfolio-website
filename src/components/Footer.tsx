import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold">Sanjib Shah</h3>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/SanjibShah1" target="_blank" rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="shahsanjib9@gmail.com"
              className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sanjib Shah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;