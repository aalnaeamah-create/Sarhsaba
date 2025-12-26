import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logo from 'figma:asset/fe584b35651f95e63f3418e4e13c3097e38311ce.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 relative overflow-hidden">
      {/* شريط بألوان العلم اليمني في الأعلى */}
      <div className="absolute top-0 left-0 right-0 flex h-2">
        <div className="flex-1 bg-red-700" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-black" />
      </div>
      
      {/* عناصر زخرفية */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-700/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10 pt-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About + الشعار */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={logo}
              alt="صرح سبأ"
              className="h-16 w-auto object-contain flex-shrink-0 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-gray-400 text-sm leading-loose mb-4">
              مطاعم صرح سبأ - سلسلة متخصصة في تقديم المأكولات اليمنية الأصيلة بجودة عالية وأسعار مناسبة
            </p>
            <div className="flex items-start gap-2 text-gray-400 text-sm mb-2 leading-relaxed">
              <MapPin size={18} className="text-red-700 mt-1 flex-shrink-0" />
              <span>مدينة الرياض، المملكة العربية السعودية</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">روابط سريعة</h3>
            <ul className="space-y-3">
              {['الرئيسية', 'عن المطعم', 'قائمة الطعام', 'الفروع', 'تواصل معنا'].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 8 }}
                >
                  <a
                    href={`#${['home', 'about', 'menu', 'branches', 'contact'][index]}`}
                    className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-3 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-red-700 to-white group-hover:w-6 transition-all" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent">تابعنا</h3>
            <div className="flex gap-4 mb-6">
              {[
                { Icon: Facebook, link: '#' },
                { Icon: Instagram, link: '#' },
                { Icon: Twitter, link: '#' }
              ].map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-br from-red-700 to-black hover:from-red-600 hover:to-gray-800 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-red-700/50 border-2 border-white/10"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-red-700 flex-shrink-0" />
                <span>+966 54 844 5421</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-red-700 flex-shrink-0" />
                <span>info@sarhsaba.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center relative"
        >
          {/* خط زخرفي بألوان العلم */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex w-64 h-0.5">
            <div className="flex-1 bg-red-700" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-black" />
          </div>
          
          <p className="text-gray-400 text-sm mb-2">
            © 2025 مطاعم صرح سبأ. جميع الحقوق محفوظة.
          </p>
          <p className="text-gray-500 text-xs">
            تجربة طعام يمنية أصيلة في قلب الرياض
          </p>
        </motion.div>
      </div>
      
      {/* شريط سفلي بألوان العلم */}
      <div className="absolute bottom-0 left-0 right-0 flex h-2">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-red-700" />
      </div>
    </footer>
  );
}