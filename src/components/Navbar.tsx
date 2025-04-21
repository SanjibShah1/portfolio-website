import React, { useState, useEffect, useRef } from 'react';
import { Menu, Home, User, BookOpen, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Education', href: '#education', icon: <BookOpen size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={20} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full z-50 bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 shadow-xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '250px' }}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-gradient-to-b from-gray-200 to-gray-400 shadow-md">
          <h1 className="text-xl font-bold tracking-wide text-gray-800">My Portfolio</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 hover:text-gray-900 focus:outline-none"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col mt-4 space-y-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center text-gray-700 hover:bg-gray-400 hover:text-gray-900 px-4 py-2 rounded transition-colors"
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        ref={buttonRef}
        className="fixed top-4 left-4 z-50 bg-gradient-to-b from-gray-300 to-gray-500 text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-400 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>
    </div>
  );
};

export default Navbar;
