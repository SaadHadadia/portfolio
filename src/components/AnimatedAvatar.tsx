
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedAvatarProps {
  section: string;
  className?: string;
}

const AnimatedAvatar: React.FC<AnimatedAvatarProps> = ({ section, className }) => {
  const [animation, setAnimation] = useState<string>('');
  
  useEffect(() => {
    // Change animation based on current section
    switch (section) {
      case 'hero':
        setAnimation('animate-wave');
        break;
      case 'about':
        setAnimation('animate-pulse-slow');
        break;
      case 'skills':
        setAnimation('animate-spin-slow');
        break;
      case 'projects':
        setAnimation('animate-bounce-soft');
        break;
      default:
        setAnimation('animate-float');
    }
  }, [section]);

  // Default avatar style - this would be replaced with your actual avatar
  const avatarPath = 'https://api.dicebear.com/7.x/bottts/svg?seed=portfolio&backgroundColor=b6e3f4';

  return (
    <div 
      className={cn(
        'relative overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1',
        animation,
        className
      )}
    >
      <img 
        src={avatarPath} 
        alt="Avatar" 
        className="w-full h-full object-cover rounded-full" 
      />
    </div>
  );
};

export default AnimatedAvatar;
