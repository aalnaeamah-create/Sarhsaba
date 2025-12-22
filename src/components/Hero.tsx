import { motion } from 'motion/react';
import { ChevronDown, Sparkles, UtensilsCrossed } from 'lucide-react';

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

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* أيقونة مميزة */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-white blur-2xl opacity-50" />
              <UtensilsCrossed className="relative text-white" size={60} />
            </div>
          </motion.div>
        </motion.div>

        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* تم حذف العنوان الرئيسي */}
        </motion.div>
        
        {/* الوصف */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          <div className="relative inline-block">
            <Sparkles className="absolute -top-6 -right-6 text-yellow-400" size={24} />
            <Sparkles className="absolute -bottom-6 -left-6 text-yellow-400" size={20} />
            <p className="text-xl md:text-3xl leading-relaxed max-w-3xl mx-auto drop-shadow-2xl px-6 py-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/20">
              نقدم لكم أشهى المأكولات اليمنية الأصيلة
              <br />
              <span className="text-red-400">بنكهات غنية وتراث عريق في قلب الرياض</span>
            </p>
          </div>
        </motion.div>

        {/* الأزرار */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#menu"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(206, 17, 38, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white px-10 py-5 rounded-full overflow-hidden shadow-2xl border-2 border-white/50 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative flex items-center gap-3 text-lg">
              <UtensilsCrossed size={24} />
              استكشف قائمة الطعام
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-white/20 to-white/10 text-white px-10 py-5 rounded-full overflow-hidden shadow-2xl border-2 border-white backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative flex items-center gap-3 text-lg">
              تواصل معنا
            </span>
          </motion.a>
        </motion.div>

        {/* شعار أو Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
            <Sparkles className="text-yellow-400" size={20} />
            <span className="text-white text-sm">تجربة طعام أصيلة لا تُنسى</span>
            <Sparkles className="text-yellow-400" size={20} />
          </div>
        </motion.div>
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