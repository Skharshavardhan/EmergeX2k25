import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Phone, User, GraduationCap } from 'lucide-react';
import { EVENTS_DATA } from '../data/events';

const EventsSection = () => {
  return (
    <section id="events" className="py-20 px-6">
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

        {/* Event Tabs */}
        <Tabs defaultValue={EVENTS_DATA[0].id} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-12 glass-card">
            {EVENTS_DATA.map((event) => (
              <TabsTrigger 
                key={event.id} 
                value={event.id}
                className="relative text-sm font-medium transition-all duration-300 data-[state=active]:bg-primary/20 data-[state=active]:text-primary data-[state=active]:shadow-lg"
              >
                {event.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {EVENTS_DATA.map((event) => (
            <TabsContent key={event.id} value={event.id} className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Event Image */}
                <div className="relative group">
                  <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] glass-card">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <Badge 
                        variant="secondary" 
                        className="mb-2 bg-primary/20 text-primary border-primary/30"
                      >
                        {event.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-white/80 font-medium">{event.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-8">
                  {/* Rules Section */}
                  <div className="glass-card p-8">
                    <h4 className="text-2xl font-bold text-glow-secondary mb-6">Event Rules</h4>
                    <ul className="space-y-4">
                      {event.rules.map((rule, index) => (
                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Information */}
                  <div className="glass-card p-8">
                    <h4 className="text-2xl font-bold text-glow-secondary mb-6">Contact Coordinators</h4>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary">
                          <User className="w-5 h-5" />
                          <span className="font-semibold">Student Coordinator</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <span className="font-mono">{event.contacts.student}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-secondary">
                          <GraduationCap className="w-5 h-5" />
                          <span className="font-semibold">Staff Coordinator</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <span className="font-mono">{event.contacts.staff}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Registration Button */}
                  <div className="text-center">
                    <Button 
                      asChild 
                      size="lg" 
                      className="btn-neon-primary text-lg px-12 py-6 h-auto"
                    >
                      <a 
                        href={event.formUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="no-underline"
                      >
                        Register Now
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default EventsSection;