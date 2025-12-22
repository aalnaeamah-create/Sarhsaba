import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Branches } from './components/Branches';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  // صور عالية الجودة من Unsplash للمأكولات اليمنية والعربية
  const restaurantImages = [
    "https://images.unsplash.com/photo-1746274394124-141a1d1c5af3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZW1lbmklMjBmb29kJTIwZGlzaHxlbnwxfHx8fDE3NjY0MzM3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1705768300072-bb6a0cbb0e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjY0MzM3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1642844348529-6c9ca20ade0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBmb29kJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjY0MzM3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1620292759248-3aabc1512738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMG1pZGRsZSUyMGVhc3Rlcm4lMjBtZWFsfGVufDF8fHx8MTc2NjQzMzc0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1673646961623-40914a7e1932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwbWVhdCUyMGRpc2h8ZW58MXx8fHwxNzY2NDMzNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1712488070215-d22e012314ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NDMzNzQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1763026337559-f1c5e980c539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGJyZWFkJTIwZm9vZHxlbnwxfHx8fDE3NjY0MzM3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1724024701518-7bac206c32d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwY3Vpc2luZXxlbnwxfHx8fDE3NjY0MzM3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1762081571261-245e7c6d73e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGFyYWJpYyUyMGZvb2R8ZW58MXx8fHwxNzY2NDMzNzUwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1707032208238-cbe9aba5f3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZWQlMjBtZWF0JTIwZGlzaHxlbnwxfHx8fDE3NjY0MzM3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  // استخدام الصور في الأقسام المختلفة
  const heroImage = restaurantImages[0];
  const aboutImage = restaurantImages[1];
  const fahsaImage = restaurantImages[2];
  const saltaImage = restaurantImages[3];
  const matbaqImage = restaurantImages[4];
  const masoobImage = restaurantImages[5];

  return (
    <div className="font-sans" dir="rtl">
      <Header />
      <main>
        <Hero heroImage={heroImage} />
        <About aboutImage={aboutImage} />
        <Menu 
          fahsaImage={fahsaImage}
          saltaImage={saltaImage}
          matbaqImage={matbaqImage}
          masoobImage={masoobImage}
        />
        <Branches />
        <Gallery images={restaurantImages} />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}