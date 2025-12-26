import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface MenuHomeProps {
  onViewAll?: () => void;
}

export function MenuHome({ onViewAll }: MenuHomeProps) {
  // أول 4 أقسام فقط للصفحة الرئيسية
  const featuredMenuData = [
    {
      category: 'الفحسة',
      categoryEn: 'Fahsa',
      emoji: '🍲',
      items: [
        { name: 'فحسة صرح سبأ', price: '35', desc: 'لحم مطبوخ على نار هادئة لمدة تصل إلى 6 ساعات' },
        { name: 'فحسة دجاج', price: '25', desc: 'قطع دجاج مسلوقة مع البهارات' }
      ]
    },
    {
      category: 'السلتة',
      categoryEn: 'Salta',
      emoji: '🍛',
      items: [
        { name: 'سلتة صرح سبأ', price: '25', desc: 'لحم مفروم مطبوخ بصلصة خاصة' }
      ]
    },
    {
      category: 'المطبق',
      categoryEn: 'Mutabbag',
      emoji: '🥞',
      items: [
        { name: 'مطبق صرح سبأ (مالح)', price: '15', desc: 'عجينة رقيقة محشوة بالخضار والبيض' },
        { name: 'مطبق حلو', price: '10', desc: 'عجينة رقيقة محشوة حسب الاختيار' }
      ]
    },
    {
      category: 'المعصوب والحلويات',
      categoryEn: "Ma'soob & Desserts",
      emoji: '🍯',
      items: [
        { name: 'معصوب بالقشطة والعسل', price: '18', desc: 'خبز مقلي حلو يُخلط مع الموز' },
        { name: 'خبز رطب بالسمن والعسل', price: '10', desc: 'قطع خبز سميكة مغموسة بالسمن والعسل' }
      ]
    }
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
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-red-700 via-red-600 to-black text-white px-8 py-3 rounded-full">
              قائمتنا المميزة
            </span>
          </div>
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-red-700 via-black to-red-700 bg-clip-text text-transparent leading-tight pb-2">
            قائمة الأطباق اليمنية
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-loose pb-2">
            استمتع بتشكيلة واسعة من الأطباق اليمنية الأصيلة المحضرة بعناية فائقة
          </p>
        </motion.div>

        {/* قائمة الأطباق */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredMenuData.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden h-full flex flex-col"
            >
              {/* شريط الألوان */}
              <div className="flex h-2">
                <div className="flex-1 bg-red-700" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-black" />
              </div>

              {/* رأس القسم */}
              <div className="bg-gradient-to-r from-red-700 to-black p-6">
                <h3 className="text-white text-3xl flex flex-col items-center gap-2 text-center">
                  <span className="text-5xl">{section.emoji}</span>
                  <div>
                    <div>{section.category}</div>
                    <div className="text-xs text-red-200 mt-1">{section.categoryEn}</div>
                  </div>
                </h3>
              </div>

              {/* الأطباق */}
              <div className="p-6 space-y-3 flex-1">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="p-4 pb-5 rounded-lg border-r-4 border-red-700 bg-red-50/30 hover:bg-red-100/50 transition-all"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-gray-800 text-base leading-loose pb-1 flex-1">{item.name}</h4>
                        <span className="text-red-700 text-base whitespace-nowrap leading-loose pb-1">
                          {item.price} ر.س
                        </span>
                      </div>
                      {item.desc && (
                        <p className="text-xs text-gray-600 leading-loose pb-1">{item.desc}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
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