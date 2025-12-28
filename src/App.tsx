import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { ScrollToTop } from './components/ScrollToTop';
import { lazy, Suspense, useState } from 'react';

// Lazy loading للصفحات لتحسين الأداء
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const AllBranchesPage = lazy(() => import('./pages/AllBranchesPage').then(module => ({ default: module.AllBranchesPage })));
const AllMenuPage = lazy(() => import('./pages/AllMenuPage').then(module => ({ default: module.AllMenuPage })));

// مكون Loading بسيط
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-red-700 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600">جاري التحميل...</p>
      </div>
    </div>
  );
}

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
      <Suspense fallback={<PageLoader />}>
        <main>
          {renderPage()}
        </main>
      </Suspense>
      <Footer />
      <CookieConsent />
      <ScrollToTop />
    </div>
  );
}