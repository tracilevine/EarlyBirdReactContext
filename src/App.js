import React from 'react';
import { AppProvider } from './context/AppContext';
import './App.css';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <AppProvider>
      <Home />
      <About />
    </AppProvider>
  );
}

export default App;
