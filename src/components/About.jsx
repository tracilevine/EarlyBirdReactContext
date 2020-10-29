import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const About = () => {
  const { name, setName } = useContext(AppContext);

  const handleClick = () => {
    setName('Katie');
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>Click to Change Name</button>
    </div>
  );
};

export default About;
