const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "src", "routes", "ventures.$slug.tsx");
const uiFile = path.join(__dirname, "src", "routes", "ventures-ui.txt");

const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
let cutAt = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === "component: VenturePage,") {
    // The next line is `})`  and then blank line
    cutAt = i + 2; // line after `})`
    break;
  }
}
console.log("Route ends at line:", cutAt, "| Line:", lines[cutAt - 1]);
const header = lines.slice(0, cutAt).join("\n");
const newUI = "\n" + fs.readFileSync(uiFile, "utf8");
fs.writeFileSync(file, header + newUI, "utf8");
const finalLines = fs.readFileSync(file, "utf8").split("\n").length;
console.log("Final file lines:", finalLines);
