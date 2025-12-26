import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, MapPin, Utensils } from 'lucide-react';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, scrollTo?: string) => void;
}

// بيانات الأطباق
const menuItems = [
  { id: 1, name: 'الفحسة', category: 'الأطباق الرئيسية', description: 'طبق لحم مطبوخ بالبهارات اليمنية التقليدية' },
  { id: 2, name: 'السلتة', category: 'الأطباق الرئيسية', description: 'طبق يمني شعبي ساخن بالحلبة واللحم' },
  { id: 3, name: 'المندي', category: 'الأطباق الرئيسية', description: 'أرز بخاري مع لحم مشوي بالطريقة اليمنية' },
  { id: 4, name: 'الحنيذ', category: 'الأطباق الرئيسية', description: 'لحم مشوي في التنور اليمني التقليدي' },
  { id: 5, name: 'المظبي', category: 'الأطباق الرئيسية', description: 'أرز مطبوخ مع اللحم والبصل المقلي' },
  { id: 6, name: 'المطبق', category: 'المعجنات', description: 'معجنات رقيقة محشوة باللحم أو الخضار' },
  { id: 7, name: 'الملوح', category: 'المعجنات', description: 'خبز يمني تقليدي مقرمش ولذيذ' },
  { id: 8, name: 'السمبوسة', category: 'المقبلات', description: 'فطائر مقلية محشوة باللحم والخضار' },
  { id: 9, name: 'الشفوت', category: 'الأطباق الرئيسية', description: 'طبق يمني بالخبز واللبن والحلبة' },
  { id: 10, name: 'العصيد', category: 'الحلويات', description: 'حلوى يمنية تقليدية بالدقيق والعسل' },
  { id: 11, name: 'المعصوب', category: 'الحلويات', description: 'موز مهروس مع القشطة والعسل' },
  { id: 12, name: 'البنت الصحن', category: 'الحلويات', description: 'حلوى يمنية بالعسل والسمن البلدي' },
  { id: 13, name: 'الشاي الأدني', category: 'المشروبات', description: 'شاي يمني تقليدي بالحليب والهيل' },
  { id: 14, name: 'القشر', category: 'المشروبات', description: 'مشروب يمني تقليدي من قشور القهوة' },
  { id: 15, name: 'الشربات', category: 'المشروبات', description: 'مشروب منعش بنكهات طبيعية' }
];

// بيانات الفروع
const branches = [
  { id: 1, name: 'فرع بارك أفينيو', city: 'الرياض', address: 'بارك أفينيو، قرطبة، الرياض 13248' },
  { id: 2, name: 'فرع حياة مول', city: 'الرياض', address: 'حياة مول، طريق الملك عبدالعزيز، الرياض 13341' },
  { id: 3, name: 'فرع غرناطة مول', city: 'الرياض', address: 'غرناطة مول، غرناطة، الرياض 13241' },
  { id: 4, name: 'فرع القصر مول', city: 'الرياض', address: 'القصر مول، السويدي، الرياض 12791' },
  { id: 5, name: 'فرع ذا فليج مول', city: 'جدة', address: 'ذا فليج مول، طريق الأمير طلال بن منصور، جدة 23738' },
  { id: 6, name: 'فرع جدة بارك', city: 'جدة', address: 'جدة بارك، العزيزية، جدة 23334' },
  { id: 7, name: 'فرع الأندلس مول', city: 'جدة', address: 'الأندلس مول، حي الفيحاء، طريق الأمير ماجد، جدة 22245' },
  { id: 8, name: 'فرع النخيل مول', city: 'الدمام', address: 'النخيل مول، الدمام 32272' },
  { id: 9, name: 'فرع الشبيلي جراند مول', city: 'الخبر', address: 'الشبيلي جراند مول، الحمراء، الخبر 34628' },
  { id: 10, name: 'فرع تبوك بارك', city: 'تبوك', address: 'تبوك بارك، طريق الملك فيصل، مروج الأمير، تبوك 47315' },
  { id: 11, name: 'فرع مكة مول', city: 'مكة المكرمة', address: 'مكة مول، طريق الملك عبدالله، مكة المكرمة 24246' },
  { id: 12, name: 'فرع الهدى بارك', city: 'مكة المكرمة', address: 'الهدى بارك، الهدى، مكة المكرمة 24355' },
  { id: 13, name: 'فرع موجان بارك', city: 'خميس مشيط', address: 'موجان بارك، النزهة، خميس مشيط 62465' },
  { id: 14, name: 'فرع الراشد مول', city: 'أبها', address: 'الراشد مول، طريق الملك فهد، البديع، أبها 62581' },
  { id: 15, name: 'فرع لافندا بارك', city: 'أبها', address: 'لافندا بارك، طريق الملك فهد، أبها 62583' },
  { id: 16, name: 'فرع كادي مول', city: 'جازان', address: 'كادي مول، طريق الكورنيش، جازان 82725' },
  { id: 17, name: 'فرع الراشد مول', city: 'جازان', address: 'الراشد مول، الشاطئ، جازان 82723' },
  { id: 18, name: 'فرع نجران بارك', city: 'نجران', address: 'نجران بارك، حي الخالدية، نجران 66261' },
  { id: 19, name: 'فرع واجهة نجران', city: 'نجران', address: 'واجهة نجران، حي النهضة، نجران 66218' },
  { id: 20, name: 'فرع ذا بارك', city: 'الطائف', address: 'ذا بارك، حي سلطانة، الطائف 26575' },
  { id: 21, name: 'فرع الراشد ميغا مول', city: 'المدينة المنورة', address: 'الراشد ميغا مول، طريق الملك عبدالله، شظاه، المدينة المنورة 42361' },
  { id: 22, name: 'فرع النور مول', city: 'المدينة المنورة', address: 'النور مول، طريق الملك عبدالله الفرعي، العيون، المدينة المنورة 42331' },
  { id: 23, name: 'فرع ملتقى المدينة', city: 'المدينة المنورة', address: 'ملتقى المدينة، المبعوث، المدينة المنورة 42362' },
  { id: 24, name: 'فرع الأحساء مول', city: 'الأحساء', address: 'الأحساء مول، طريق الملك عبدالله، غرناطة، الهفوف 36441' },
  { id: 25, name: 'فرع الظهران مول', city: 'الظهران', address: 'الظهران مول، طريق الملك سعود بن عبدالعزيز، الظهران 34457' }
];

