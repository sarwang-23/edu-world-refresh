const fs = require("fs");

const replaces = [
  { f: "src/routes/ventures..tsx", p: /Competition 2026/g, r: "Competition" },
  { f: "src/routes/ventures..tsx", p: /Competition in 2026/g, r: "Competition" },
  { f: "src/routes/ventures..tsx", p: /Founded 2025/g, r: "Recently Founded" },
  { f: "src/routes/ventures..tsx", p: /24\/09\/2025/g, r: "Recently" },
  { f: "src/routes/ventures..tsx", p: /Q3 \u2013 Q4 2026/g, r: "Phase 1" },
  { f: "src/routes/ventures..tsx", p: /Q1 \u2013 Q2 2027/g, r: "Phase 2" },
  { f: "src/routes/ventures..tsx", p: /Q3 \u2013 Q4 2027/g, r: "Phase 3" },
  { f: "src/routes/ventures..tsx", p: /2028 onward/g, r: "Phase 4" },

  { f: "src/routes/teachers.tsx", p: /2026 INTAKE/g, r: "UPCOMING INTAKE" },
  { f: "src/routes/teachers.tsx", p: /2026 teacher training/g, r: "teacher training" },

  { f: "src/routes/students_.stem-research.tsx", p: /Summer 2026 cohort/g, r: "Upcoming cohort" },
  {
    f: "src/routes/students_.entrepreneurship.tsx",
    p: /Summer 2026 cohort/g,
    r: "Upcoming cohort",
  },
  { f: "src/routes/students_.architecture.tsx", p: /Summer 2026 cohort/g, r: "Upcoming cohort" },

  { f: "src/routes/students.tsx", p: /Summer 2027/g, r: "Upcoming Summer" },
  { f: "src/routes/students.tsx", p: /2026/g, r: "Upcoming" },

  { f: "src/routes/school-leaders.tsx", p: /2026 COHORTS/g, r: "UPCOMING COHORTS" },

  { f: "src/routes/programmes.zero-to-one.tsx", p: /June 19\u201321 2026/g, r: "Upcoming Intake" },

  {
    f: "src/routes/programmes.teacher-training.tsx",
    p: /Ongoing Programmes\u20132026/g,
    r: "Ongoing Programmes",
  },

  { f: "src/routes/programmes.student-camps.tsx", p: /2026 cohorts/g, r: "Upcoming cohorts" },

  { f: "src/routes/programmes.house-of-lords.tsx", p: /2024/g, r: "Inaugural Year" },

  { f: "src/routes/our-impact.tsx", p: /2023/g, r: "Year 1" },
  { f: "src/routes/our-impact.tsx", p: /2024/g, r: "Year 2" },
  { f: "src/routes/our-impact.tsx", p: /2025/g, r: "Year 3" },
  { f: "src/routes/our-impact.tsx", p: /2020 \u2014 2025/g, r: "Past 5 Years" },

  { f: "src/routes/insights.tsx", p: /MARCH 2026/g, r: "LATEST" },
  { f: "src/routes/insights.tsx", p: /MAY 2026/g, r: "LATEST" },
  { f: "src/routes/insights.tsx", p: /2026/g, r: "LATEST" },

  { f: "src/routes/gilp-delegate.tsx", p: /Programme 2026/g, r: "Programme" },

  { f: "src/routes/about.tsx", p: /2023/g, r: "Phase 1" },
  { f: "src/routes/about.tsx", p: /2024/g, r: "Phase 2" },
  { f: "src/routes/about.tsx", p: /2025/g, r: "Phase 3" },
  { f: "src/routes/about.tsx", p: /2026/g, r: "Phase 4" },
];

replaces.forEach((r) => {
  if (fs.existsSync(r.f)) {
    let content = fs.readFileSync(r.f, "utf8");
    content = content.replace(r.p, r.r);
    fs.writeFileSync(r.f, content);
  }
});
