import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import AnimatedAvatar from "@/components/AnimatedAvatar";
import DraggableSkill from "@/components/skills/DraggableSkill";
import { skills } from "@/data/skills";

const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<
    "all" | "language" | "framework" | "technology"
  >("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "language", label: t("languages") },
    { id: "framework", label: t("frameworks") },
    { id: "technology", label: t("technologies") },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24 animated-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedAvatar section="skills" className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold">{t("skillsTitle")}</h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Canvas */}
        <div className="relative h-[400px] md:h-[400px] border border-border rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm">
          <DraggableSkill skills={filteredSkills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
