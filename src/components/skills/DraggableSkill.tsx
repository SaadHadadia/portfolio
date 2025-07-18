import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  image: string;
  category: "language" | "framework" | "technology";
  color?: string;
}

interface DraggableSkillProps {
  skills: Skill[];
}

const DraggableSkill: React.FC<DraggableSkillProps> = ({ skills }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [objects, setObjects] = useState<any[]>([]);
  const [containerSize, setContainerSize] = useState({
    width: 800,
    height: 400,
  });

  const OBJECT_SIZE = 60;

  // Initialize objects with random positions and velocities
  useEffect(() => {
    const newObjects = skills.map((skill, i) => ({
      id: i,
      skill: skill,
      x: Math.random() * (containerSize.width - OBJECT_SIZE),
      y: Math.random() * (containerSize.height - OBJECT_SIZE),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      isDragging: false,
    }));
    setObjects(newObjects);
  }, [skills]);

  // Physics simulation
  useEffect(() => {
    if (objects.length === 0) return;

    const animate = () => {
      setObjects((prevObjects) => {
        const newObjects = prevObjects.map((obj) => {
          if (obj.isDragging) return obj;

          let newX = obj.x + obj.vx;
          let newY = obj.y + obj.vy;
          let newVx = obj.vx;
          let newVy = obj.vy;

          // Boundary collision
          if (newX <= 0 || newX >= containerSize.width - OBJECT_SIZE) {
            newVx = -newVx;
            newX = Math.max(
              0,
              Math.min(containerSize.width - OBJECT_SIZE, newX)
            );
          }
          if (newY <= 0 || newY >= containerSize.height - OBJECT_SIZE) {
            newVy = -newVy;
            newY = Math.max(
              0,
              Math.min(containerSize.height - OBJECT_SIZE, newY)
            );
          }

          return {
            ...obj,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        });

        // Object-to-object collision detection
        for (let i = 0; i < newObjects.length; i++) {
          for (let j = i + 1; j < newObjects.length; j++) {
            const obj1 = newObjects[i];
            const obj2 = newObjects[j];

            if (obj1.isDragging || obj2.isDragging) continue;

            const dx = obj1.x - obj2.x;
            const dy = obj1.y - obj2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < OBJECT_SIZE) {
              // Calculate collision response
              const overlap = OBJECT_SIZE - distance;
              const separationX = (dx / distance) * overlap * 0.5;
              const separationY = (dy / distance) * overlap * 0.5;

              // Separate objects
              newObjects[i].x += separationX;
              newObjects[i].y += separationY;
              newObjects[j].x -= separationX;
              newObjects[j].y -= separationY;

              // Exchange velocities (elastic collision)
              const tempVx = newObjects[i].vx;
              const tempVy = newObjects[i].vy;
              newObjects[i].vx = newObjects[j].vx;
              newObjects[i].vy = newObjects[j].vy;
              newObjects[j].vx = tempVx;
              newObjects[j].vy = tempVy;
            }
          }
        }

        return newObjects;
      });
    };

    const interval = setInterval(animate, 16); // ~60fps
    return () => clearInterval(interval);
  }, [objects.length, containerSize]);

  // Update container size on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setContainerSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleDragStart = (id: number) => {
    setObjects((prev) =>
      prev.map((obj) => (obj.id === id ? { ...obj, isDragging: true } : obj))
    );
  };

  const handleDragEnd = (id: number) => {
    setObjects((prev) =>
      prev.map((obj) => (obj.id === id ? { ...obj, isDragging: false } : obj))
    );
  };

  const handleDrag = (id: number, info: any) => {
    setObjects((prev) =>
      prev.map((obj) =>
        obj.id === id
          ? {
              ...obj,
              x: Math.max(
                0,
                Math.min(
                  containerSize.width - OBJECT_SIZE,
                  info.point.x - OBJECT_SIZE / 2
                )
              ),
              y: Math.max(
                0,
                Math.min(
                  containerSize.height - OBJECT_SIZE,
                  info.point.y - OBJECT_SIZE / 2
                )
              ),
              vx: info.velocity.x * 0.01,
              vy: info.velocity.y * 0.01,
            }
          : obj
      )
    );
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative w-full h-full rounded-lg overflow-hidden"
        style={{ height: "400px" }}
      >

        {/* Floating skill objects */}
        {objects.map((obj) => (
          <motion.div
            key={obj.id}
            className="absolute cursor-grab active:cursor-grabbing"
            style={{
              width: OBJECT_SIZE,
              height: OBJECT_SIZE,
            }}
            animate={{
              x: obj.x,
              y: obj.y,
            }}
            transition={{
              type: "tween",
              duration: 0.016,
              ease: "linear",
            }}
            drag
            dragConstraints={containerRef}
            dragElastic={0}
            onDragStart={() => handleDragStart(obj.id)}
            onDragEnd={() => handleDragEnd(obj.id)}
            onDrag={(event, info) => handleDrag(obj.id, info)}
            whileHover={{ scale: 1.05 }}
            whileDrag={{ scale: 1.1, zIndex: 10 }}
          >
            <div
              className="w-full h-full rounded-lg shadow-lg border-2 border-white/30 flex flex-col items-center justify-center p-2 transition-shadow duration-300"
              style={{
                backgroundColor: obj.skill.color || "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="w-8 h-8 mb-1">
                <img
                  src={obj.skill.image}
                  alt={obj.skill.name}
                  className="w-full h-full object-contain drag-none pointer-events-none"
                />
              </div>
              <div className="text-xs font-medium text-white/90 text-center leading-tight">
                {obj.skill.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DraggableSkill;
