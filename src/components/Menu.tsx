export function Menu() {
  // تحويل البيانات إلى قائمة مسطحة من الأطباق
  const allDishes = [
    // الفحسة
    { name: 'فحسة صرح سبأ', price: '35', desc: 'لحم مطبوخ على نار هادئة لمدة تصل إلى 6 ساعات', category: 'الفحسة', emoji: '🍲' },
    { name: 'فحسة دجاج', price: '25', desc: 'قطع دجاج مسلوقة مع البهارات', category: 'الفحسة', emoji: '🍲' },
    
    // السلتة
    { name: 'سلتة صرح سبأ', price: '25', desc: 'لحم مفروم مطبوخ بصلصة خاصة', category: 'السلتة', emoji: '🍛' },
    
    // المقلقل
    { name: 'مقلقل لحم', price: '25', desc: 'مكعبات لحم طازجة مطبوخة مع البهارات', category: 'المقلقل', emoji: '🍖' },
    { name: 'مقلقل دجاج', price: '22', desc: 'صدر دجاج مطبوخ مع خضار مفرومة', category: 'المقلقل', emoji: '🍖' },
    
    // العقدة
    { name: 'عقدة سمك', price: '35', desc: 'سمك كنعد طازج مطبوخ ببطء مع الخضار', category: 'العقدة', emoji: '🐟' },
    { name: 'عقدة جمبري', price: '35', desc: 'جمبري طازج مطبوخ حسب الطلب', category: 'العقدة', emoji: '🐟' },
    { name: 'عقدة صرح سبأ (خضار)', price: '14', category: 'العقدة', emoji: '🐟' },
    { name: 'عقدة دجاج', price: '25', category: 'العقدة', emoji: '🐟' },
    
    // أطباق خاصة
    { name: 'برمة لحم', price: '70', desc: 'لحم غنم مطبوخ على ثلاث مراحل', category: 'أطباق خاصة', emoji: '🥩' },
    { name: 'كبدة صرح سبأ', price: '25', desc: 'كبدة طازجة مطبوخة بزيت الزيتون', category: 'أطباق خاصة', emoji: '🥩' },
    { name: 'حنيذ', price: '70', category: 'أطباق خاصة', emoji: '🥩' },
    { name: 'رضيفة', price: '30', category: 'أطباق خاصة', emoji: '🥩' },
    
    // القلابة والفاصوليا
    { name: 'فول قلابة', price: '14', desc: 'فول مطبوخ مع الطماطم والبصل', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'قلابة تونة', price: '17', desc: 'بصل مشوّح خفيفًا مع تونة', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'فاصوليا بالبيض', price: '15', desc: 'فاصوليا بيضاء مطبوخة بخلطة صرح سبأ', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'مشكل خضار بالبيض', price: '14', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'شكشوكة', price: '15', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'فاصوليا سادة', price: '12', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'لحسة', price: '18', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'عدس', price: '15', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'بامية', price: '12', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'بازلا سادة', price: '10', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'بازلاء مع تونة', price: '13', category: 'القلابة والفاصوليا', emoji: '🍳' },
    { name: 'بازلاء مع بيض', price: '12', category: 'القلابة والفاصوليا', emoji: '🍳' },
    
    // الخبز
    { name: 'خبز ملوح يمني', price: '4', desc: 'خبز يمني طبقات تقليدي', category: 'الخبز', emoji: '🫓' },
    { name: 'بنت الصحن', price: '20', category: 'الخبز', emoji: '🫓' },
    { name: 'رطب عسل', price: '12', category: 'الخبز', emoji: '🫓' },
    { name: 'رطب سمن', price: '10', category: 'الخبز', emoji: '🫓' },
    { name: 'سحاوق حار', price: '3', category: 'الخبز', emoji: '🫓' },
    { name: 'سحاوق جبن', price: '5', category: 'الخبز', emoji: '🫓' },
    { name: 'بسكويت', price: '20', category: 'الخبز', emoji: '🫓' },
    
    // المطبق
    { name: 'مطبق صرح سبأ (مالح)', price: '15', desc: 'عجينة رقيقة محشوة بالخضار والبيض', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق حلو', price: '10', desc: 'عجينة رقيقة محشوة حسب الاختيار', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق مالح', price: '12', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق جبن حلو', price: '10', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق جبن مالح', price: '13', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق موز حلو', price: '10', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق تونة', price: '15', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق حراق', price: '13', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق نتيلا', price: '15', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق قشطة', price: '15', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق جبن سائل', price: '13', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق شيسوس', price: '15', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق شاورما', price: '15', category: 'المطبق', emoji: '🥞' },
    { name: 'مطبق لوتس', price: '12', category: 'المطبق', emoji: '🥞' },
    
    // المعصوب والحلويات
    { name: 'معصوب بالقشطة والعسل', price: '18', desc: 'خبز مقلي حلو يُخلط مع الموز', category: 'المعصوب والحلويات', emoji: '🍯' },
    { name: 'خبز رطب بالسمن والعسل', price: '10', desc: 'قطع خبز سميكة مغموسة بالسمن والعسل', category: 'المعصوب والحلويات', emoji: '🍯' },
    { name: 'بسكوت يمني (بسكوتة)', price: '20', desc: 'حلوى يمنية تقليدية', category: 'المعصوب والحلويات', emoji: '🍯' },
    { name: 'مرسة جيزاني بالعسل', price: '18', desc: 'حلوى جيزانية مشهورة', category: 'المعصوب والحلويات', emoji: '🍯' },
    { name: 'مرسة', price: '18', category: 'المعصوب والحلويات', emoji: '🍯' },
    { name: 'معصوب عادي', price: '10', category: 'المعصوب والحلويات', emoji: '🍯' },
    { name: 'معصوب قشطة', price: '15', category: 'المعصوب والحلويات', emoji: '🍯' },
    { name: 'معصوب صرح سبأ', price: '25', category: 'المعصوب والحلويات', emoji: '🍯' },
    
    // الفتّة
    { name: 'فتة عادي', price: '9', category: 'الفتّة', emoji: '🥣' },
    { name: 'فتة قشطة', price: '15', category: 'الفتّة', emoji: '🥣' },
    { name: 'فتة قشطة عسل', price: '18', category: 'الفتّة', emoji: '🥣' },
    { name: 'عريكة', price: '25', category: 'الفتّة', emoji: '🥣' },
    
    // المشروبات
    { name: 'شاي أحمر', price: '2', category: 'المشروبات', emoji: '☕' },
    { name: 'شاي عدني', price: '4', category: 'المشروبات', emoji: '☕' },
    { name: 'شاي زنجبيل', price: '2', category: 'المشروبات', emoji: '☕' },
    { name: 'شاي حليب', price: '3', category: 'المشروبات', emoji: '☕' },
    { name: 'شاي نعناع', price: '2', category: 'المشروبات', emoji: '☕' },
    { name: 'شاي كرك', price: '6', category: 'المشروبات', emoji: '☕' },
    { name: 'مشروبات غازية', price: '4', category: 'المشروبات', emoji: '☕' },
    { name: 'ماء', price: '1', category: 'المشروبات', emoji: '☕' },
    
    // الأرز والإضافات
    { name: 'أرز أبيض', price: '5', category: 'الأرز والإضافات', emoji: '🍚' },
    { name: 'أرز أحمر', price: '5', category: 'الأرز والإضافات', emoji: '🍚' }
  ];

  return (
    <section id="menu" className="py-12 bg-gradient-to-b from-white via-red-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-red-700 via-black to-red-700 bg-clip-text text-transparent leading-tight pb-2">
            قائمة الأطباق اليمنية
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-loose pb-2">
            استمتع بتشكيلة واسعة من الأطباق اليمنية الأصيلة المحضرة بعناية فائقة
          </p>
        </div>

        {/* شبكة الأطباق */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allDishes.map((dish, index) => (
            <div 
              key={`${dish.name}-${index}`} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* شريط الألوان */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}