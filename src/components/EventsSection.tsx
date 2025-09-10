import EventsList from './EventsList';

const EventsSection = () => {
  return (
    <section className="py-20 px-6 min-h-screen">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-glow-primary mb-6">
            Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our exciting lineup of competitions and showcase your skills
          </p>
          
          {/* Registration Button */}
          <button
            onClick={() => window.open('https://linktr.ee/emergex2k25', '_blank')}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium text-lg"
          >
            Register Now
          </button>
        </div>

        {/* Events List */}
        <EventsList />

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default EventsSection;