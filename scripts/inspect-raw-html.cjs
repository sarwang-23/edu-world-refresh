const fs = require("fs");
const path = require("path");

const json = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "src", "data", "migrated_posts.json"), "utf-8"),
);
const firstPost = json[0];

console.log("Post Title:", firstPost.title);
console.log("Post Date:", firstPost.date);
console.log("Post Read Time:", firstPost.readTime);
console.log("Post Cover:", firstPost.cover);
console.log("Raw HTML snippet (first 1000 chars):");
console.log(firstPost.rawHtml ? firstPost.rawHtml.substring(0, 1000) : "No rawHtml");
