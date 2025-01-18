import React from 'react';
import { motion } from 'framer-motion';
import sanjib from './sanjib.jpeg'
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Sanjib Shah</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Passionate about creating innovative solutions and bringing ideas to life through code.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://github.com/SanjibShah1" target="_blank" rel="noopener noreferrer" 
              className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="shahsanjib9@gmail.com"
              className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 mt-12 md:mt-0 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-transparent opacity-20 rounded-lg group-hover:opacity-40 transition-opacity"></div>
          <img 
            src={sanjib}
            alt="Developer workspace"
            className="rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
