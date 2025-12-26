import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Branches() {
  // تنظيم الفروع حسب المدن - 22 فرع في 9 مدن
  const branchesByCity = [
    {
      city: 'الرياض',
      branches: [
        {
          id: 1,
          name: 'فرع بارك أفينيو',
          mallName: 'بارك أفينيو',
          address: 'بارك أفينيو، الرياض',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1xOuHJN0SKmfGrGcqNy3WodPKDMwGMgWd'
        },
        {
          id: 2,
          name: 'فرع حياة مول',
          mallName: 'حياة مول',
          address: 'حياة مول، الرياض',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1oNAeZsg58pTz77FdKy7LrM039VQGb-8d'
        },
        {
          id: 3,
          name: 'فرع القصر مول',
          mallName: 'القصر مول',
          address: 'القصر مول، الرياض',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1xdp_PecYsIhSWcSs1Ldzx36KYE2uo-6x'
        },
        {
          id: 4,
          name: 'فرع غرناطة مول',
          mallName: 'غرناطة مول',
          address: 'غرناطة مول، الرياض',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1yEe1VFu3x1CK4C2Zaow3KS4U86nshE0n'
        }
      ]
    },
    {
      city: 'تبوك',
      branches: [
        {
          id: 5,
          name: 'فرع تبوك بارك',
          mallName: 'تبوك بارك',
          address: 'تبوك بارك، تبوك',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1USfJg1xiyKnJMjst_ArlldZq2HQEAMEz'
        }
      ]
    },
    {
      city: 'المدينة المنورة',
      branches: [
        {
          id: 6,
          name: 'فرع الراشد ميغا مول',
          mallName: 'الراشد ميغا مول',
          address: 'الراشد ميغا مول، المدينة المنورة',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: 'https://maps.app.goo.gl/E16sMsWZhTFMCXUx8',
          image: 'https://lh3.googleusercontent.com/d/1-uZ5dviPOQ7ilvP97-WWyY4ThJDOMc30'
        }
      ]
    },
    {
      city: 'جدة',
      branches: [
        {
          id: 9,
          name: 'فرع جدة بارك',
          mallName: 'جدة بارك',
          address: 'جدة بارك، جدة',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: 'https://maps.app.goo.gl/3LTeqgurG2BS7n9G9',
          image: 'https://lh3.googleusercontent.com/d/1USfJg1xiyKnJMjst_ArlldZq2HQEAMEz'
        },
        {
          id: 10,
          name: 'فرع الأندلس مول',
          mallName: 'الأندلس مول',
          address: 'الأندلس مول، جدة',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: 'https://maps.app.goo.gl/RaiosPvqGoZYsFQF7',
          image: 'https://lh3.googleusercontent.com/d/1-uZ5dviPOQ7ilvP97-WWyY4ThJDOMc30'
        }
      ]
    },
    {
      city: 'مكة المكرمة',
      branches: [
        {
          id: 11,
          name: 'فرع مكة مول',
          mallName: 'مكة مول',
          address: 'مكة مول، مكة المكرمة',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: 'https://maps.app.goo.gl/oRifyNLVoQuPb6z99',
          image: 'https://lh3.googleusercontent.com/d/1xOuHJN0SKmfGrGcqNy3WodPKDMwGMgWd'
        },
        {
          id: 12,
          name: 'فرع الهدا بارك',
          mallName: 'الهدا بارك',
          address: 'الهدا بارك، مكة المكرمة',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1oNAeZsg58pTz77FdKy7LrM039VQGb-8d'
        },
        {
          id: 13,
          name: 'فرع المسار مول',
          mallName: 'المسار مول',
          address: 'المسار مول، مكة المكرمة',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1xdp_PecYsIhSWcSs1Ldzx36KYE2uo-6x'
        }
      ]
    },
    {
      city: 'خميس مشيط',
      branches: [
        {
          id: 14,
          name: 'فرع موجان بارك',
          mallName: 'موجان بارك',
          address: 'موجان بارك، خميس مشيط',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1yEe1VFu3x1CK4C2Zaow3KS4U86nshE0n'
        },
        {
          id: 15,
          name: 'فرع قربان المكان مول',
          mallName: 'قربان المكان مول',
          address: 'قربان المكان مول، خميس مشيط',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1USfJg1xiyKnJMjst_ArlldZq2HQEAMEz'
        }
      ]
    },
    {
      city: 'أبها',
      branches: [
        {
          id: 16,
          name: 'فرع الراشد مول',
          mallName: 'الراشد مول',
          address: 'الراشد مول، أبها',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1-uZ5dviPOQ7ilvP97-WWyY4ThJDOMc30'
        }
      ]
    },
    {
      city: 'جازان',
      branches: [
        {
          id: 17,
          name: 'فرع كادي مول',
          mallName: 'كادي مول',
          address: 'كادي مول، جازان',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1xOuHJN0SKmfGrGcqNy3WodPKDMwGMgWd'
        },
        {
          id: 18,
          name: 'فرع الراشد ميغا مول',
          mallName: 'الراشد ميغا مول',
          address: 'الراشد ميغا مول، جازان',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1oNAeZsg58pTz77FdKy7LrM039VQGb-8d'
        }
      ]
    },
    {
      city: 'نجران',
      branches: [
        {
          id: 19,
          name: 'فرع نجران بارك',
          mallName: 'نجران بارك',
          address: 'نجران بارك، نجران',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1xdp_PecYsIhSWcSs1Ldzx36KYE2uo-6x'
        },
        {
          id: 20,
          name: 'فرع قربان واجهة نجران',
          mallName: 'قربان واجهة نجران',
          address: 'قربان وجهة نجران، نجران',
          phone: '+966 54 844 5421',
          hours: 'السبت الى الخميس: 8:00 صباحاً حتى 1:00 صباحاً | الجمعة: 1:00 ظهراً حتى 1:00 صباحاً',
          mapLink: '#',
          image: 'https://lh3.googleusercontent.com/d/1yEe1VFu3x1CK4C2Zaow3KS4U86nshE0n'
        }
      ]
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
            {/* الإطار ازخرفي */}
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
            زورونا في أي فرع من فروعنا المتواجدة في المملكة العربية السعودية لتجربة طعام يمني أصيل لا يُنسى
          </motion.p>

          {/* صورة قائمة الفروع */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-red-700 via-white to-black p-1 rounded-3xl shadow-2xl">
              <div className="bg-white p-4 rounded-3xl">
                <ImageWithFallback
                  src="https://lh3.googleusercontent.com/d/14OK9OXMAdCnTEbm0wFt9I5bGRl5Tc2yV"
                  alt="قائمة فروع صرح سبأ في المملكة العربية السعودية"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              {/* زخرفة الزوايا */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-4 border-r-4 border-red-700 rounded-tr-3xl" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-4 border-l-4 border-black rounded-bl-3xl" />
            </div>
          </motion.div>
        </motion.div>

        {/* قائمة الفروع */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {branchesByCity.flatMap(cityBranches => cityBranches.branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
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

                  {/* زر ��لموقع */}
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
          )))}
        </div>
      </div>
    </section>
  );
}