import { useState } from 'react';
import EventCard from './EventCard';
import { getTechnicalEvents, getNonTechnicalEvents } from '../data/events';

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState<'technical' | 'non-technical'>('technical');
  
  const technicalEvents = getTechnicalEvents();
  const nonTechnicalEvents = getNonTechnicalEvents();
  const currentEvents = activeTab === 'technical' ? technicalEvents : nonTechnicalEvents;

  return (
    <section id="events" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-glow-primary mb-6">
            Event Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your arena and showcase your skills in our diverse range of competitions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-card p-2 rounded-[var(--radius-lg)]">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('technical')}
                className={`px-8 py-4 rounded-[var(--radius)] font-semibold transition-all duration-300 ${
                  activeTab === 'technical'
                    ? 'btn-neon-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-glass/20'
                }`}
              >
                Technical Events
              </button>
              <button
                onClick={() => setActiveTab('non-technical')}
                className={`px-8 py-4 rounded-[var(--radius)] font-semibold transition-all duration-300 ${
                  activeTab === 'non-technical'
                    ? 'btn-neon-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-glass/20'
                }`}
              >
                Non-Technical Events
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentEvents.map((event, index) => (
            <div
              key={event.id}
              className="opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default EventsSection;