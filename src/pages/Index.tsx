import { useState, useEffect } from 'react';
import { Bootloader } from '@/components/Bootloader';
import { CustomCursor } from '@/components/CustomCursor';
import { NFCEncoder } from '@/components/NFCEncoder';

const Index = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleBootComplete = () => {
    setIsBooting(false);
    setTimeout(() => setShowContent(true), 300);
  };

  return (
    <>
      <CustomCursor />
      
      {isBooting && <Bootloader onComplete={handleBootComplete} />}

      <div 
        className={`min-h-screen bg-background relative overflow-hidden transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Animated background grid */}
        <div 
          className="fixed inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Radial gradient overlay */}
        <div className="fixed inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <NFCEncoder />
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 py-4 border-t border-primary/20 bg-background/80 backdrop-blur-sm z-20">
          <div className="container mx-auto px-4 flex justify-between items-center text-xs text-muted-foreground terminal-text">
            <span>© 2025 NFC.CODER | All Rights Reserved</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              <span>SYSTEM ONLINE</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
