import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Search from './pages/Search';
import Insert from './pages/Insert';
import Update from './pages/Update';
import Delete from './pages/Delete';
import CustomNavbar from './pages/Navbar';
const App = () =>{
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/update" element={<Update />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
