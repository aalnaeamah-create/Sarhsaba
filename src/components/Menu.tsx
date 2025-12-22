import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageCircle } from 'lucide-react';

interface MenuProps {
  fahsaImage: string;
  saltaImage: string;
  matbaqImage: string;
  masoobImage: string;
}

export function Menu({ fahsaImage, saltaImage, matbaqImage, masoobImage }: MenuProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // رقم الواتساب
  const whatsappNumber = '966548445421';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const menuItems = [
    {
      category: 'الأطباق الساخنة',
      image: fahsaImage,
      items: [
        { name: 'الفحسة اليمنية', description: 'طبق لحم يمني شهير مطبوخ في وعاء حجري مع المرق والحلبة' },
        { name: 'السلتة اليمنية', description: 'طبق تقليدي من اللحم والخضار والحلبة مع الخبز اليمني' },
        { name: 'العصيد', description: 'طبق تقليدي من العجين المطبوخ مع المرق' }
      ]
    },
    {
      category: 'المخبوزات',
      image: matbaqImage,
      items: [
        { name: 'المطبق', description: 'فطيرة يمنية محشوة باللحم أو البيض أو الخضار' },
        { name: 'الملوح', description: 'خبز يمني تقليدي مخبوز في التنور' },
        { name: 'الصياح', description: 'خبز يمني طري محشو بمكونات لذيذة' }
      ]
    },
    {
      category: 'الحلويات اليمنية',
      image: masoobImage,
      items: [
        { name: 'المعصوب', description: 'حلى يمني شهير من الموز والخبز والقشطة والعسل' },
        { name: 'بنت الصحن', description: 'حلوى يمنية تقليدية مع العسل والسمن' },
        { name: 'العريكة', description: 'حلى يمني من الدقيق والعسل والسمن' }
      ]
    },
    {
      category: 'المشروبات اليمنية',
      image: saltaImage,
      items: [
        { name: 'القشر اليمني', description: 'مشروب تقليدي من قشور البن مع الزنجبيل' },
        { name: 'الشاي اليمني', description: 'شاي أحمر مع الحليب والتوابل' },
        { name: 'الحليب بالعسل', description: 'مشروب صحي من الحليب والعسل اليمني الأصلي' }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white via-red-50/30 to-white relative overflow-hidden" ref={ref}>
      {/* عناصر خلفية زخرفية بألوان العلم */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-700/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-black/10 rounded-full blur-3xl animate-pulse" />
      
      {/* خطوط زخرفية بألوان العلم */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-white to-black opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-white to-red-700 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-black blur-lg opacity-50" />
              <span className="relative bg-gradient-to-r from-red-700 via-red-600 to-black text-white px-8 py-3 rounded-full border-2 border-white/30">
                قائمتنا المميزة
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-red-700 via-black to-red-700 bg-clip-text text-transparent leading-tight">
            قائمة الأطباق اليمنية
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-loose">
            استمتع بتشكيلة واسعة من الأطباق اليمنية الأصيلة المحضرة بعناية فائقة
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group relative"
            >
              {/* إطار بألوان العلم */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-700/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
              
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ duration: 0.7 }}
                  src={category.image}
                  alt={category.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* شريط بألوان العلم اليمني */}
                <div className="absolute top-0 left-0 right-0 flex">
                  <div className="h-3 flex-1 bg-red-700" />
                  <div className="h-3 flex-1 bg-white" />
                  <div className="h-3 flex-1 bg-black" />
                </div>
                
                {/* العنوان */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-white text-3xl drop-shadow-2xl flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-700 rounded-full animate-pulse" />
                    {category.category}
                  </h3>
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-b from-white to-red-50/20">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                    whileHover={{ x: 8, backgroundColor: '#fee2e2' }}
                    className="mb-6 last:mb-0 pb-6 last:pb-0 border-b last:border-b-0 border-red-700/20 rounded-lg px-4 py-3 transition-all cursor-pointer group/item"
                  >
                    <h4 className="text-gray-800 mb-2 flex items-center gap-3 text-lg">
                      <span className="w-3 h-3 bg-gradient-to-br from-red-700 to-black rounded-full group-hover/item:scale-125 transition-transform" />
                      <span className="group-hover/item:text-red-700 transition-colors">
                        {item.name}
                      </span>
                    </h4>
                    <p className="text-sm text-gray-600 mr-6 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* حدود زخرفية */}
              <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-red-700 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-4 border-l-4 border-black rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* زر التواصل عبر الواتساب */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl shadow-lg border-2 border-red-700/20">
            <h3 className="text-2xl mb-4 text-gray-800">للاستفسار عن الأسعار</h3>
            <p className="text-gray-600 mb-6">تواصل معنا مباشرة عبر الواتساب للحصول على الأسعار وتفاصيل القائمة الكاملة</p>
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 211, 102, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-full transition-all shadow-xl border-2 border-green-400 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              <MessageCircle size={28} className="group-hover:rotate-12 transition-transform relative z-10" />
              <span className="text-lg relative z-10">تواصل معنا عبر الواتساب</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}