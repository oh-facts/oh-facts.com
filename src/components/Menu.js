import { Link } from 'react-router-dom';

const Menu = () => {
  return (

    <div className="menu">

      <div className='menu-item'>
        <Link to="/">Home</Link>
      </div>

      <div className='menu-item'>
        <Link to="/about">About</Link>
      </div>

      <div className='menu-item'>
        <Link to="/projects">Projects</Link>
      </div>

      <div className='menu-item'>
        <Link to="/blog">Blog</Link>
      </div>

      <div className='menu-item'>
        <Link to="/contact">Socials</Link>
      </div>

    </div>

  );
};

export default Menu;