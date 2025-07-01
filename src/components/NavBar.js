import { useState } from 'react';
import '../css/navbar.css'; // Include your CSS for colors/fonts, etc.

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <header className="custom-navbar">
      <div className="nav-container">
        <div className="nav-brand">Anton Ramos</div>

        <button className="nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
          <span className="nav-bar"></span>
          <span className="nav-bar"></span>
          <span className="nav-bar"></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeNav}>Home</a>
          <a href="#work" onClick={closeNav}>My Work</a>
          <a href="#portfolio" onClick={closeNav}>Portfolio</a>
          <a href="#about" onClick={closeNav}>About</a>
          <a href="#contact" onClick={closeNav}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
