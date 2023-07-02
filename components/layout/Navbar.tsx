import React from 'react';
import Image from 'next/image';

import ModeToggle from './ThemeToggle';
import Logo from '@/assets/logo.webp';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <Image src={Logo} alt="Game Hub" className="w-14 h-14" />
        <h3 className="text-lg">Game Hub</h3>
      </div>

      <ModeToggle />
    </nav>
  );
};

export default Navbar;
