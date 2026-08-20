const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "post_sample.html"), "utf-8");

// Extract post title
const titleMatch = html.match(/data-hook=["']post-title["'][^>]*>([\s\S]*?)<\/(?:h1|h2|div)>/i);
console.log("Title match:", titleMatch ? titleMatch[1].replace(/<[^>]+>/g, "").trim() : "None");

// Extract post description / content
const descMatch =
  html.match(/data-hook=["']post-description["'][^>]*>([\s\S]*?)<\/article>/i) ||
  html.match(/data-hook=["']post-description["'][^>]*>([\s\S]*?)<footer/i);

if (descMatch) {
  console.log("Post Description HTML snippet (first 500 chars):");
  console.log(descMatch[1].substring(0, 500));
} else {
  console.log("No post-description match found");
}
