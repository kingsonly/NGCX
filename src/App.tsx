import React from 'react';
import logo from './logo.svg';
<<<<<<< HEAD
//import './App.scss';
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route >
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
=======
import './App.css';
import { HeaderMenu } from './components/header_menu/header_menu';
import { Hero } from './components/heroComponent/hero';

function App() {
  return (
    <div className="App">
      <HeaderMenu></HeaderMenu>
     <Hero></Hero>
    </div>
>>>>>>> 4ff657d0d2460d6f67e98406db92f8c409889bc6
  );
}

export default App;
