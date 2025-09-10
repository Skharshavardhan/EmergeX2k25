import { Phone, Mail, MapPin, GraduationCap } from 'lucide-react';
import { EVENTS_DATA, STAFF_COORDINATORS, SYMPOSIUM_INFO } from '../data/events';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-glow-secondary mb-6">
            Contact Organizers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our coordinators for any queries or assistance
          </p>
        </div>

        {/* Events Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {EVENTS_DATA.map((event, index) => (
            <div
              key={event.id}
              className="glass-card-hover p-6"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-glow-primary mb-2">
                  {event.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  event.category === 'Technical' 
                    ? 'bg-primary/20 text-primary border border-primary/30' 
                    : 'bg-secondary/20 text-secondary border border-secondary/30'
                }`}>
                  {event.category}
                </span>
              </div>
              
              <div className="space-y-3">
                {event.contacts.map((contact, contactIndex) => (
                  <div key={contactIndex} className="glass-card p-3">
                    <p className="text-xs text-muted-foreground mb-1">Student Coordinator</p>
                    <div className="flex items-center gap-2 mb-1">
                      <Phone size={14} className="text-primary" />
                      <span className="font-semibold text-sm">{contact.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm text-muted-foreground">+91-{contact.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Staff Coordinators */}
        <div className="glass-card p-8 mb-8">
          <h3 className="text-2xl font-bold text-glow-primary mb-6 text-center">
            Staff Coordinators
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STAFF_COORDINATORS.map((staff, index) => (
              <div key={index} className="glass-card-hover p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="glass-card p-3 rounded-full">
                    <GraduationCap className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{staff.name}</h4>
                    <p className="text-sm text-muted-foreground">Faculty Coordinator</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <span className="font-mono text-sm">+91-{staff.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-secondary" />
                    <span className="text-sm">{staff.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Contact Information */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-2xl font-bold text-glow-primary mb-6">
            General Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="glass-card p-4 rounded-full">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold mb-1">General Queries</p>
                <p className="text-muted-foreground text-sm">+91-9000000000</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="glass-card p-4 rounded-full">
                <Mail className="text-secondary" size={24} />
              </div>
              <div>
                <p className="font-semibold mb-1">Email Support</p>
                <p className="text-muted-foreground text-sm">techfest2025@velsuniv.ac.in</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="glass-card p-4 rounded-full">
                <MapPin className="text-accent" size={24} />
              </div>
              <div>
                <p className="font-semibold mb-1">Venue</p>
                <p className="text-muted-foreground text-sm">{SYMPOSIUM_INFO.venue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default ContactSection;