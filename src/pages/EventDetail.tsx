import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, User, GraduationCap, ExternalLink, FileText, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getEventById, STAFF_COORDINATORS, SYMPOSIUM_INFO } from '@/data/events';

const EventDetail = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = getEventById(eventId);

  if (!event) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => {
                window.location.href = '/#events';
              }}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                {event.category}
              </Badge>
              <h1 className="text-xl font-bold text-foreground">{event.title}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Event Poster */}
          <section className="glass-card p-6">
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
              <img
                src={event.image}
                alt={`${event.title} poster`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </div>
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">{event.title}</h2>
              <p className="text-lg text-muted-foreground">{event.tagline}</p>
            </div>
          </section>

          {/* Rules and Regulations */}
          <section className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Rules & Regulations</h3>
            <ul className="space-y-3">
              {event.rules.map((rule, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="text-primary font-bold text-sm mt-1 min-w-[1.5rem]">
                    {index + 1}.
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Student Coordinators */}
          <section className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Student Coordinators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.isArray(event.contacts) ? event.contacts.map((contact, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/20 text-primary">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{contact.name}</h4>
                      <p className="text-sm text-muted-foreground">Student Coordinator</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pl-4">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="font-mono text-foreground">+91-{contact.phone}</span>
                  </div>
                </div>
              )) : (
                <div className="text-muted-foreground">No coordinators available</div>
              )}
            </div>
          </section>

          {/* Staff Coordinators */}
          {event.staffCoordinators && event.staffCoordinators.length > 0 && (
            <section className="glass-card p-6">
              <h3 className="text-xl font-bold text-foreground mb-6">Staff Coordinators</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.staffCoordinators.map((staff, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-full bg-secondary/20 text-secondary">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{staff.name}</h4>
                        <p className="text-sm text-muted-foreground">Faculty Coordinator</p>
                      </div>
                    </div>
                    <div className="space-y-2 pl-4">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="font-mono text-foreground">+91-{staff.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Venue Information */}
          <section className="glass-card p-6">
            <h3 className="text-xl font-bold text-foreground mb-6">Venue</h3>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-accent/20 text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{SYMPOSIUM_INFO.venue}</h4>
                <p className="text-sm text-muted-foreground">Event Location</p>
              </div>
            </div>
          </section>

          {/* Registration */}
          <section className="glass-card p-6 text-center">
            <h3 className="text-xl font-bold text-foreground mb-6">Ready to Participate?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                variant="outline"
              >
                <a 
                  href={event.ruleBookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="no-underline flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Rule Book
                </a>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="btn-neon-primary"
              >
                <a 
                  href={event.formUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="no-underline flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Register Now
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;