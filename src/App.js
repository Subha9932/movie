import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home';
import Tv from './Tv';
import Movies from './Movies';
import Navbar from './Navbar';
//import Card from './Card';
import Login from './Login'; // Corrected the import statement
import Signup from './Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<Tv />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
