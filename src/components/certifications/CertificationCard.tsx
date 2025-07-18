import { Calendar, ExternalLink, Award, Building } from "lucide-react";
import { Certification } from "@/data/certifications";


export const CertificationCard: React.FC<{ certification: Certification }> = ({
  certification,
}) => {
  const hasExpiry = certification.expiryDate;
  const isExpired =
    hasExpiry && new Date(certification.expiryDate) < new Date();

  return (
    <div className="bg-gray-100 backdrop-blur-sm dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md dark:hover:shadow-gray-900/20 transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl">
            {certification.logo || (
              <Award className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-lg leading-tight">
              {certification.name}
            </h3>
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 mt-1">
              <Building className="w-4 h-4" />
              <span className="text-sm">{certification.organization}</span>
            </div>
          </div>
        </div>
        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            title="View credential"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>
            Issued {certification.issueDate}
            {hasExpiry && (
              <span
                className={`ml-2 ${
                  isExpired
                    ? "text-red-600 dark:text-red-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                • {isExpired ? "Expired" : "Expires"} {certification.expiryDate}
              </span>
            )}
          </span>
        </div>

        
        <div className="text-sm text-gray-500 dark:text-gray-400">
            {certification.credentialId && (
              <span>Credential ID: {certification.credentialId}</span>
            )}
        </div>
        

        {certification.skills && certification.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {certification.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};