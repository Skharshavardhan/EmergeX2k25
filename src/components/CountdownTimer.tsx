import { useState, useEffect } from 'react';
import { SYMPOSIUM_DATE } from '../data/events';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = SYMPOSIUM_DATE.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="glass-card p-6 text-center min-w-[100px] pulse-glow">
      <div className="text-4xl md:text-5xl font-bold text-glow-primary mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      <TimeBlock value={timeLeft.days} label="Days" />
      <div className="text-primary text-2xl font-bold hidden sm:block">:</div>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <div className="text-primary text-2xl font-bold hidden sm:block">:</div>
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <div className="text-primary text-2xl font-bold hidden sm:block">:</div>
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;