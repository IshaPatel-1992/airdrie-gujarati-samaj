// components/ui/Button.jsx
import React from 'react';

export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-brand text-brand-text hover:bg-brand-hover font-medium px-4 py-2 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
