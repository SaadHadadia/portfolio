import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext"; // Assuming you have a language context

const Links: React.FC = () => {
  const [isRtl, setIsRtl] = useState(false);
  const { dir } = useLanguage(); // Get direction from your language context

  useEffect(() => {
    // Set RTL state based on the direction from language context
    setIsRtl(dir === "rtl");
  }, [dir]);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 fixed bottom-4 ${
        isRtl ? "left-4" : "right-4"
      } z-50`}
    >
      <a
        href="mailto:saad.hadadia9@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-2 rounded-full bg-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </div>
      </a>
      <a
        href="https://github.com/saadhadadia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-2 rounded-full bg-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </div>
      </a>
      <a
        href="https://linkedin.com/in/saadhadadia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="p-2 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#0A66C2]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default Links;