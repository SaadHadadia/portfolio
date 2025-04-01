import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface DraggableSkillProps {
  name: string;
  image: string;
  initialX?: number;
  initialY?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const DraggableSkill: React.FC<DraggableSkillProps> = ({
  name,
  image,
  initialX = 0,
  initialY = 0,
  size = 'md',
  color,
}) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [floatOffset, setFloatOffset] = useState({ x: Math.random() * 10 - 5, y: Math.random() * 10 - 5 });
  
  const skillRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  // Initialize with random position if not provided
  useEffect(() => {
    if (containerRef.current && (initialX === 0 && initialY === 0)) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const randomX = Math.random() * (containerRect.width - 80);
      const randomY = Math.random() * (containerRect.height - 80);
      setPosition({ x: randomX, y: randomY });
    }
    
    // Random animation delay
    const delay = Math.random() * 2;
    if (skillRef.current) {
      skillRef.current.style.animationDelay = `${delay}s`;
    }
  }, [initialX, initialY]);

  // Handle mouse/touch events
  const handleDragStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    dragStartPos.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const skillRect = skillRef.current?.getBoundingClientRect();
      
      if (skillRect) {
        const newX = clientX - dragStartPos.current.x;
        const newY = clientY - dragStartPos.current.y;
        
        // Keep the skill within the container bounds
        const boundedX = Math.max(0, Math.min(newX, containerRect.width - skillRect.width));
        const boundedY = Math.max(0, Math.min(newY, containerRect.height - skillRect.height));
        
        setPosition({ x: boundedX, y: boundedY });
      }
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove as unknown as EventListener);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove as unknown as EventListener, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove as unknown as EventListener);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div
        ref={skillRef}
        className={cn(
          'absolute cursor-grab select-none rounded-lg flex flex-col items-center justify-center p-2 transition-shadow duration-300',
          sizeClasses[size],
          isDragging ? 'cursor-grabbing shadow-lg z-50' : 'animate-float z-10'
        )}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          backgroundColor: color || 'transparent',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="w-full h-full relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-contain drag-none pointer-events-none" 
          />
        </div>
        <div className="text-xs font-medium mt-1 opacity-80 whitespace-nowrap">{name}</div>
      </div>
    </div>
  );
};

export default DraggableSkill;
