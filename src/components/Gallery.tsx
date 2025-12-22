import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';

interface GalleryProps {
  images: string[];
}

export function Gallery({ images }: GalleryProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* عناصر زخرفية بألوان العلم */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-700/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-black/5 rounded-full blur-3xl" />
      
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
                معرضنا
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-red-700 via-black to-red-700 bg-clip-text text-transparent leading-tight">
            معرض الصور
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-loose">
            استكشف أجواء مطعمنا وأشهى أطباقنا اليمنية من خلال معرض الصور
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-all"
              onClick={() => setSelectedImage(image)}
            >
              {/* شريط علوي بألوان العلم اليمني */}
              <div className="absolute top-0 left-0 right-0 flex z-10 h-2">
                <div className="flex-1 bg-red-700" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-black" />
              </div>
              
              <motion.img
                whileHover={{ scale: 1.2, rotate: 2 }}
                transition={{ duration: 0.7 }}
                src={image}
                alt={`صورة ${index + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* تدرج بألوان العلم */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-red-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* إطار زخرفي */}
              <div className="absolute -top-2 -right-2 w-12 h-12 border-t-4 border-r-4 border-red-700 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-4 border-l-4 border-black rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* أيقونة توسيع */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  className="w-20 h-20 bg-gradient-to-br from-red-700 to-black rounded-full flex items-center justify-center border-4 border-white shadow-2xl"
                >
                  <span className="text-3xl text-white font-bold">+</span>
                </motion.div>
              </div>
              
              {/* رقم الصورة */}
              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-700 to-black text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity border-2 border-white/50">
                <span className="text-sm">صورة {index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* شريط علوي بألوان العلم */}
          <div className="absolute top-0 left-0 right-0 flex h-2">
            <div className="flex-1 bg-red-700" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-black" />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors bg-gradient-to-br from-red-700 to-black w-14 h-14 rounded-full flex items-center justify-center hover:from-red-600 hover:to-black border-2 border-white/30 shadow-2xl z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </motion.button>
          
          <motion.img
            initial={{ scale: 0.5, rotateY: 90 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            src={selectedImage}
            alt="صورة مكبرة"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border-4 border-white/20"
          />
          
          {/* شريط سفلي بألوان العلم */}
          <div className="absolute bottom-0 left-0 right-0 flex h-2">
            <div className="flex-1 bg-black" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-red-700" />
          </div>
        </motion.div>
      )}
    </section>
  );
}