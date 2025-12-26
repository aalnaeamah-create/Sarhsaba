import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // متابعة موضع السكرول
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // العودة للأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="العودة للأعلى"
        >
          {/* الزر الرئيسي */}
          <div className="relative">
            {/* خلفية متدرجة بألوان العلم اليمني */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-black rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity" />
            
            {/* الزر */}
            <div className="relative bg-gradient-to-br from-red-700 to-red-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:shadow-red-700/50 transition-all duration-300 border-2 border-white/20">
              <ArrowUp className="text-white" size={24} strokeWidth={2.5} />
            </div>

            {/* حلقة زخرفية */}
            <motion.div
              className="absolute -inset-1 border-2 border-red-700/30 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* شريط صغير بألوان العلم */}
            <div className="absolute -top-1 -right-1 flex gap-0.5">
              <div className="w-1.5 h-1.5 bg-red-700 rounded-full" />
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
            </div>
          </div>

          {/* نص توضيحي يظهر عند التمرير */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute left-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap bg-gradient-to-r from-red-700 to-black text-white px-4 py-2 rounded-lg text-sm shadow-lg pointer-events-none"
          >
            العودة للأعلى
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-black" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
