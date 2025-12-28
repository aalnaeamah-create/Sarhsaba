import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Users, Clock } from 'lucide-react';

interface AboutProps {
  aboutImage: string;
}

export function About({ aboutImage }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    { icon: '🍽️', title: 'أطباق متنوعة', description: 'الفحسة، السلتة، المطبق والمعصوب' },
    { icon: '🏛️', title: 'تراث أصيل', description: 'تجربة ضيافة تعكس التراث اليمني' },
    { icon: '⭐', title: 'جودة عالية', description: 'نكهات غنية وأساليب تقديم مميزة' },
    { icon: '💰', title: 'أسعار مناسبة', description: 'كرم الضيافة وأسعار لجميع الفئات' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* عناصر زخرفية بألوان العلم */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-700/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-red-700 to-black rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500" />
            <img
              src={aboutImage}
              alt="عن مطعم صرح سبأ"
              className="relative w-full h-[500px] object-cover rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
            {/* إطار زخرفي */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-red-700 rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-black rounded-bl-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-red-700 to-black text-white px-6 py-2 rounded-full">
                من نحن
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent leading-tight">
              حول مطاعم صرح سبأ
            </h2>
            
            <p className="text-gray-700 mb-6 text-lg leading-loose">
              مطاعم صرح سبأ هي سلسلة مطاعم متخصصة في تقديم المأكولات اليمنية الأصيلة، 
              وتتميز بتنوع أطباقها الشعبية مثل <span className="text-red-700 font-semibold">الفحسة، السلتة، المطبق، والمعصوب</span>.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-loose">
              تسعى المطاعم إلى تقديم تجربة ضيافة تقليدية تعكس التراث اليمني من خلال 
              النكهات الغنية، وأساليب التقديم، والأجواء التي تمزج بين الطابع الشعبي والحديث.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-loose">
              يشتهر مطعم صرح سبأ بجودة الطعام، وكرم الضيافة، والأسعار المناسبة لمختلف الفئات.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-all border-r-4 border-red-700 group cursor-pointer"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-gray-800 leading-relaxed">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-red-700 to-black text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              اكتشف قائمتنا
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}