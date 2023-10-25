import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Socials</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;