const fs = require("fs");
let f = "src/routes/ventures.$slug.tsx";
if (fs.existsSync(f)) {
  let content = fs.readFileSync(f, "utf8");
  content = content.replace(/Competition 2026/g, "Competition");
  content = content.replace(/Competition in 2026/g, "Competition");
  content = content.replace(/Founded 2025/g, "Recently Founded");
  content = content.replace(/24\/09\/2025/g, "Recently");
  content = content.replace(/Q3 – Q4 2026/g, "Phase 1");
  content = content.replace(/Q1 – Q2 2027/g, "Phase 2");
  content = content.replace(/Q3 – Q4 2027/g, "Phase 3");
  fs.writeFileSync(f, content);
}