export function SearchDialog({ isOpen, onClose, onNavigate }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDishes, setFilteredDishes] = useState<typeof menuItems>([]);
  const [filteredBranches, setFilteredBranches] = useState<typeof branches>([]);

  // البحث في الأطباق والفروع
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredDishes([]);
      setFilteredBranches([]);
      return;
    }

    const query = searchQuery.toLowerCase();

    // البحث في الأطباق
    const dishes = menuItems.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );

    // البحث في الفروع
    const branchList = branches.filter(branch =>
      branch.name.toLowerCase().includes(query) ||
      branch.city.toLowerCase().includes(query) ||
      branch.address.toLowerCase().includes(query)
    );

    setFilteredDishes(dishes);
    setFilteredBranches(branchList);
  }, [searchQuery]);

  // إغلاق عند الضغط على Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleDishClick = (dishId: number) => {
    onNavigate('menu');
    onClose();
    setSearchQuery('');
  };

  const handleBranchClick = (branchId: number) => {
    onNavigate('branches');
    onClose();
    setSearchQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000]"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-[10001] px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-700/20">
              {/* شريط بألوان العلم */}
              <div className="flex h-2">
                <div className="flex-1 bg-red-700" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-black" />
              </div>

              {/* Search Input */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن الأطباق أو الفروع..."
                    className="w-full pr-12 pl-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent text-right"
                    autoFocus
                  />
                  <button
                    onClick={onClose}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-700 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center text-gray-500">
                    <Search className="mx-auto mb-4 text-gray-300" size={48} />
                    <p>ابدأ بالكتابة للبحث عن الأطباق أو الفروع</p>
                  </div>
                ) : (
                  <>
                    {/* الأطباق */}
                    {filteredDishes.length > 0 && (
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Utensils className="text-red-700" size={20} />
                          <h3 className="text-gray-700">الأطباق ({filteredDishes.length})</h3>
                        </div>
                        <div className="space-y-2">
                          {filteredDishes.map((dish) => (
                            <motion.button
                              key={dish.id}
                              onClick={() => handleDishClick(dish.id)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full text-right p-3 rounded-lg hover:bg-red-50 transition-colors border border-transparent hover:border-red-200"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-red-100 rounded-lg">
                                  <Utensils className="text-red-700" size={16} />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-gray-900">{dish.name}</p>
                                  <p className="text-sm text-gray-500">{dish.category}</p>
                                  <p className="text-xs text-gray-400 mt-1">{dish.description}</p>
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* الفروع */}
                    {filteredBranches.length > 0 && (
                      <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="text-red-700" size={20} />
                          <h3 className="text-gray-700">الفروع ({filteredBranches.length})</h3>
                        </div>
                        <div className="space-y-2">
                          {filteredBranches.map((branch) => (
                            <motion.button
                              key={branch.id}
                              onClick={() => handleBranchClick(branch.id)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full text-right p-3 rounded-lg hover:bg-red-50 transition-colors border border-transparent hover:border-red-200"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-red-100 rounded-lg">
                                  <MapPin className="text-red-700" size={16} />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-gray-900">{branch.name}</p>
                                  <p className="text-sm text-gray-500">{branch.city}</p>
                                  <p className="text-xs text-gray-400 mt-1">{branch.address}</p>
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* لا توجد نتائج */}
                    {filteredDishes.length === 0 && filteredBranches.length === 0 && (
                      <div className="p-8 text-center text-gray-500">
                        <Search className="mx-auto mb-4 text-gray-300" size={48} />
                        <p>لا توجد نتائج للبحث "{searchQuery}"</p>
                        <p className="text-sm text-gray-400 mt-2">جرب كلمات بحث أخرى</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
