import React, { useState } from 'react';
import { X } from 'lucide-react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-around p-4 max-w-[1400px] mx-auto bg-gray-100 relative">
      <div className="logo">
        <h1 className="text-purple-700 text-xl font-bold">Logo</h1>
      </div>
      
      <nav className="hidden md:flex gap-10">
        <a href="#" className="text-black no-underline hover:text-purple-700">Home</a>
        <a href="#" className="text-black no-underline hover:text-purple-700">Jobs</a>
        <a href="#" className="text-black no-underline hover:text-purple-700">About</a>
        <a href="#" className="text-black no-underline hover:text-purple-700">Contact</a>
        <a href="#" className="text-black no-underline hover:text-purple-700">Menu</a>
      </nav>
      
      <div className="md:hidden">
        <button
          className="px-4 py-2 bg-gray-200 border-none rounded-md cursor-pointer hover:bg-gray-300"
          onClick={() => setShowMenu(true)}
        >
          Menu
        </button>
      </div>
      
      <div className="hidden md:flex gap-2">
        <button className="px-4 py-2 bg-gray-200 border-none rounded-md cursor-pointer hover:bg-gray-300">Login</button>
        <button className="px-4 py-2 bg-purple-700 text-white border-none rounded-md cursor-pointer hover:bg-purple-800">Sign Up</button>
      </div>
      
      {showMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-100 z-50 flex flex-col items-center justify-center gap-6 p-10">
          <button
            className="absolute top-4 right-4 p-2 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400"
            onClick={() => setShowMenu(false)}
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col gap-5 text-lg">
            <a href="#" className="text-black no-underline hover:text-purple-700" onClick={() => setShowMenu(false)}>Home</a>
            <a href="#" className="text-black no-underline hover:text-purple-700" onClick={() => setShowMenu(false)}>Jobs</a>
            <a href="#" className="text-black no-underline hover:text-purple-700" onClick={() => setShowMenu(false)}>About</a>
            <a href="#" className="text-black no-underline hover:text-purple-700" onClick={() => setShowMenu(false)}>Contact</a>
          </nav>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-200 border-none rounded-md cursor-pointer hover:bg-gray-300">Login</button>
            <button className="px-4 py-2 bg-purple-700 text-white border-none rounded-md cursor-pointer hover:bg-purple-800">Sign Up</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;