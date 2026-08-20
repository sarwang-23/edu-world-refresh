const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "gilp_post_sample.html"), "utf-8");

function decodeEntities(text) {
  if (!text) return "";
  return text
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

// Extract post description div
const descMatch =
  html.match(/data-hook=["']post-description["'][^>]*>([\s\S]*?)<\/article>/i) ||
  html.match(/data-hook=["']post-description["'][^>]*>([\s\S]*?)<footer/i);

const rawContentHtml = descMatch ? descMatch[1] : "";

console.log("Raw content length:", rawContentHtml.length);

// Extract images inside content
const imgRegex = /<img\s+[^>]*>/gi;
const imgTags = rawContentHtml.match(imgRegex) || [];

console.log("Found img tags:", imgTags.length);
imgTags.forEach((imgTag, idx) => {
  const srcMatch =
    imgTag.match(/src=["']([^"']*)["']/i) || imgTag.match(/data-src=["']([^"']*)["']/i);
  const altMatch = imgTag.match(/alt=["']([^"']*)["']/i);
  console.log(`Image ${idx + 1}:`, {
    src: srcMatch ? srcMatch[1] : "NOT FOUND",
    alt: altMatch ? altMatch[1] : "",
  });
});
