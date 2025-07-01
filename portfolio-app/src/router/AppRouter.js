import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/Homepage';
import PortfolioShowcase from '../components/PortfolioShowcase';
import MyWork from '../components/MyWork';
import ContactPage from '../components/ContactPage';
import NavBar from '../components/NavBar';



function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioShowcase />} />
      <Route path="/work" element={<MyWork />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/navbar" element={<NavBar />} />
    </Routes>
  );
}

export default AppRouter;
