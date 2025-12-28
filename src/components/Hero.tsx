import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  // صور البانر المتحركة من Google Drive
  const bannerImages = [
    'https://lh3.googleusercontent.com/d/15adTIxHRNfhmj0L0KpWiqkF8lktWUut4',
    'https://lh3.googleusercontent.com/d/1xBA29Bu7qb7MWEwudZVkN8XU89xknBSz',
    'https://lh3.googleusercontent.com/d/1ufngfZszGoCb56fLiACHGxX9Nume8jLA',
    'https://lh3.googleusercontent.com/d/1tAwX-LXxuQ3KF4qlpy3ONjD8YP9OwGX4',
    'https://lh3.googleusercontent.com/d/16ivL1HJ8yx8ZgZZ2C-ljK8mJMZKZy15m'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // تغيير الصورة تلقائياً كل 5 ثوانٍ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect and Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={bannerImages[currentImageIndex]}
              alt={`مطعم صرح سبأ - صورة ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* تدرج لوني بألوان العلم اليمني */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/80 via-black/60 to-black/90" />
        
        {/* عناصر زخرفية متحركة - مخفية على الموبايل */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="hidden md:block absolute top-20 right-20 w-32 h-32 border-4 border-red-700/30 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="hidden md:block absolute bottom-32 left-20 w-40 h-40 border-4 border-white/20 rounded-full"
        />
        
        {/* نقاط متلألئة - مخفية على الموبايل */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.4
            }}
            className="hidden md:block absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`
            }}
          />
        ))}
      </div>

      {/* Decorative Frame */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-700 via-white to-black opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-black via-white to-red-700 opacity-80" />
      </div>

      {/* نقاط التنقل بين الصور */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentImageIndex 
                ? 'w-12 h-3 bg-red-600' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`الانتقال إلى الصورة ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - محسّن */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2 group">
          <span className="text-white text-sm opacity-70 group-hover:opacity-100 transition-opacity">اكتشف المزيد</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2 group-hover:border-red-500 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-red-600 rounded-full shadow-lg shadow-red-500/50"
            />
          </motion.div>
          <ChevronDown className="text-white/50 group-hover:text-red-500 transition-colors" size={24} />
        </div>
      </motion.div>
    </section>
  );
}