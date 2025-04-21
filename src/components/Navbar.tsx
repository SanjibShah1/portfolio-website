import React, { useState } from 'react';
import { Menu, Home, User, BookOpen, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  // 1. State to control sidebar visibility
  const [isOpen, setIsOpen] = useState(false); // toggle pattern using useState :contentReference[oaicite:4]{index=4}

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Education', href: '#education', icon: <BookOpen size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={20} /> },
    { name: 'Projects', href: '#projects', icon: <Briefcase size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  // 2. Toggle function for both button and overlay
  const toggleSidebar = () => setIsOpen(prev => !prev); // simple toggle :contentReference[oaicite:5]{index=5}

  return (
    <>
      {/* Overlay: covers content and closes sidebar on click */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50 bg-gradient-to-b from-gray-100 to-gray-300
          text-gray-800 shadow-xl transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ width: '250px' }}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-gradient-to-b from-gray-200 to-gray-400 shadow-md">
          <h1 className="text-xl font-bold tracking-wide text-gray-800">My Portfolio</h1>
          {/* Close button inside sidebar */}
          <button onClick={toggleSidebar} className="p-2 focus:outline-none">
            ✕
          </button>
        </div>
        <nav className="flex flex-col mt-4 space-y-4 px-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleSidebar} // close on link click (mobile) :contentReference[oaicite:6]{index=6}
              className="
                flex items-center text-gray-700 hover:bg-gray-400 hover:text-gray-900
                px-4 py-2 rounded transition-colors
              "
            >
              <span className="mr-3">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Menu button */}
      <button
        onClick={toggleSidebar} // open/close on click :contentReference[oaicite:7]{index=7}
        className="
          fixed top-4 left-4 z-50 bg-gradient-to-b from-gray-300 to-gray-500
          text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-400
          focus:outline-none transition-colors
        "
      >
        <Menu size={24} />
      </button>
    </>
  );
};

export default Navbar;
