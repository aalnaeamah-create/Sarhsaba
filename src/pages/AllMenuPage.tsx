import { ArrowRight } from 'lucide-react';
import { Menu } from '../components/Menu';
import { SEO } from '../components/SEO';

interface AllMenuPageProps {
  onNavigate: (page: string) => void;
}

export function AllMenuPage({ onNavigate }: AllMenuPageProps) {
  return (
    <>
      <SEO 
        title="قائمة الطعام - مطعم صرح سبأ | المندي، الزربيان، المظبي اليمني"
        description="تصفح قائمة طعام مطعم صرح سبأ الكاملة. نقدم أشهى المندي اليمني، الزربيان، المظبي، السلتة، الفحسة، المطبق والمعصوب. أطباق يمنية أصيلة بجودة عالية."
        keywords="قائمة طعام صرح سبأ, مندي يمني, زربيان يمني, مظبي, سلتة, فحسة, مطبق, معصوب, أطباق يمنية, menu Sarh Saba"
        ogTitle="قائمة الطعام - مطعم صرح سبأ اليمني"
        canonical="https://sarhsaba.com/menu"
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
      
      <Menu />
    </>
  );
}