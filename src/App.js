import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Tech from './pages/projects/Software';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <div className='Pages'>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects/tech" element={<Tech />} />

          </Routes>
        </div>
      </Router>
      <br /><br /><br /><br /><br /><br /><br />
      <div className='footer'>
        <h1> This website is under construction, both thematically, and contentathically* </h1>
        <h4> *Yes, that is a real word. No, I'm not gaslighting you</h4>
      </div>

    </div>
  );
}

export default App;
