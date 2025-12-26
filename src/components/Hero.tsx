import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="مطعم صرح سبأ"
          className="w-full h-full object-cover"
        />
        {/* تدرج لوني بألوان العلم اليمني */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/80 via-black/60 to-black/90" />
        
        {/* عناصر زخرفية متحركة */}
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
          className="absolute top-20 right-20 w-32 h-32 border-4 border-red-700/30 rounded-full"
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
          className="absolute bottom-32 left-20 w-40 h-40 border-4 border-white/20 rounded-full"
        />
        
        {/* نقاط متلألئة */}
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
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`
            }}
          />
        ))}
      </motion.div>

      {/* Decorative Frame */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-700 via-white to-black opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-black via-white to-red-700 opacity-80" />
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