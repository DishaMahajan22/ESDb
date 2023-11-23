import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import Search from './components/Search';
import Insert from './components/Insert';
import Update from './components/Update';
import Delete from './components/Delete';
import CustomNavbar from './components/Navbar';
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
