import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Impact from './pages/Impact';
import Resources from './pages/Resources';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/work/*" element={<Work />} />
            <Route path="/impact/*" element={<Impact />} />
            <Route path="/resources/*" element={<Resources />} />
            <Route path="/get-involved/*" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;