import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { name, mood } = useContext(AppContext);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <li>{name}</li>
      </ul>
      <ul
        style={{
          display: 'flex',
          listStyleType: 'none'
        }}
      >
        <li>{mood}</li>
        <li>Contact</li>
        <li>Service</li>
      </ul>
    </div>
  );
};

export default Navbar;
