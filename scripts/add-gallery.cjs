const fs = require("fs");
const p = "src/data/blogPosts.ts";
let c = fs.readFileSync(p, "utf8");

const targetStr = `      {
        "type": "html",
        "content": "<div class=\\"grid grid-cols-2 md:grid-cols-4 gap-2 mt-[-1.5rem] mb-8\\"><img src=\\"/blog-images/school-leadership-summit-2023_inline_3_bf78a9_e9ad740110e94cf38f050f2f7d610e90_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image 1\\" /><img src=\\"/blog-images/school-leadership-summit-2023_inline_5_bf78a9_5f23055463a14285b8fb200b7c396da1_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image 2\\" /><img src=\\"/blog-images/school-leadership-summit-2023_inline_7_bf78a9_9597b371c67c49e3800c5e841f13b976_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image 3\\" /><img src=\\"/blog-images/school-leadership-summit-2023_inline_9_bf78a9_7fad1e0bda27498ebccc8a44f12b4189_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image 4\\" /></div>"
      },`;

const newGalleryBlock = `      {
        "type": "html",
        "content": "<div class=\\"grid grid-cols-2 md:grid-cols-4 gap-2 mt-[-1.5rem] mb-8\\"><img src=\\"/blog-images/school-leadership-summit-2023_inline_3_bf78a9_e9ad740110e94cf38f050f2f7d610e90_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image\\" /><img src=\\"/blog-images/school-leadership-summit-2023_inline_5_bf78a9_5f23055463a14285b8fb200b7c396da1_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image\\" /><img src=\\"/blog-images/school-leadership-summit-2023_inline_7_bf78a9_9597b371c67c49e3800c5e841f13b976_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image\\" /><img src=\\"/blog-images/school-leadership-summit-2023_inline_9_bf78a9_7fad1e0bda27498ebccc8a44f12b4189_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image\\" /><img src=\\"/blog-images/school-leadership-summit-2023_inline_11_bf78a9_1424ca9654bd491db47181c6f3b134c1_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image\\" /><img src=\\"/blog-images/school-leadership-summit-2023_inline_13_bf78a9_622310b622fe4d9d90920827ae420890_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image\\" /><img src=\\"/blog-images/school-leadership-summit-2023_inline_15_bf78a9_aea7158021a143cf93cc50dc66d5a39f_mv2.jpeg\\" class=\\"w-full aspect-[4/3] object-cover rounded-sm\\" alt=\\"Gallery image\\" /></div>"
      },`;

if (c.includes(targetStr)) {
  c = c.replace(targetStr, newGalleryBlock);
  fs.writeFileSync(p, c);
  console.log("Success");
} else {
  console.log("Target string not found");
}
