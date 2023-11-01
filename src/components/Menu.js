import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
  const location = useLocation();

  return (
    <div className="menu">
      <div className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}>
        <Link to="/">Home</Link>
      </div>

      <div className={`menu-item ${location.pathname === '/about' ? 'active' : ''}`}>
        <Link to="/about">About</Link>
      </div>

      <div className={`menu-item ${location.pathname === '/projects' ? 'active' : ''}`}>
        <Link to="/projects">Projects</Link>
      </div>

      <div className={`menu-item ${location.pathname === '/blog' ? 'active' : ''}`}>
        <Link to="/blog">Blog</Link>
      </div>

      <div className={`menu-item ${location.pathname === '/contact' ? 'active' : ''}`}>
        <Link to="/contact">Socials</Link>
      </div>
    </div>
  );
};


export default Menu;