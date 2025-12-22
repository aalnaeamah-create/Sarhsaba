import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'العنوان',
      info: 'مدينة الرياض، المملكة العربية السعودية'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      info: '+966 54 844 5421'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      info: 'info@sarhsaba.com'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      info: 'يومياً من 12:00 ظهراً - 12:00 منتصف الليل'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-red-50/20 to-white relative overflow-hidden" ref={ref}>
      {/* عناصر زخرفية بألوان العلم */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-red-700/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-black/5 rounded-full blur-3xl" />
      
      {/* خطوط زخرفية */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-white to-black opacity-30" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-white to-red-700 opacity-30" />
      
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
                تواصل معنا
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-red-700 via-black to-red-700 bg-clip-text text-transparent leading-tight">
            معلومات التواصل
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-loose">
            نسعد بخدمتكم ونرحب بتواصلكم معنا في أي وقت
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              {/* شريط علوي بألوان العلم */}
              <div className="absolute top-0 left-0 right-0 flex h-2">
                <div className="flex-1 bg-red-700" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-black" />
              </div>
              
              {/* توهج خلفي */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-700/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative inline-block p-5 bg-gradient-to-br from-red-700 to-black rounded-full mb-6 group-hover:shadow-xl group-hover:shadow-red-700/50 transition-shadow"
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-gray-800 mb-3 text-xl">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.info}</p>
              
              {/* زخارف جانبية */}
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-red-700 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-black rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-2xl h-96 bg-gray-200 relative"
        >
          {/* إطار بألوان العلم */}
          <div className="absolute top-0 left-0 right-0 flex h-3 z-10">
            <div className="flex-1 bg-red-700" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-black" />
          </div>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.165982478744!2d46.68556431499849!3d24.713451884126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03528045cd85%3A0x13b3d2ae93b7d45e!2sKing%20Fahd%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1639999999999!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="موقع المطعم"
          ></iframe>
          
          {/* إطار سفلي بألوان العلم */}
          <div className="absolute bottom-0 left-0 right-0 flex h-3 z-10">
            <div className="flex-1 bg-black" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-red-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}