import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NumberInput from './components/NumberInput';
import PreviousTrees from './components/PreviousTrees';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NumberInput />} />
        <Route path="/previous-trees" element={<PreviousTrees />}/>
      </Routes>
    </Router>
  );
}

export default App;
