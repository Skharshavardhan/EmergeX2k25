import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Phone, User, GraduationCap, ExternalLink } from 'lucide-react';
import { EVENTS_DATA, getTechnicalEvents, getNonTechnicalEvents } from '../data/events';

const EventsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getFilteredEvents = () => {
    switch (selectedCategory) {
      case 'technical':
        return getTechnicalEvents();
      case 'non-technical':
        return getNonTechnicalEvents();
      default:
        return EVENTS_DATA;
    }
  };

  const EventCard = ({ event }: { event: any }) => (
    <div className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge 
                  variant="secondary" 
                  className="bg-primary/20 text-primary border-primary/30"
                >
                  {event.category}
                </Badge>
              </div>
              <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
              <p className="text-muted-foreground text-sm">{event.tagline}</p>
            </div>
            
            <Button 
              asChild 
              size="sm" 
              className="btn-neon-primary shrink-0"
            >
              <a 
                href={event.formUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="no-underline flex items-center gap-1"
              >
                Register <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-primary">
                <User className="w-4 h-4" />
                <span className="font-medium">Student Coordinator</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-3 h-3" />
                <span className="font-mono">{event.contacts.student}</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-secondary">
                <GraduationCap className="w-4 h-4" />
                <span className="font-medium">Staff Coordinator</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-3 h-3" />
                <span className="font-mono">{event.contacts.staff}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Category Filters */}
      <div className="flex justify-center">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-3 glass-card">
            <TabsTrigger 
              value="all"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
            >
              All Events
            </TabsTrigger>
            <TabsTrigger 
              value="technical"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
            >
              Technical
            </TabsTrigger>
            <TabsTrigger 
              value="non-technical"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
            >
              Non-Technical
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {getFilteredEvents().map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsList;