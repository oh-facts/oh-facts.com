import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import platform_prefix from './common'

function App() {
  //set to github pages
  const _pp = platform_prefix.github_pages_prefix;

  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`${_pp}/`} element={<Home />} />
          <Route path={`${_pp}/about`} element={<About />} />
          <Route path={`${_pp}/projects`} element={<Projects />} />
          <Route path={`${_pp}/blog`} element={<Blog />} />
          <Route path={`${_pp}/contact`} element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
