import { motion } from 'motion/react';
import { Info, UtensilsCrossed, MapPin, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function MobileNavCards() {
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    if (href === '#branches') {
      navigate('/branches');
      return;
    }
    
    if (href === '#menu') {
      navigate('/menu');
      return;
    }
    
    // للأقسام الأخرى (عن المطعم، تواصل معنا) - scroll للقسم
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { name: 'عن المطعم', href: '#about', icon: Info, color: 'from-gray-700 to-gray-900' },
    { name: 'قائمة الطعام', href: '#menu', icon: UtensilsCrossed, color: 'from-red-700 to-red-900' },
    { name: 'الفروع', href: '#branches', icon: MapPin, color: 'from-black to-gray-900' },
    { name: 'تواصل معنا', href: '#contact', icon: Phone, color: 'from-gray-700 to-gray-900' }
  ];

  return (
    <section className="md:hidden pt-32 pb-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* شبكة الكاردات */}
        <div className="grid grid-cols-2 gap-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.name}
                onClick={() => handleClick(item.href)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                whileTap={{ scale: 0.95 }}
                className={`group relative overflow-hidden bg-gradient-to-br ${item.color} text-white rounded-xl shadow-lg hover:shadow-xl p-4 flex flex-col items-center gap-2 cursor-pointer min-h-[120px] justify-center`}
              >
                {/* خلفية متحركة */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-active:opacity-100 transition-opacity duration-200"
                />
                
                {/* الأيقونة */}
                <motion.div
                  whileTap={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 bg-white/20 p-2.5 rounded-full"
                >
                  <Icon size={28} />
                </motion.div>
                
                {/* النص */}
                <div className="relative z-10 text-center">
                  <h3 className="text-sm">{item.name}</h3>
                </div>
                
                {/* شريط ألوان العلم */}
                <div className="absolute bottom-0 left-0 right-0 h-1 flex">
                  <div className="flex-1 bg-red-700"></div>
                  <div className="flex-1 bg-white"></div>
                  <div className="flex-1 bg-black"></div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}