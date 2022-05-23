import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Hero } from './components/hero';
import { HeaderMenu } from './components/header_menu/header_menu';

function App() {
  return (
    <div className="App">
      <HeaderMenu></HeaderMenu>
     <Hero></Hero>
    </div>
  );
}

export default App;
