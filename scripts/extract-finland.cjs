const fs = require("fs");
const content = fs.readFileSync("src/data/blogPosts.ts", "utf8");

// Use simple regex to extract the content array for Finland Education post
const startTitle = "Finland Education Exploration Programme - October 2023";
const startIdx = content.indexOf(startTitle);
if (startIdx !== -1) {
  // Find "content": [
  const contentStart = content.indexOf('"content": [', startIdx);
  if (contentStart !== -1) {
    let bracketCount = 0;
    let i = contentStart + '"content": '.length;
    let endIdx = -1;
    for (; i < content.length; i++) {
      if (content[i] === "[") bracketCount++;
      if (content[i] === "]") {
        bracketCount--;
        if (bracketCount === 0) {
          endIdx = i + 1;
          break;
        }
      }
    }

    if (endIdx !== -1) {
      const arrStr = content.substring(contentStart + '"content": '.length, endIdx);
      fs.writeFileSync("temp-finland.json", arrStr);
      console.log("Saved to temp-finland.json");
    }
  }
}
