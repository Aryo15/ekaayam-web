import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './functions/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import BookSmart from './pages/BookSmart';
import Courses from './pages/Courses';
import Mentorships from './pages/Mentorships';
import About from './pages/About';
import Host from './pages/Host';
import BizBoost from './pages/BizBoost';
import Profile from './pages/Profile';
import Tickets from './pages/Tickets';
import PP from './pages/pp';
import RP from './pages/rp';
import TNC from './pages/tnc';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/booksmart" element={<BookSmart />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/mentorships" element={<Mentorships />} />
        <Route path="/about" element={<About />} />
        <Route path="/host" element={<Host />} />
        <Route path="/bizboost" element={<BizBoost />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/pp" element={<PP />} />
        <Route path="/rp" element={<RP />} />
        <Route path="/tnc" element={<TNC />} />
      </Routes>
    </Router>
  );
}

export default App;
