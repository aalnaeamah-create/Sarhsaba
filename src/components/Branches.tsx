import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export function Branches() {
  const branches = [
    {
      id: 1,
      name: 'الفرع الرئيسي',
      address: 'حي النرجس، طريق الملك عبدالعزيز، الرياض',
      phone: '+966 54 844 5421',
      hours: 'السبت - الخميس: 12:00 ظهراً - 12:00 صباحاً | الجمعة: 1:00 ظهراً - 12:00 صباحاً',
      mapLink: 'https://maps.google.com',
      image: 'https://images.unsplash.com/photo-1712488070215-d22e012314ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NDMzNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'فرع الملقا',
      address: 'حي الملقا، شارع عثمان بن عفان، الرياض',
      phone: '+966 54 844 5421',
      hours: 'السبت - الخميس: 12:00 ظهراً - 12:00 صباحاً | الجمعة: 1:00 ظهراً - 12:00 صباحاً',
      mapLink: 'https://maps.google.com',
      image: 'https://images.unsplash.com/photo-1705768300072-bb6a0cbb0e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjY0MzM3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'فرع العليا',
      address: 'حي العليا، طريق العروبة، الرياض',
      phone: '+966 54 844 5421',
      hours: 'السبت - الخميس: 12:00 ظهراً - 12:00 صباحاً | الجمعة: 1:00 ظهراً - 12:00 صباحاً',
      mapLink: 'https://maps.google.com',
      image: 'https://images.unsplash.com/photo-1746274394124-141a1d1c5af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZW1lbmklMjBmb29kJTIwZGlzaHxlbnwxfHx8fDE3NjY0MzM3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section id="branches" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* خلفية زخرفية */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-700 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            {/* الإطار الزخرفي */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-4 border-r-4 border-red-700 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-4 border-l-4 border-black rounded-bl-3xl" />
            
            <div className="relative bg-gradient-to-r from-red-700 via-white to-black p-1 rounded-2xl">
              <div className="bg-white px-12 py-6 rounded-2xl">
                <h2 className="text-5xl md:text-6xl mb-4">
                  <span className="bg-gradient-to-r from-red-700 via-black to-red-700 bg-clip-text text-transparent">
                    فروعنا
                  </span>
                </h2>
                <div className="h-1 bg-gradient-to-r from-transparent via-red-700 to-transparent" />
              </div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto"
          >
            زورونا في أي من فروعنا في مدينة الرياض لتجربة طعام يمني أصيل لا يُنسى
          </motion.p>
        </motion.div>

        {/* قائمة الفروع */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-red-700">
                {/* صورة الفرع */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* اسم الفرع */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl text-white mb-2">
                      {branch.name}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-red-700 to-white" />
                  </div>

                  {/* شريط بألوان العلم */}
                  <div className="absolute top-0 left-0 right-0 flex h-2">
                    <div className="flex-1 bg-red-700" />
                    <div className="flex-1 bg-white" />
                    <div className="flex-1 bg-black" />
                  </div>
                </div>

                {/* معلومات الفرع */}
                <div className="p-6 space-y-4">
                  {/* العنوان */}
                  <div className="flex items-start gap-3 group/item">
                    <div className="mt-1 p-2 bg-red-50 rounded-lg group-hover/item:bg-red-100 transition-colors">
                      <MapPin className="text-red-700" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">العنوان</p>
                      <p className="text-gray-800 leading-relaxed">{branch.address}</p>
                    </div>
                  </div>

                  {/* الهاتف */}
                  <div className="flex items-start gap-3 group/item">
                    <div className="mt-1 p-2 bg-red-50 rounded-lg group-hover/item:bg-red-100 transition-colors">
                      <Phone className="text-red-700" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">رقم الهاتف</p>
                      <a 
                        href={`tel:${branch.phone}`}
                        className="text-gray-800 hover:text-red-700 transition-colors"
                        dir="ltr"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* ساعات العمل */}
                  <div className="flex items-start gap-3 group/item">
                    <div className="mt-1 p-2 bg-red-50 rounded-lg group-hover/item:bg-red-100 transition-colors">
                      <Clock className="text-red-700" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 mb-1">ساعات العمل</p>
                      <p className="text-gray-800 leading-relaxed text-sm">{branch.hours}</p>
                    </div>
                  </div>

                  {/* زر الموقع */}
                  <motion.a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-700 to-red-600 text-white py-3 px-6 rounded-xl hover:from-red-800 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl mt-6"
                  >
                    <Navigation size={20} />
                    <span>عرض على الخريطة</span>
                  </motion.a>
                </div>

                {/* زخرفة الزاوية */}
                <div className="absolute top-3 left-3 w-12 h-12 border-t-4 border-l-4 border-white/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 right-3 w-12 h-12 border-b-4 border-r-4 border-red-700/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* معلومات إضافية */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-red-700/10 via-white to-black/10 p-1 rounded-2xl">
            <div className="bg-white px-8 py-6 rounded-2xl">
              <p className="text-gray-700 text-lg">
                📞 للحجز والاستفسار: 
                <a href="tel:+966548445421" className="text-red-700 hover:text-red-800 transition-colors mr-2">
                  +966 54 844 5421
                </a>
              </p>
              <p className="text-gray-600 mt-2">
                نقدم خدمة التوصيل لجميع أنحاء الرياض
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}