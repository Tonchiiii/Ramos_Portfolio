import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <div className="navbar navbar-default bs-dos-nav navbar-fixed-top sticky-navigation" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#rock-navigation"
            aria-controls="rock-navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>
        </div>
        <nav className="collapse navbar-collapse" id="rock-navigation">
          <ul className="nav navbar-nav navbar-right main-navigation text-uppercase">
            <li><Link to="/dashboard" className="smoothScroll">Home</Link></li>
            <li><Link to="/mywork" className="smoothScroll">My Work</Link></li>
            <li><Link to="/portfolio_showcase" className="smoothScroll">Portfolio</Link></li>
            <li><Link to="/about" className="smoothScroll">About</Link></li>
            <li><Link to="/contact" className="smoothScroll">Contact</Link></li>
            <li><Link to="/" className="smoothScroll">Logout</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
