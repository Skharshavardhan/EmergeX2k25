import CountdownTimer from './CountdownTimer';
import { SYMPOSIUM_INFO } from '../data/events';

interface HeroSectionProps {
  onNavigateToEvents?: () => void;
}

const HeroSection = ({ onNavigateToEvents }: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWelcomeClick = () => {
    if (onNavigateToEvents) {
      onNavigateToEvents();
    } else {
      scrollToSection('events');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/0f5b3705-532e-41ac-baca-6ded4fa0939a.png" 
            alt="VELS Institute Logo" 
            className="mx-auto h-24 md:h-32 w-auto object-contain"
          />
        </div>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-glow-primary animated-gradient bg-clip-text text-transparent">
              {SYMPOSIUM_INFO.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            {SYMPOSIUM_INFO.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {SYMPOSIUM_INFO.description}
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-glow-secondary">
            Event Starts In
          </h2>
          <CountdownTimer />
        </div>

        {/* Welcome Message */}
        <div className="flex justify-center">
          <button 
            onClick={handleWelcomeClick}
            className="btn-neon-primary text-lg px-10 py-5 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            Welcome to EmergeX
          </button>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border border-primary/30 rounded-full float-animation"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-secondary/30 rounded-full float-animation delay-1000"></div>
        <div className="absolute top-1/3 -right-5 w-12 h-12 border border-accent/30 rounded-full float-animation delay-2000"></div>
      </div>
    </section>
  );
};

export default HeroSection;