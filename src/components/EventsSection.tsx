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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our exciting lineup of competitions and showcase your skills
          </p>
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