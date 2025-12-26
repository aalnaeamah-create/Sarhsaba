import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface MenuHomeProps {
  onViewAll?: () => void;
}

export function MenuHome({ onViewAll }: MenuHomeProps) {
  // أول 4 أطباق فقط للصفحة الرئيسية
  const featuredDishes = [
    { name: 'فحسة صرح سبأ', price: '35', desc: 'لحم مطبوخ على نار هادئة لمدة تصل إلى 6 ساعات', category: 'الفحسة', emoji: '🍲' },
    { name: 'سلتة صرح سبأ', price: '25', desc: 'لحم مفروم مطبوخ بصلصة خاصة', category: 'السلتة', emoji: '🍛' },
    { name: 'مطبق صرح سبأ (مالح)', price: '15', desc: 'عجينة رقيقة محشوة بالخضار والبيض', category: 'المطبق', emoji: '🥞' },
    { name: 'معصوب بالقشطة والعسل', price: '18', desc: 'خبز مقلي حلو يُخلط مع الموز', category: 'المعصوب والحلويات', emoji: '🍯' }
  ];

  return (
    <section id="menu" className="py-12 bg-gradient-to-b from-white via-red-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl mb-8 bg-gradient-to-r from-red-700 via-black to-red-700 bg-clip-text text-transparent leading-tight pb-2">
            قائمة الأطباق المميزة
          </h2>
        </motion.div>

        {/* قائمة الأطباق */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* شريط الأوان */}
              <div className="flex h-1.5">
                <div className="flex-1 bg-red-700" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-black" />
              </div>

              {/* المحتوى */}
              <div className="p-5 flex flex-col h-full">
                {/* الإيموجي والفئة */}
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-gradient-to-br from-red-100 to-red-50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{dish.emoji}</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {dish.category}
                  </span>
                </div>

                {/* اسم الطبق */}
                <h3 className="text-gray-900 mb-2 min-h-[2.5rem] flex items-center">
                  {dish.name}
                </h3>

                {/* الوصف */}
                {dish.desc ? (
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2 flex-1">
                    {dish.desc}
                  </p>
                ) : (
                  <div className="mb-4 flex-1" />
                )}

                {/* خط فاصل */}
                <div className="h-px bg-gradient-to-r from-transparent via-red-200 to-transparent mb-3" />

                {/* السعر */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">السعر</span>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl text-red-700 font-bold">{dish.price}</span>
                    <span className="text-sm text-gray-600">ر.س</span>
                  </div>
                </div>
              </div>

              {/* Border تأثير عند Hover */}
              <div className="h-1 bg-gradient-to-r from-red-700 via-black to-red-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* زر المزيد من الأطباق */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={onViewAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-700 via-red-600 to-black text-white px-12 py-5 rounded-full text-xl shadow-2xl hover:shadow-red-700/50 transition-all duration-300"
          >
            <span>المزيد من الأطباق</span>
            <ArrowLeft size={24} />
          </motion.button>
          <p className="text-gray-600 mt-4 text-sm">
            اكتشف قائمتنا الكاملة من الأطباق اليمنية الأصيلة
          </p>
        </motion.div>
      </div>
    </section>
  );
}