import React from 'react';
import ModeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <ModeToggle />
    </div>
  );
};

export default Navbar;
