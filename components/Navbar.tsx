import React from 'react';
import Logo from './Logo';
import CartIcon from './CartIcon';

export default function Navbar() {
  return (
    <nav className='bg-[#2D2C2C] text-white fixed top-0 w-full z-[999]'>
      <div className='flex items-center justify-between py-4 px-9 max-w-[1440px] mx-auto '>
        <Logo />
        <CartIcon />
      </div>
    </nav>
  );
}
