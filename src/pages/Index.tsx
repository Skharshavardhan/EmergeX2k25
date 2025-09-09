import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <HeroSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
