import React from 'react';
import '../App.css';
import '../css/style.css';
import '../css/my_work.css';
import '../css/portfolio.css';

import NavBar from './NavBar';
import Homepage from './Homepage';
import MyWork from './MyWork';
import PortfolioShowcase from './PortfolioShowcase';
import ContactPage from './ContactPage';

// Optional: Enable smooth scroll behavior site-wide
// Add this to index.css or inline
const scrollStyle = {
  scrollBehavior: 'smooth',
};

function SinglePagePortfolio() {
  return (
    <div style={scrollStyle}>
      <NavBar />
      <Homepage />
      <MyWork />
      <PortfolioShowcase />
      <ContactPage />
    </div>
  );
}

export default SinglePagePortfolio;