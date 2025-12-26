import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Home } from './pages/Home';
import { AllBranchesPage } from './pages/AllBranchesPage';
import { AllMenuPage } from './pages/AllMenuPage';
import { useState } from 'react';

export default function App() {
  // نظام التنقل بين الصفحات
  const [currentPage, setCurrentPage] = useState('home');

  // دالة التنقل
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // رندر الصفحة المناسبة
  const renderPage = () => {
    switch (currentPage) {
      case 'branches':
        return <AllBranchesPage onNavigate={handleNavigation} />;
      case 'menu':
        return <AllMenuPage onNavigate={handleNavigation} />;
      case 'home':
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="font-sans" dir="rtl">
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}