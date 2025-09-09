import { useState } from 'react';
import { X, ExternalLink, Phone } from 'lucide-react';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    category: string;
    tagline: string;
    image: string;
    rules: string[];
    formUrl: string;
    contacts: {
      student: string;
      staff: string;
    };
  };
}

const EventCard = ({ event }: EventCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Event Card */}
      <div 
        className="glass-card-hover cursor-pointer p-6 group"
        onClick={openModal}
      >
        <div className="aspect-video rounded-[var(--radius)] overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-secondary/20">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSJoc2woMjMwIDM1JSA3JSkiLz4KPHN2ZyB4PSI1MCUiIHk9IjUwJSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwJSwtNTAlKSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iaHNsKDE4MCAyNSUgNzAlKSI+CjxwYXRoIGQ9Im05IDJoNmExIDEgMCAwIDEgMSAxdjNhMSAxIDAgMCAxLTEgMWgtNmExIDEgMCAwIDEtMS0xdi0zYTEgMSAwIDAgMSAxLTF6Ii8+CjxwYXRoIGQ9Im05IDEyaDZhMSAxIDAgMCAxIDEgMXYzYTEgMSAwIDAgMS0xIDFoLTZhMSAxIDAgMCAxLTEtMXYtM2ExIDEgMCAwIDEgMS0xeiIvPgo8cGF0aCBkPSJtOSA3aDZhMSAxIDAgMCAxIDEgMXYzYTEgMSAwIDAgMS0xIDFoLTZhMSAxIDAgMCAxLTEtMXYtM2ExIDEgMCAwIDEgMS0xeiIvPgo8L3N2Zz4KPC9zdmc+';
            }}
          />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              event.category === 'Technical' 
                ? 'bg-primary/20 text-primary border border-primary/30' 
                : 'bg-secondary/20 text-secondary border border-secondary/30'
            }`}>
              {event.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-glow-primary group-hover:text-glow-secondary transition-all duration-300">
            {event.title}
          </h3>
          
          <p className="text-muted-foreground text-sm">
            {event.tagline}
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors duration-300 z-10"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            
            {/* Modal Body */}
            <div className="p-8">
              {/* Event Image */}
              <div className="aspect-video rounded-[var(--radius)] overflow-hidden mb-6 bg-gradient-to-br from-primary/20 to-secondary/20">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyNSIgdmlld0JveD0iMCAwIDQwMCAyMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjI1IiBmaWxsPSJoc2woMjMwIDM1JSA3JSkiLz4KPHN2ZyB4PSI1MCUiIHk9IjUwJSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwJSwtNTAlKSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iaHNsKDE4MCAyNSUgNzAlKSI+CjxwYXRoIGQ9Im05IDJoNmExIDEgMCAwIDEgMSAxdjNhMSAxIDAgMCAxLTEgMWgtNmExIDEgMCAwIDEtMS0xdi0zYTEgMSAwIDAgMSAxLTF6Ii8+CjxwYXRoIGQ9Im05IDEyaDZhMSAxIDAgMCAxIDEgMXYzYTEgMSAwIDAgMS0xIDFoLTZhMSAxIDAgMCAxLTEtMXYtM2ExIDEgMCAwIDEgMS0xeiIvPgo8cGF0aCBkPSJtOSA3aDZhMSAxIDAgMCAxIDEgMXYzYTEgMSAwIDAgMS0xIDFoLTZhMSAxIDAgMCAxLTEtMXYtM2ExIDEgMCAwIDEgMS0xeiIvPgo8L3N2Zz4KPC9zdmc+';
                  }}
                />
              </div>
              
              {/* Event Title & Category */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.category === 'Technical' 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'bg-secondary/20 text-secondary border border-secondary/30'
                  }`}>
                    {event.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-glow-primary mb-2">
                  {event.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {event.tagline}
                </p>
              </div>
              
              {/* Rules */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-glow-secondary">Rules & Guidelines</h3>
                <ul className="space-y-2">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary text-sm mt-1">•</span>
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contacts */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-glow-secondary">Contact Coordinators</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass-card p-4">
                    <p className="text-sm text-muted-foreground mb-2">Student Coordinator</p>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-primary" />
                      <span className="font-mono">{event.contacts.student}</span>
                    </div>
                  </div>
                  <div className="glass-card p-4">
                    <p className="text-sm text-muted-foreground mb-2">Staff Coordinator</p>
                    <div className="flex items-center gap-2">
                      <Phone size={16} className="text-secondary" />
                      <span className="font-mono">{event.contacts.staff}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Register Button */}
              <a 
                href={event.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon-primary w-full text-center inline-flex items-center justify-center gap-2"
              >
                <ExternalLink size={20} />
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;