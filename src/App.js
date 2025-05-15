import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div>
      {currentPage === '#login' ? <LoginPage /> :
       currentPage === '#about' ? <AboutPage /> :
       currentPage === '#projects' ? <ProjectsPage /> :
       currentPage === '# nosotros' ? <ContactPage /> :
       <HomePage />}
    </div>
  );
}

export default App;