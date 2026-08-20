const fs = require("fs");
const path = require("path");
const dir = "c:/Users/Sarwang/Downloads/edu-world-refresh-main/edu-world-refresh/src/routes";
const files = [
  "about.tsx",
  "entrepreneurship_.accelerator.tsx",
  "entrepreneurship_.demo-day.tsx",
  "entrepreneurship_.mentorship.tsx",
  "entrepreneurship_.zero-to-one.tsx",
  "global-ventures.tsx",
  "insights.tsx",
  "programmes.graduate.tsx",
  "students.tsx",
  "students_.architecture.tsx",
  "students_.entrepreneurship.tsx",
  "students_.stem-research.tsx",
  "team.tsx",
  "ventures.$slug.tsx",
];

for (const f of files) {
  let content = fs.readFileSync(path.join(dir, f), "utf-8");

  const regex = /(<[A-Za-z0-9_]+\s*\/>)\s*\n\s*(<SharedTestimonials\s*\/>)/;
  if (regex.test(content)) {
    content = content.replace(regex, "$2\n      $1");
    fs.writeFileSync(path.join(dir, f), content, "utf-8");
    console.log("Fixed " + f);
  } else {
    console.log("No match in " + f);
  }
}
