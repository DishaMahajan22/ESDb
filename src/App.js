import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Search from './components/Search';
import Insert from './components/Insert';
import CustomNavbar from './components/Navbar';
const App = () =>{
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/insert" element={<Insert />} />
      </Routes>
    </Router>
  );
}

export default App;
