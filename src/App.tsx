import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
// import Navbar from './components/Navbar';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import Details from './components/Details';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/main" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
