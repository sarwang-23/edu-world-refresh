const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const routesDir = path.join(projectRoot, "src", "routes");

const titleMap = {
  "programmes.bali.tsx": "Bali Green School Immersive Programme",
  "programmes.corporate-learning.tsx": "Corporate Learning & ESG Workshops",
  "programmes.cslp.tsx": "Cambridge School Leadership Programme",
  "programmes.finland.tsx": "Finland Education Study Visit",
  "programmes.gilp.tsx": "Global India Leadership Programme",
  "programmes.graduate.tsx": "Graduate Summer Programme",
  "programmes.house-of-lords.tsx": "House of Lords — Cambridge Startups",
  "programmes.llp.tsx": "London School Leadership Programme",
  "programmes.zero-to-one.tsx": "Zero-To-One Ideation Weekend (Programmes)",
  "programmes.student-camps.tsx": "Cambridge Student Summer Camps",
  "programmes.teacher-training.tsx": "Teacher Training Programmes",
  "programmes.index.tsx": "Programmes Overview",
  "entrepreneurship.tsx": "Entrepreneurship",
  "entrepreneurship_.accelerator.tsx": "Startup Accelerator (12 Months)",
  "entrepreneurship_.demo-day.tsx": "Demo Day & Investor Connect",
  "entrepreneurship_.mentorship.tsx": "Mentorship & Founder Network",
  "entrepreneurship_.zero-to-one.tsx": "Zero-to-One Ideation Weekend (Entrepreneurship)",
  "business-leaders.tsx": "Business Leaders",
  "school-leaders.tsx": "School Leaders",
  "students.tsx": "Young Leaders Summer Programme",
  "students_.architecture.tsx": "Architecture Track",
  "students_.entrepreneurship.tsx": "Entrepreneurship Track (Students)",
  "students_.stem-research.tsx": "STEM Research Track",
  "teachers.tsx": "Teachers",
  "global-ventures.tsx": "Global Ventures",
  "gallery.tsx": "Gallery",
  "gilp-delegate.tsx": "GILP Delegate Registration",
  "our-impact.tsx": "Our Impact",
  "partner-with-gel.tsx": "Partner with GEL",
  "past-programmes.tsx": "Past Programmes",
  "insights.tsx": "Insights & Research",
  "team.tsx": "Our Team",
  "about.tsx": "About Us",
  "index.tsx": "Home Page",
};

function updateFile(filePath, title) {
  let content = fs.readFileSync(filePath, "utf8");
  const regex = /<Link([^>]*?)to="(\/contact|\/apply-now)"([^>]*?)>/g;
  content = content.replace(regex, (match, p1, p2, p3) => {
    if (match.includes("search=")) return match;
    return `<Link${p1}to="${p2}" search={{ source: "${title}" }}${p3}>`;
  });
  fs.writeFileSync(filePath, content, "utf8");
}

fs.readdirSync(routesDir).forEach((file) => {
  if (!file.endsWith(".tsx")) return;
  const fullPath = path.join(routesDir, file);
  if (file === "ventures.$slug.tsx") {
    let content = fs.readFileSync(fullPath, "utf8");
    const contactRegex = /<Link([^>]*?)to="(\/contact)"([^>]*?)>/g;
    content = content.replace(contactRegex, (match, p1, p2, p3) => {
      if (match.includes("search=")) return match;
      return `<Link${p1}to="${p2}" search={{ source: v.name }}${p3}>`;
    });
    const applyRegex = /<Link([^>]*?)to="(\/apply-now)"([^>]*?)>/g;
    const title = titleMap[file] || "Apply Now";
    content = content.replace(applyRegex, (match, p1, p2, p3) => {
      if (match.includes("search=")) return match;
      return `<Link${p1}to="${p2}" search={{ source: "${title}" }}${p3}>`;
    });
    fs.writeFileSync(fullPath, content, "utf8");
    return;
  }
  const title = titleMap[file];
  if (!title) return;
  updateFile(fullPath, title);
});

console.log("Link search props updated");
