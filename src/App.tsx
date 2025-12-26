import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { AllBranchesPage } from './pages/AllBranchesPage';
import { AllMenuPage } from './pages/AllMenuPage';
import { useEffect } from 'react';

function ScrollToTopOnMount() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  
  return null;
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // دالة التنقل
  const handleNavigation = (page: string) => {
    const routes: { [key: string]: string } = {
      'home': '/',
      'menu': '/menu',
      'branches': '/branches',
      'about': '/about',
      'contact': '/contact'
    };
    
    const path = routes[page] || '/';
    navigate(path);
  };

  // تحديد الصفحة الحالية بناءً على المسار
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/menu') return 'menu';
    if (path === '/branches') return 'branches';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  return (
    <div className="font-sans" dir="rtl">
      <ScrollToTopOnMount />
      <Header onNavigate={handleNavigation} currentPage={getCurrentPage()} />
      <main>
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigation} />} />
          <Route path="/menu" element={<AllMenuPage onNavigate={handleNavigation} />} />
          <Route path="/branches" element={<AllBranchesPage onNavigate={handleNavigation} />} />
          <Route path="/about" element={<Home onNavigate={handleNavigation} />} />
          <Route path="/contact" element={<Home onNavigate={handleNavigation} />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
