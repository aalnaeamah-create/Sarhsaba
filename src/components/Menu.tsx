export function Menu() {
  const menuData = [
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
      category: 'المقلقل',
      categoryEn: 'Maqlaql',
      emoji: '🍖',
      items: [
        { name: 'مقلقل لحم', price: '25', desc: 'مكعبات لحم طازجة مطبوخة مع البهارات' },
        { name: 'مقلقل دجاج', price: '22', desc: 'صدر دجاج مطبوخ مع خضار مفرومة' }
      ]
    },
    {
      category: 'العقدة',
      categoryEn: 'Oqda',
      emoji: '🐟',
      items: [
        { name: 'عقدة سمك', price: '35', desc: 'سمك كنعد طازج مطبوخ ببطء مع الخضار' },
        { name: 'عقدة جمبري', price: '35', desc: 'جمبري طازج مطبوخ حسب الطلب' },
        { name: 'عقدة صرح سبأ (خضار)', price: '14' },
        { name: 'عقدة دجاج', price: '25' }
      ]
    },
    {
      category: 'أطباق خاصة',
      categoryEn: 'Special Dishes',
      emoji: '🥩',
      items: [
        { name: 'برمة لحم', price: '70', desc: 'لحم غنم مطبوخ على ثلاث مراحل' },
        { name: 'كبدة صرح سبأ', price: '25', desc: 'كبدة طازجة مطبوخة بزيت الزيتون' },
        { name: 'حنيذ', price: '70' },
        { name: 'رضيفة', price: '30' }
      ]
    },
    {
      category: 'القلابة والفاصوليا',
      categoryEn: 'Qelaba & Beans',
      emoji: '🍳',
      items: [
        { name: 'فول قلابة', price: '14', desc: 'فول مطبوخ مع الطماطم والبصل' },
        { name: 'قلابة تونة', price: '17', desc: 'بصل مشوّح خفيفًا مع تونة' },
        { name: 'فاصوليا بالبيض', price: '15', desc: 'فاصوليا بيضاء مطبوخة بخلطة صرح سبأ' },
        { name: 'مشكل خضار بالبيض', price: '14' },
        { name: 'شكشوكة', price: '15' },
        { name: 'فاصوليا سادة', price: '12' },
        { name: 'لحسة', price: '18' },
        { name: 'عدس', price: '15' },
        { name: 'بامية', price: '12' },
        { name: 'بازلا سادة', price: '10' },
        { name: 'بازلاء مع تونة', price: '13' },
        { name: 'بازلاء مع بيض', price: '12' }
      ]
    },
    {
      category: 'الخبز',
      categoryEn: 'Bread',
      emoji: '🫓',
      items: [
        { name: 'خبز ملوح يمني', price: '4', desc: 'خبز يمني طبقات تقليدي' },
        { name: 'بنت الصحن', price: '20' },
        { name: 'رطب عسل', price: '12' },
        { name: 'رطب سمن', price: '10' },
        { name: 'سحاوق حار', price: '3' },
        { name: 'سحاوق جبن', price: '5' },
        { name: 'بسكويت', price: '20' }
      ]
    },
    {
      category: 'المطبق',
      categoryEn: 'Mutabbag',
      emoji: '🥞',
      items: [
        { name: 'مطبق صرح سبأ (مالح)', price: '15', desc: 'عجينة رقيقة محشوة بالخضار والبيض' },
        { name: 'مطبق حلو', price: '10', desc: 'عجينة رقيقة محشوة حسب الاختيار' },
        { name: 'مطبق مالح', price: '12' },
        { name: 'مطبق جبن حلو', price: '10' },
        { name: 'مطبق جبن مالح', price: '13' },
        { name: 'مطبق موز حلو', price: '10' },
        { name: 'مطبق تونة', price: '15' },
        { name: 'مطبق حراق', price: '13' },
        { name: 'مطبق نتيلا', price: '15' },
        { name: 'مطبق قشطة', price: '15' },
        { name: 'مطبق جبن سائل', price: '13' },
        { name: 'مطبق شيسوس', price: '15' },
        { name: 'مطبق شاورما', price: '15' },
        { name: 'مطبق لوتس', price: '12' }
      ]
    },
    {
      category: 'المعصوب والحلويات',
      categoryEn: "Ma'soob & Desserts",
      emoji: '🍯',
      items: [
        { name: 'معصوب بالقشطة والعسل', price: '18', desc: 'خبز مقلي حلو يُخلط مع الموز' },
        { name: 'خبز رطب بالسمن والعسل', price: '10', desc: 'قطع خبز سميكة مغموسة بالسمن والعسل' },
        { name: 'بسكوت يمني (بسكوتة)', price: '20', desc: 'حلوى يمنية تقليدية' },
        { name: 'مرسة جيزاني بالعسل', price: '18', desc: 'حلوى جيزانية مشهورة' },
        { name: 'مرسة', price: '18' },
        { name: 'معصوب عادي', price: '10' },
        { name: 'معصوب قشطة', price: '15' },
        { name: 'معصوب صرح سبأ', price: '25' }
      ]
    },
    {
      category: 'الفتّة',
      categoryEn: 'Fattah',
      emoji: '🥣',
      items: [
        { name: 'فتة عادي', price: '9' },
        { name: 'فتة قشطة', price: '15' },
        { name: 'فتة قشطة عسل', price: '18' },
        { name: 'عريكة', price: '25' }
      ]
    },
    {
      category: 'المشروبات',
      categoryEn: 'Beverages',
      emoji: '☕',
      items: [
        { name: 'شاي أحمر', price: '2' },
        { name: 'شاي عدني', price: '4' },
        { name: 'شاي زنجبيل', price: '2' },
        { name: 'شاي حليب', price: '3' },
        { name: 'شاي نعناع', price: '2' },
        { name: 'شاي كرك', price: '6' },
        { name: 'مشروبات غازية', price: '4' },
        { name: 'ماء', price: '1' }
      ]
    },
    {
      category: 'الأرز والإضافات',
      categoryEn: 'Rice & Sides',
      emoji: '🍚',
      items: [
        { name: 'أرز أبيض', price: '5' },
        { name: 'أرز أحمر', price: '5' }
      ]
    }
  ];

  return (
    <section id="menu" className="py-12 bg-gradient-to-b from-white via-red-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
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
        </div>

        {/* قائمة الأطباق */}
        <div className="space-y-12">
          {menuData.map((section) => (
            <div key={section.category} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* شريط الألوان */}
              <div className="flex h-2">
                <div className="flex-1 bg-red-700" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-black" />
              </div>

              {/* رأس القسم */}
              <div className="bg-gradient-to-r from-red-700 to-black p-6">
                <h3 className="text-white text-4xl flex items-center gap-4">
                  <span className="text-5xl">{section.emoji}</span>
                  <div>
                    <div>{section.category}</div>
                    <div className="text-sm text-red-200">{section.categoryEn}</div>
                  </div>
                </h3>
              </div>

              {/* الأطباق */}
              <div className="p-8 space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-6 pb-7 rounded-lg border-r-4 border-red-700 bg-red-50/30 hover:bg-red-100/50 transition-all"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-gray-800 text-lg mb-2 leading-loose pb-1">{item.name}</h4>
                        {item.desc && (
                          <p className="text-sm text-gray-600 leading-loose pb-1">{item.desc}</p>
                        )}
                      </div>
                      <span className="text-red-700 text-lg whitespace-nowrap leading-loose pb-1">
                        {item.price} ريال
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}