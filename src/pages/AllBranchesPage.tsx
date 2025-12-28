import { ArrowRight } from 'lucide-react';
import { Branches } from '../components/Branches';
import { SEO } from '../components/SEO';

interface AllBranchesPageProps {
  onNavigate: (page: string) => void;
}

export function AllBranchesPage({ onNavigate }: AllBranchesPageProps) {
  return (
    <>
      <SEO 
        title="فروع مطعم صرح سبأ - مواقع مطاعمنا في السعودية"
        description="اكتشف جميع فروع مطعم صرح سبأ اليمني في مدن المملكة العربية السعودية. نقدم خدماتنا في الرياض وجدة والدمام والمدن الرئيسية. Sarh Saba Restaurant branches."
        keywords="فروع صرح سبأ, مطعم يمني في الرياض, مطعم يمني في جدة, مطعم يمني في الدمام, فروع مطاعم يمنية, Sarh Saba branches"
        ogTitle="فروع مطعم صرح سبأ في السعودية"
        canonical="https://sarhsaba.com/branches"
      />
      {/* زر العودة */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-red-700 hover:text-red-800 transition-colors group"
          >
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform" 
            />
            <span>العودة للصفحة الرئيسية</span>
          </button>
        </div>
      </div>
      
      <Branches />
    </>
  );
}