import React from "react";
import { Award } from "lucide-react";
import { certifications, Certification } from "@/data/certifications";
import { CertificationCard } from "@/components/certifications/CertificationCard";

interface CertificationsProps {
  certifications?: Certification[];
}

const CertificationsSection: React.FC<CertificationsProps> = ({
  certifications: customCertifications = certifications,
}) => {
  return (
    <section id="certifications" className="py-16 md:py-24 animated-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customCertifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </div>

        {customCertifications.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              No certifications to display
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
