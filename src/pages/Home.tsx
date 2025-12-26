import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { MobileNavCards } from '../components/MobileNavCards';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  // صورة حول المطعم من Google Drive
  const aboutImage = "https://lh3.googleusercontent.com/d/1ufngfZszGoCb56fLiACHGxX9Nume8jLA";

  return (
    <>
      {/* كاردات التنقل للهاتف - تظهر في الأعلى */}
      <MobileNavCards />
      <About aboutImage={aboutImage} />
      <Contact />
    </>
  );
}