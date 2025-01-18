import React, { useState } from 'react';
import { Menu, Home, User, BookOpen, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Education', href: '#education', icon: <BookOpen size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={20} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 shadow-xl transform transition-transform duration-300 ${
          isHovered ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '250px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-center h-16 px-4 bg-gradient-to-b from-gray-200 to-gray-400 shadow-md">
          <h1 className="text-xl font-bold tracking-wide text-gray-800">My Portfolio</h1>
        </div>
        <div className="flex flex-col mt-4 space-y-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center text-gray-700 hover:bg-gray-400 hover:text-gray-900 px-4 py-2 rounded transition-colors"
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Hover Trigger Button */}
      <div
        className="fixed top-4 left-4 z-50 bg-gradient-to-b from-gray-300 to-gray-500 text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-400 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
      >
        <Menu size={24} />
      </div>
    </div>
  );
};

export default Navbar;
