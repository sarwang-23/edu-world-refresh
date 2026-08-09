export type SeoEntry = {
  title: string;
  socialTitle?: string;
  description: string;
  image?: string;
  indexable?: boolean;
};

export const seoConfig: Record<string, SeoEntry> = {
  "/": {
    title: "Global Education Lab", // TODO: fill in — ask user
    description: "Empowering learners worldwide.", // TODO: fill in — ask user
  },
  "/about": {
    title: "About Us | Global Education Lab", // TODO: fill in — ask user
    description: "Learn more about Global Education Lab.", // TODO: fill in — ask user
  },
  "/apply-now": {
    title: "Apply Now | Global Education Lab", // TODO: fill in — ask user
    description: "Apply for our programmes.", // TODO: fill in — ask user
  },
  "/ai-learning-games": {
    title: "AI Learning Games | Global Education Lab", // TODO: fill in — ask user
    description: "Explore AI learning games.", // TODO: fill in — ask user
  },
  "/business-leaders": {
    title: "Business Leaders | Global Education Lab", // TODO: fill in — ask user
    description: "Programmes for business leaders.", // TODO: fill in — ask user
  },
  "/contact": {
    title: "Contact Us | Global Education Lab", // TODO: fill in — ask user
    description: "Get in touch with us.", // TODO: fill in — ask user
  },
  "/entrepreneurship": {
    title: "Entrepreneurship | Global Education Lab", // TODO: fill in — ask user
    description: "Entrepreneurship programmes.", // TODO: fill in — ask user
  },
  "/entrepreneurship/accelerator": {
    title: "Accelerator | Global Education Lab", // TODO: fill in — ask user
    description: "Startup accelerator.", // TODO: fill in — ask user
  },
  "/entrepreneurship/demo-day": {
    title: "Demo Day | Global Education Lab", // TODO: fill in — ask user
    description: "Startup demo day.", // TODO: fill in — ask user
  },
  "/entrepreneurship/mentorship": {
    title: "Mentorship | Global Education Lab", // TODO: fill in — ask user
    description: "Mentorship for entrepreneurs.", // TODO: fill in — ask user
  },
  "/entrepreneurship/zero-to-one": {
    title: "Zero to One | Global Education Lab", // TODO: fill in — ask user
    description: "Zero to one entrepreneurship.", // TODO: fill in — ask user
  },
  "/gallery": {
    title: "Gallery | Global Education Lab", // TODO: fill in — ask user
    description: "View our gallery.", // TODO: fill in — ask user
  },
  "/gilp-delegate": {
    title: "GILP Delegate | Global Education Lab", // TODO: fill in — ask user
    description: "GILP Delegate resources.", // TODO: fill in — ask user
  },
  "/global-ventures": {
    title: "Global Ventures | Global Education Lab", // TODO: fill in — ask user
    description: "Global ventures and startups.", // TODO: fill in — ask user
  },
  "/insights": {
    title: "Insights | Global Education Lab", // TODO: fill in — ask user
    description: "News and insights.", // TODO: fill in — ask user
  },
  "/our-impact": {
    title: "Our Impact | Global Education Lab", // TODO: fill in — ask user
    description: "The impact of our work.", // TODO: fill in — ask user
  },
  "/partner-with-gel": {
    title: "Partner With GEL | Global Education Lab", // TODO: fill in — ask user
    description: "Become a partner.", // TODO: fill in — ask user
  },
  "/past-programmes": {
    title: "Past Programmes | Global Education Lab", // TODO: fill in — ask user
    description: "View our past programmes.", // TODO: fill in — ask user
  },
  "/privacy-policy": {
    title: "Privacy Policy | Global Education Lab",
    description: "Privacy policy for Global Education Lab.",
  },
  "/programmes": {
    title: "Programmes | Global Education Lab", // TODO: fill in — ask user
    description: "Explore our programmes.", // TODO: fill in — ask user
  },
  "/programmes/bali": {
    title: "Bali Programme | Global Education Lab", // TODO: fill in — ask user
    description: "Educational programme in Bali.", // TODO: fill in — ask user
  },
  "/programmes/cslp": {
    title: "CSLP | Global Education Lab", // TODO: fill in — ask user
    description: "Cambridge School Leadership Programme.", // TODO: fill in — ask user
  },
  "/programmes/finland": {
    title: "Finland Programme | Global Education Lab", // TODO: fill in — ask user
    description: "Educational programme in Finland.", // TODO: fill in — ask user
  },
  "/programmes/gilp": {
    title: "Global India Leadership Programme at Cambridge | Sept 2026",
    socialTitle: "Global India Leadership Programme at Cambridge",
    description: "A 5-day Cambridge leadership experience for Board members, CXOs, and Founders on AI, strategy, and global growth.",
    image: "/gilp-banner.png",
    indexable: true,
  },
  "/programmes/graduate": {
    title: "Graduate Programmes | Global Education Lab", // TODO: fill in — ask user
    description: "Programmes for graduates.", // TODO: fill in — ask user
  },
  "/programmes/house-of-lords": {
    title: "House of Lords Programme | Global Education Lab", // TODO: fill in — ask user
    description: "House of Lords programme.", // TODO: fill in — ask user
  },
  "/programmes/llp": {
    title: "LLP | Global Education Lab", // TODO: fill in — ask user
    description: "Leadership programme.", // TODO: fill in — ask user
  },
  "/programmes/student-camps": {
    title: "Student Camps | Global Education Lab", // TODO: fill in — ask user
    description: "Camps for students.", // TODO: fill in — ask user
  },
  "/programmes/teacher-training": {
    title: "Teacher Training | Global Education Lab", // TODO: fill in — ask user
    description: "Training programmes for teachers.", // TODO: fill in — ask user
  },
  "/programmes/zero-to-one": {
    title: "Zero to One Programme | Global Education Lab", // TODO: fill in — ask user
    description: "Zero to one programme.", // TODO: fill in — ask user
  },
  "/school-leaders": {
    title: "School Leaders | Global Education Lab", // TODO: fill in — ask user
    description: "Programmes for school leaders.", // TODO: fill in — ask user
  },
  "/students": {
    title: "Students | Global Education Lab", // TODO: fill in — ask user
    description: "Programmes for students.", // TODO: fill in — ask user
  },
  "/students/architecture": {
    title: "Architecture | Global Education Lab", // TODO: fill in — ask user
    description: "Architecture programme.", // TODO: fill in — ask user
  },
  "/students/entrepreneurship": {
    title: "Entrepreneurship for Students | Global Education Lab", // TODO: fill in — ask user
    description: "Entrepreneurship programme for students.", // TODO: fill in — ask user
  },
  "/students/stem-research": {
    title: "STEM Research | Global Education Lab", // TODO: fill in — ask user
    description: "STEM research programme.", // TODO: fill in — ask user
  },
  "/teachers": {
    title: "Teachers | Global Education Lab", // TODO: fill in — ask user
    description: "Programmes for teachers.", // TODO: fill in — ask user
  },
  "/team": {
    title: "Our Team | Global Education Lab", // TODO: fill in — ask user
    description: "Meet the team.", // TODO: fill in — ask user
  },
  "/terms-of-service": {
    title: "Terms of Service | Global Education Lab",
    description: "Terms of service.",
  },
  "/universities": {
    title: "Universities | Global Education Lab", // TODO: fill in — ask user
    description: "University partnerships.", // TODO: fill in — ask user
  }
};
