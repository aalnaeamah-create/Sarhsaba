import { motion } from 'motion/react';
import { UtensilsCrossed, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuickLinksProps {
  onNavigate: (page: string) => void;
}

export function QuickLinks({ onNavigate }: QuickLinksProps) {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* زر قائمة الطعام */}
          <motion.button
            onClick={() => navigate('/menu')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden bg-gradient-to-br from-red-700 to-red-900 text-white rounded-2xl shadow-xl hover:shadow-2xl p-8 flex flex-col items-center gap-4"
          >
            {/* خلفية متحركة */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* الأيقونة */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 bg-white/20 p-4 rounded-full"
            >
              <UtensilsCrossed size={40} />
            </motion.div>
            
            {/* النص */}
            <div className="relative z-10 text-center">
              <h3 className="text-2xl mb-2">اكتشف قائمتنا</h3>
              <p className="text-white/80 text-sm">تصفح أشهى المأكولات اليمنية الأصيلة</p>
            </div>
            
            {/* شريط ألوان العلم */}
            <div className="absolute bottom-0 left-0 right-0 h-2 flex">
              <div className="flex-1 bg-red-700"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-black"></div>
            </div>
          </motion.button>

          {/* زر الفروع */}
          <motion.button
            onClick={() => navigate('/branches')}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl shadow-xl hover:shadow-2xl p-8 flex flex-col items-center gap-4"
          >
            {/* خلفية متحركة */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* الأيقونة */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 bg-white/20 p-4 rounded-full"
            >
              <MapPin size={40} />
            </motion.div>
            
            {/* النص */}
            <div className="relative z-10 text-center">
              <h3 className="text-2xl mb-2">فروعنا</h3>
              <p className="text-white/80 text-sm">اكتشف أقرب فرع لك في المملكة</p>
            </div>
            
            {/* شريط ألوان العلم */}
            <div className="absolute bottom-0 left-0 right-0 h-2 flex">
              <div className="flex-1 bg-red-700"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-black"></div>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}