import React from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import HandleRoutes from './routes/HandleRoutes';
import Home from './screens/home/Home';
import Sidebar from './screens/sideBar/Sidebar';
// import Authors from './screens/Authors/Authors';

function App() {
  return (
    <>
    <Home/>
    </>
  );
}

export default App;
