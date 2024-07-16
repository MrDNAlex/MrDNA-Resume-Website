import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/extracurriculars">Extracurriculars</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;