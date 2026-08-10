export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Global Education Lab",
  "url": "https://www.globaledulab.com",
  "logo": "https://www.globaledulab.com/gel-logo.png",
  "description": "Global Education Lab bridges leading international universities like Cambridge with emerging executives, school leaders, educators, and innovators worldwide.",
  "sameAs": [
    "https://www.linkedin.com/company/global-education-lab"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UK"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Global Education Lab",
  "url": "https://www.globaledulab.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.globaledulab.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const gilpCourseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Global India Leadership Programme at Cambridge",
  "description": "A premier 5-day executive leadership experience for CXOs, Founders, and Senior Leaders at Cambridge Judge Business School.",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Global Education Lab",
    "sameAs": "https://www.globaledulab.com"
  },
  "educationalCredentialAwarded": "Certificate of Attendance from Cambridge Judge Business School Executive Education",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "Onsite",
    "startDate": "2026-09-14",
    "endDate": "2026-09-18",
    "location": {
      "@type": "Place",
      "name": "Cambridge Judge Business School",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cambridge",
        "addressCountry": "UK"
      }
    }
  }
};

