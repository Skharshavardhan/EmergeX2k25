import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import HeroSection from '../components/HeroSection';
import EventsSection from '../components/EventsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="relative min-h-screen">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Navigation Tabs */}
        <div className="fixed top-0 left-0 right-0 z-50 glass-card m-4 rounded-[var(--radius-lg)]">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="text-2xl font-bold">
                <span className="text-glow-primary">EmergeX</span>
              </div>

              {/* Registration Button */}
              <button
                onClick={() => window.open('https://linktr.ee/emergex2k25', '_blank')}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
              >
                Register Links for Overall Registration
              </button>

              {/* Tab Navigation */}
              <TabsList className="glass-card">
                <TabsTrigger 
                  value="home" 
                  className="text-foreground hover:text-primary transition-colors duration-300 data-[state=active]:text-primary data-[state=active]:bg-primary/20"
                >
                  Home
                </TabsTrigger>
                <TabsTrigger 
                  value="events" 
                  className="text-foreground hover:text-primary transition-colors duration-300 data-[state=active]:text-primary data-[state=active]:bg-primary/20"
                >
                  Events
                </TabsTrigger>
                <TabsTrigger 
                  value="contact" 
                  className="text-foreground hover:text-primary transition-colors duration-300 data-[state=active]:text-primary data-[state=active]:bg-primary/20"
                >
                  Contact Organizers
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <main className="pt-24">
          <TabsContent value="home" className="mt-0">
            <HeroSection />
          </TabsContent>
          
          <TabsContent value="events" className="mt-0">
            <EventsSection />
          </TabsContent>
          
          <TabsContent value="contact" className="mt-0">
            <ContactSection />
          </TabsContent>
        </main>
      </Tabs>
      
      {/* ChatBot */}
      <ChatBot />
      
      <Footer />
    </div>
  );
};

export default Index;
