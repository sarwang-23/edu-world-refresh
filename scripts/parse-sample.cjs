const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.join(__dirname, "post_sample.html"), "utf-8");

console.log("--- SEARCHING FOR POST CONTENT IN HTML ---");

// Check meta tags
const authorMeta = html.match(
  /<meta\s+property=["']article:author["']\s+content=["']([^"']*)["']/i,
);
const pubDateMeta = html.match(
  /<meta\s+property=["']article:published_time["']\s+content=["']([^"']*)["']/i,
);

console.log("Author:", authorMeta ? authorMeta[1] : "Not found");
console.log("Published Time:", pubDateMeta ? pubDateMeta[1] : "Not found");

// Find JSON-LD block
const jsonLdMatch = html.match(
  /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i,
);
if (jsonLdMatch) {
  try {
    const data = JSON.parse(jsonLdMatch[1]);
    console.log("JSON-LD author:", data.author);
    console.log("JSON-LD datePublished:", data.datePublished);
  } catch (e) {}
}

// Find post text/content
const articleMatches = [...html.matchAll(/<article[\s\S]*?<\/article>/gi)];
console.log("Found article tags:", articleMatches.length);

const postContentMatches = [
  ...html.matchAll(/class=["'][^"']*post-content[^"']*["'][\s\S]*?>([\s\S]*?)<\/div>/gi),
];
console.log("Found post-content divs:", postContentMatches.length);

// Look for data-hook="post-description" or data-hook="post-title" or data-hook="post-body" or similar Wix blog selectors
const dataHooks = [...html.matchAll(/data-hook=["']([^"']*)["']/gi)].map((m) => m[1]);
console.log("Data hooks found:", [...new Set(dataHooks)]);
