const fs = require("fs");
const targetFile = "src/routes/ventures.$slug.tsx";
const bottomFile =
  "C:/Users/Sarwang/.gemini/antigravity-ide/brain/fe23c329-8088-45e4-99b5-eacf8d0fb2d2/scratch/ventures.bottom.tsx";

const content = fs.readFileSync(targetFile, "utf8");
const bottomContent = fs.readFileSync(bottomFile, "utf8");

const splitIndex = content.indexOf("function Hero({ v }: { v: Venture }) {");
if (splitIndex === -1) {
  console.error("Hero function not found!");
  process.exit(1);
}

const topPart = content.slice(0, splitIndex);
fs.writeFileSync(targetFile, topPart + bottomContent, "utf8");
console.log("Successfully applied new UI components");
