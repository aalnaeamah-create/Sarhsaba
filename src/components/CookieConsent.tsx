import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // التحقق من موافقة المستخدم السابقة
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // إظهار البانر بعد ثانية واحدة
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-2xl border-2 border-red-700/20 overflow-hidden relative">
            {/* شريط بألوان العلم اليمني في الأعلى */}
            <div className="absolute top-0 left-0 right-0 flex h-1.5">
              <div className="flex-1 bg-red-700" />
              <div className="flex-1 bg-white" />
              <div className="flex-1 bg-black" />
            </div>

            {/* عناصر زخرفية */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-700/5 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-black/5 rounded-full blur-2xl" />

            <div className="relative p-6 pt-8">
              {/* زر الإغلاق */}
              <button
                onClick={handleDecline}
                className="absolute top-4 left-4 text-gray-400 hover:text-red-700 transition-colors"
              >
                <X size={20} />
              </button>

              {/* الأيقونة والعنوان */}
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-red-700 to-black p-3 rounded-xl shadow-lg">
                  <Cookie className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg bg-gradient-to-r from-red-700 to-black bg-clip-text text-transparent mb-2">
                    ملفات تعريف الارتباط
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك في تصفح موقعنا وتقديم أفضل خدمة لك.
                  </p>
                </div>
              </div>

              {/* الأزرار */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAccept}
                  className="flex-1 bg-gradient-to-r from-red-700 to-black text-white px-6 py-3 rounded-xl hover:from-red-600 hover:to-gray-800 transition-all shadow-lg hover:shadow-red-700/30"
                >
                  موافق
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDecline}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:border-red-700 hover:text-red-700 transition-all"
                >
                  رفض
                </motion.button>
              </div>
            </div>

            {/* شريط سفلي */}
            <div className="h-1 bg-gradient-to-r from-red-700 via-white to-black opacity-20" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
