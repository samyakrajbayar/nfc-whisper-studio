import { useEffect, useState } from 'react';

const bootMessages = [
  'Initializing NFC protocol...',
  'Loading security modules...',
  'Checking hardware compatibility...',
  'Establishing connection...',
  'Calibrating antenna frequency...',
  'System ready.',
];

interface BootloaderProps {
  onComplete: () => void;
}

export const Bootloader = ({ onComplete }: BootloaderProps) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < bootMessages.length) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, bootMessages[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 400);

      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(onComplete, 500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentIndex, onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center overflow-hidden">
      {/* Scan line effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan" />
      </div>

      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 w-full max-w-2xl px-8">
        {/* Logo/Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold glow-text mb-2 terminal-text">NFC.CODER</h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-glow" />
        </div>

        {/* Terminal output */}
        <div className="bg-card border border-primary/30 rounded-lg p-6 glow-box">
          <div className="terminal-text text-sm space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}>
                <span className="text-primary">{'>'}</span>
                <span className="text-foreground/80">{msg}</span>
                {idx === messages.length - 1 && (
                  <span className="inline-block w-2 h-4 bg-primary animate-blink ml-1" />
                )}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-1 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
              style={{ width: `${(currentIndex / bootMessages.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Version info */}
        <div className="text-center mt-6 text-xs text-muted-foreground terminal-text">
          v2.4.1 | SECURE MODE | 2025
        </div>
      </div>
    </div>
  );
};
