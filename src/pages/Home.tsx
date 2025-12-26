import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { MenuHome } from '../components/MenuHome';
import { BranchesHome } from '../components/BranchesHome';
import { Contact } from '../components/Contact';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  // صورة البانر من Google Drive
  const heroImage = "https://lh3.googleusercontent.com/d/1tAwX-LXxuQ3KF4qlpy3ONjD8YP9OwGX4";
  
  // صورة حول المطعم من Google Drive
  const aboutImage = "https://lh3.googleusercontent.com/d/1ufngfZszGoCb56fLiACHGxX9Nume8jLA";

  return (
    <>
      <Hero heroImage={heroImage} />
      <About aboutImage={aboutImage} />
      <MenuHome onViewAll={() => onNavigate('menu')} />
      <BranchesHome onViewAll={() => onNavigate('branches')} />
      <Contact />
    </>
  );
}