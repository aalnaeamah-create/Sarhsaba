import { motion } from 'motion/react';
import { Menu, X, Search, Home, Info, UtensilsCrossed, MapPin, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from 'figma:asset/6775a004a4f89ac27b8782135b366270ba0ccb49.png';
import { SearchDialog } from './SearchDialog';

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Header({ onNavigate, currentPage = 'home' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // تغيير حالة الهيدر بعد السكرول
      setScrolled(currentScrollPos > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // إذا كان الرابط هو #branches، انتقل لصفحة الفروع
    if (href === '#branches') {
      navigate('/branches');
      return;
    }
    
    // إذا كان الرابط هو #menu، انتقل لصفحة قائمة الطعام
    if (href === '#menu') {
      navigate('/menu');
      return;
    }
    
    // إذا كان الرابط #home، ارجع للصفحة الرئيسية
    if (href === '#home') {
      navigate('/');
      return;
    }
    
    // للأقسام الأخرى (عن المطعم، تواصل معنا)
    if (location.pathname !== '/') {
      // إذا لم نكن في الصفحة الرئيسية، انتقل إليها أولاً
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // إذا كنا في الصفحة الرئيسية، فقط scroll للقسم
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = [
    { name: 'الرئيسية', href: '#home', icon: Home, color: 'from-red-700 to-red-900' },
    { name: 'عن المطعم', href: '#about', icon: Info, color: 'from-gray-700 to-gray-900' },
    { name: 'قائمة الطعام', href: '#menu', icon: UtensilsCrossed, color: 'from-red-700 to-red-900' },
    { name: 'الفروع', href: '#branches', icon: MapPin, color: 'from-black to-gray-900' },
    { name: 'تواصل معنا', href: '#contact', icon: Phone, color: 'from-gray-700 to-gray-900' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
      }}
      transition={{ 
        y: { type: 'spring', stiffness: 300, damping: 30 },
      }}
      className={`fixed top-0 left-0 right-0 w-full shadow-lg z-[9999] overflow-hidden transition-shadow duration-300 ${
        scrolled ? 'shadow-2xl shadow-red-700/10' : 'shadow-lg'
      }`}
      style={{
        background: scrolled 
          ? 'linear-gradient(to bottom, #ffffff 0%, #ffffff 85%, #dc2626 85%, #dc2626 90%, #ffffff 90%, #ffffff 95%, #000000 95%, #000000 100%)'
          : '#ffffff'
      }}
    >
      {/* شريط بألوان العلم اليمني */}
      <motion.div 
        className="absolute top-0 left-0 right-0 flex"
        animate={{ height: scrolled ? '4px' : '6px' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex-1 bg-red-700" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-black" />
      </motion.div>
      
      <nav className="container mx-auto px-4">
        <motion.div 
          className="flex items-center justify-between"
          animate={{ 
            paddingTop: scrolled ? '4px' : '6px',
            paddingBottom: scrolled ? '4px' : '6px'
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="cursor-pointer"
            onClick={() => navigate('/')}
          >
            <motion.img 
              src={logo} 
              alt="صرح سبأ" 
              className="object-contain"
              animate={{
                width: scrolled ? '56px' : '80px',
                height: scrolled ? '56px' : '80px'
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            />
          </motion.div>

          {/* Mobile Search Icon - Left Side */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden text-gray-800 hover:text-red-700 transition-colors p-2 rounded-lg hover:bg-red-50"
          >
            <Search size={24} />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-gray-800 hover:text-red-700 transition-colors relative group text-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-700 to-black group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-800 hover:text-red-700 transition-colors relative group text-lg cursor-pointer p-2 hover:bg-red-50 rounded-lg"
            >
              <Search size={24} />
            </button>
          </div>
        </motion.div>
      </nav>
      
      {/* شريط سفلي */}
      <div className="h-1 bg-gradient-to-r from-red-700 via-white to-black opacity-20" />

      {/* Search Dialog */}
      <SearchDialog 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(page) => {
          if (onNavigate) {
            onNavigate(page);
          }
        }}
      />
    </motion.header>
  );
}