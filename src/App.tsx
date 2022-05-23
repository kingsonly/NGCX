import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderMenu } from './components/header_menu/header_menu';
import { Hero } from './components/heroComponent/hero';

function App() {
  return (
    <div className="App">
      <HeaderMenu></HeaderMenu>
     <Hero></Hero>
    </div>
  );
}

export default App;
