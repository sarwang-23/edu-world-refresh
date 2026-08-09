export function getSourceLabel(pathname: string): string {
  const labelMap: Record<string, string> = {
    "/": "Home Page",
    "/about": "About Us",
    "/contact": "Contact Us",
    "/apply-now": "Apply Now",
    "/programmes/bali": "Bali Green School Immersive Programme",
    "/programmes/corporate-learning": "Corporate Learning & ESG Workshops",
    "/programmes/cslp": "Cambridge School Leadership Programme",
    "/programmes/finland": "Finland Education Study Visit",
    "/programmes/gilp": "Global India Leadership Programme",
    "/indialeadership": "Global India Leadership Programme",
    "/gsp": "Graduate Summer Programme",
    "/programmes/house-of-lords": "House of Lords — Cambridge Startups",
    "/programmes/llp": "London School Leadership Programme",
    "/programmes/zero-to-one": "Zero-To-One Ideation Weekend (Programmes)",
    "/programmes": "Programmes Overview",
    "/entrepreneurship": "Entrepreneurship",
    "/entrepreneurship/accelerator": "Startup Accelerator (12 Months)",
    "/entrepreneurship/demo-day": "Demo Day & Investor Connect",
    "/entrepreneurship/mentorship": "Mentorship & Founder Network",
    "/entrepreneurship/zero-to-one": "Zero-to-One Ideation Weekend (Entrepreneurship)",
    "/business-leaders": "Business Leaders",
    "/school-leaders": "School Leaders",
    "/students": "Young Leaders Summer Programme",
    "/students/architecture": "Architecture Track",
    "/students/entrepreneurship": "Entrepreneurship Track (Students)",
    "/students/stem-research": "STEM Research Track",
    "/teachers": "Teachers",
    "/global-ventures": "Global Ventures",
    "/gallery": "Gallery",
    "/gilp-delegate": "GILP Delegate Registration",
    "/our-impact": "Our Impact",
    "/partner-with-gel": "Partner with GEL",
    "/past-programmes": "Past Programmes",
    "/insights": "Insights & Research",
    "/team": "Our Team",
  };
  const cleaned = pathname.replace(/^\/+|\/+$/g, "");
  if (!cleaned) return "Home Page";
  if (labelMap[pathname]) return labelMap[pathname];
  // Fallback: generate label from path segments
  const parts = cleaned.split("/");
  const capitalized = parts.map((segment) =>
    segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  );
  return capitalized.join(" > ");
}
