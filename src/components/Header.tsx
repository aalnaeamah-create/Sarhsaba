import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from 'figma:asset/6775a004a4f89ac27b8782135b366270ba0ccb49.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // تغيير حالة الهيدر بعد السكرول
      setScrolled(currentScrollPos > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عن المطعم', href: '#about' },
    { name: 'قائمة الطعام', href: '#menu' },
    { name: 'الفروع', href: '#branches' },
    { name: 'معرض الصور', href: '#gallery' },
    { name: 'تواصل معنا', href: '#contact' }
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
          <motion.a
            href="#home"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              scale: scrolled ? 0.85 : 1
            }}
            transition={{ 
              opacity: { delay: 0.2 },
              scale: { duration: 0.3 }
            }}
            whileHover={{ scale: scrolled ? 0.9 : 1.05 }}
            className="flex items-center relative z-10"
          >
            <motion.img 
              src={logo} 
              alt="صرح سبأ" 
              className="w-auto object-contain"
              animate={{ 
                height: scrolled ? '60px' : '80px'
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-gray-800 hover:text-red-700 transition-colors relative group text-lg"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-700 to-black group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 hover:text-red-700 transition-colors p-2 rounded-lg hover:bg-red-50"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 bg-gradient-to-b from-red-700 via-red-800 to-black rounded-lg overflow-hidden shadow-2xl"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="block px-6 py-4 text-white hover:bg-white/20 transition-colors border-b border-white/10 last:border-b-0 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
      
      {/* شريط سفلي */}
      <div className="h-1 bg-gradient-to-r from-red-700 via-white to-black opacity-20" />
    </motion.header>
  );
}