import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Tech() {
  return (
    <div className="dashboard">
      <h1>🛠️ Thomas IT Tech Dashboard</h1>
      <p><strong>Phoenix DC21</strong> - Smith,J. #2001 CLAIMED ✓</p>
      <div className="links">
        <Link to="/dispatch">📡 Dispatch Tower</Link>
        <Link to="/enterprise">🏢 Enterprise</Link>
        <Link to="/eol_swaps">📦 EOL Swaps</Link>
        <Link to="/inventory">📋 Inventory</Link>
      </div>
    </div>
  );
}

function Dispatch() {
  return (
    <div className="dashboard">
      <h1>📡 Dispatch Tower</h1>
      <p>Live swaps: <strong>#2001</strong> → Smith,J. Phoenix DC21</p>
      <Link to="/tech">← Tech Dashboard</Link>
    </div>
  );
}

function Enterprise() {
  return (
    <div className="dashboard">
      <h1>🏢 Enterprise Dashboard</h1>
      <p>Cisco EOL Inventory Management</p>
      <Link to="/tech">← Tech Dashboard</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tech />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/dispatch" element={<Dispatch />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/eol_swaps" element={<Enterprise />} />
        <Route path="/inventory" element={<Enterprise />} />
      </Routes>
    </Router>
  );
}

export default App;
