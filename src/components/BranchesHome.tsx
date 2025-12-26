import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation, ArrowLeft } from 'lucide-react';

interface BranchesHomeProps {
  onViewAll?: () => void;
}

export function BranchesHome({ onViewAll }: BranchesHomeProps) {
  // أول 4 فروع فقط للصفحة الرئيسية
  const featuredBranches = [
    {
      id: 1,
      name: 'فرع بارك أفينيو',
      mallName: 'بارك أفينيو',
      address: 'بارك أفينيو، قرطبة، الرياض 13248',
      phone: '+966 54 844 5421',
      hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
      mapLink: 'https://maps.app.goo.gl/GRWKXssxueovXUocA',
      image: 'https://lh3.googleusercontent.com/d/1xOuHJN0SKmfGrGcqNy3WodPKDMwGMgWd'
    },
    {
      id: 2,
      name: 'فرع حياة مول',
      mallName: 'حياة مول',
      address: 'حياة مول، طريق الملك عبدالعزيز، الرياض 13341',
      phone: '+966 54 844 5421',
      hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
      mapLink: 'https://maps.app.goo.gl/mcEAif6dVmhMLKxw6',
      image: 'https://lh3.googleusercontent.com/d/1oNAeZsg58pTz77FdKy7LrM039VQGb-8d'
    },
    {
      id: 3,
      name: 'فرع القصر مول',
      mallName: 'القصر مول',
      address: 'القصر مول، السويدي، الرياض 12791',
      phone: '+966 54 844 5421',
      hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
      mapLink: 'https://maps.app.goo.gl/hdRkHW2mtkCyxhMq8',
      image: 'https://lh3.googleusercontent.com/d/1xdp_PecYsIhSWcSs1Ldzx36KYE2uo-6x'
    },
    {
      id: 4,
      name: 'فرع غرناطة مول',
      mallName: 'غرناطة مول',
      address: 'غرناطة مول، غرناطة، الرياض 13241',
      phone: '+966 54 844 5421',
      hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
      mapLink: 'https://maps.app.goo.gl/4zXyCG5JHkA7onjd6',
      image: 'https://lh3.googleusercontent.com/d/1yEe1VFu3x1CK4C2Zaow3KS4U86nshE0n'
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
            زورونا في أي فرع من فروعنا المتواجدة في المملكة العربية السعودية
          </motion.p>
        </motion.div>

        {/* قائمة الفروع */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {featuredBranches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-red-700 h-full flex flex-col">
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
                    <h3 className="text-2xl text-white mb-2">
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
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  {/* العنوان */}
                  <div className="flex items-start gap-3 group/item">
                    <div className="mt-1 p-2 bg-red-50 rounded-lg group-hover/item:bg-red-100 transition-colors">
                      <MapPin className="text-red-700" size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">العنوان</p>
                      <p className="text-sm text-gray-800 leading-relaxed">{branch.address}</p>
                    </div>
                  </div>

                  {/* الهاتف */}
                  <div className="flex items-start gap-3 group/item">
                    <div className="mt-1 p-2 bg-red-50 rounded-lg group-hover/item:bg-red-100 transition-colors">
                      <Phone className="text-red-700" size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">رقم الهاتف</p>
                      <a 
                        href={`tel:${branch.phone}`}
                        className="text-sm text-gray-800 hover:text-red-700 transition-colors"
                        dir="ltr"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>

                  {/* ساعات العمل */}
                  <div className="flex items-start gap-3 group/item">
                    <div className="mt-1 p-2 bg-red-50 rounded-lg group-hover/item:bg-red-100 transition-colors">
                      <Clock className="text-red-700" size={18} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 mb-1">ساعات العمل</p>
                      <p className="text-xs text-gray-800 leading-relaxed">{branch.hours}</p>
                    </div>
                  </div>

                  {/* زر الموقع */}
                  <motion.a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-700 to-red-600 text-white py-3 px-6 rounded-xl hover:from-red-800 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl mt-auto"
                  >
                    <Navigation size={18} />
                    <span className="text-sm">عرض على الخريطة</span>
                  </motion.a>
                </div>

                {/* زخرفة الزاوية */}
                <div className="absolute top-3 left-3 w-12 h-12 border-t-4 border-l-4 border-white/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 right-3 w-12 h-12 border-b-4 border-r-4 border-red-700/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر المزيد من الفروع */}
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
            <span>المزيد من الفروع</span>
            <ArrowLeft size={24} />
          </motion.button>
          <p className="text-gray-600 mt-4 text-sm">
            لدينا 25 فرعاً في 13 مدينة سعودية
          </p>
        </motion.div>
      </div>
    </section>
  );
}