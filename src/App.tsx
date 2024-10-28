import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import Home from './routes/Home';
import Admin from './routes/Admin';
import Post from './routes/Post';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  useEffect(() => {
    document.title = "Centro de Servicios | Universidad Interamericana de Puerto Rico - Fajardo";
  }, []);

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/post" element={<Post/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
