const https = require("https");
const fs = require("fs");
const path = require("path");

const url =
  "https://www.globaledulab.com/post/inside-the-global-india-leadership-programme-redefining-leadership-in-the-ai-era";

https.get(url, (res) => {
  let d = "";
  res.on("data", (c) => (d += c));
  res.on("end", () => {
    fs.writeFileSync(path.join(__dirname, "gilp_post_sample.html"), d);
    console.log("Saved gilp_post_sample.html, length:", d.length);

    console.log("--- META TAGS ---");
    const metas = d.match(/<meta[^>]+>/gi) || [];
    metas.forEach((m) => {
      if (m.includes("date") || m.includes("time") || m.includes("og:") || m.includes("article:")) {
        console.log(m);
      }
    });

    console.log("--- JSON-LD ---");
    const jsonLds =
      d.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
    jsonLds.forEach((j) => console.log(j));

    console.log("--- TIME TO READ ---");
    const timeMatch = d.match(
      /data-hook=["']time-to-read["'][^>]*>([\s\S]*?)<\/(?:span|div|p|a)>/i,
    );
    console.log(
      "Time to read:",
      timeMatch ? timeMatch[1].replace(/<[^>]+>/g, "").trim() : "Not found",
    );

    console.log("--- TIME AGO / PUBLISHED DATE TEXT ---");
    const timeAgoMatch = d.match(/data-hook=["']time-ago["'][^>]*>([\s\S]*?)<\/(?:span|div|p|a)>/i);
    console.log(
      "Time ago:",
      timeAgoMatch ? timeAgoMatch[1].replace(/<[^>]+>/g, "").trim() : "Not found",
    );
  });
});
