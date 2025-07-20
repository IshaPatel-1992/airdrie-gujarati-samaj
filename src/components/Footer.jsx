// components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand text-brand-text text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Airdrie Gujarati Samaj. All rights reserved.</p>
    </footer>
  );
}
