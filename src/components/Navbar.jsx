import React, { useState } from 'react';
import { LinkButton } from '../components/ui/LinkButton.jsx';
import logo from '../assets/Airdrie-Samaj-Logo-png-512x128.png';  // Replace with your actual logo path

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/events', label: 'Events' },
    { to: '/gallery', label: 'Gallery' },
 /*     { to: '/contact', label: 'Contact' }, */ 
    { to: '/membershipdetails', label: 'Membership Info' },
  ];

  return (
    <nav className="bg-brand text-brand-text shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 relative">
        {/* Logo instead of text */}
        <div className="flex items-center">
          <img
  src={logo}
  alt="Airdrie Gujarati Samaj Logo"
  className="h-18 w-auto bg-white rounded p-1"
/>
        </div>

        {/* Hamburger button visible only on small screens */}
        <button
          className="md:hidden focus:outline-none z-50 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {open ? (
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex md:space-x-6">
          {menuItems.map(({ to, label }) => (
            <LinkButton key={to} to={to}>
              {label}
            </LinkButton>
          ))}
        </div>
      </div>

      {/* Mobile dropdown menu with auto-close on link click */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-brand text-white flex flex-col space-y-3 p-4 md:hidden z-40 shadow-md">
          {menuItems.map(({ to, label }) => (
            <LinkButton
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="transition-colors duration-200 hover:text-yellow-400"
            >
              {label}
            </LinkButton>
          ))}
        </div>
      )}
    </nav>
  );
}
