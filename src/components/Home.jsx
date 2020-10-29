import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Navbar from './Navbar';

const Home = () => {
  const { name } = useContext(AppContext);
  return (
    <div>
      <Navbar />
      <h1>{name}</h1>
    </div>
  );
};

export default Home;
