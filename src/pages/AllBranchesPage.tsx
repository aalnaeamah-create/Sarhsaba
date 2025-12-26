import { ArrowRight } from 'lucide-react';
import { Branches } from '../components/Branches';

interface AllBranchesPageProps {
  onNavigate: (page: string) => void;
}

export function AllBranchesPage({ onNavigate }: AllBranchesPageProps) {
  return (
    <>
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
