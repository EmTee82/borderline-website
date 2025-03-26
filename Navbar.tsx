import React from 'react';
import { Link } from 'react-router-dom'; // Optional if you're using routing

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#111', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>FansifAI</h1>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
          <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
          <a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;