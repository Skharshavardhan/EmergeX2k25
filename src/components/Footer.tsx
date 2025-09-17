import { Calendar, MapPin, Mail } from 'lucide-react';
import { SYMPOSIUM_INFO, SYMPOSIUM_DATE } from '../data/events';

const Footer = () => {
  return (
    <footer className="glass-card m-6 p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-glow-primary mb-2">
              {SYMPOSIUM_INFO.name}
            </h3>
            <p className="text-muted-foreground">
              {SYMPOSIUM_INFO.subtitle}
            </p>
          </div>

          {/* Event Details */}
          <div className="text-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span className="text-sm">
                  {SYMPOSIUM_DATE.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin size={16} className="text-secondary" />
                <span className="text-sm">{SYMPOSIUM_INFO.venue}</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2025 EmergeX Organizing Committee
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              All rights reserved
            </p>
            <p className="text-xs text-muted-foreground mt-2 opacity-75">
              Developed by SK Harshavardhan II<sup>nd</sup> - Data Science
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;