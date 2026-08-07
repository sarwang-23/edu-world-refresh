const fs = require('fs');
const p = 'src/data/blogPosts.ts';
let c = fs.readFileSync(p, 'utf8');

const galleryBlock = `      {
        "type": "gallery",
        "images": [
          "/blog-images/school-leadership-summit-2023_inline_1_bf78a9_9bf66a2bef6149c4bf55e42e292e8d0f_mv2.jpeg",
          "/blog-images/school-leadership-summit-2023_inline_3_bf78a9_e9ad740110e94cf38f050f2f7d610e90_mv2.jpeg",
          "/blog-images/school-leadership-summit-2023_inline_5_bf78a9_5f23055463a14285b8fb200b7c396da1_mv2.jpeg",
          "/blog-images/school-leadership-summit-2023_inline_7_bf78a9_9597b371c67c49e3800c5e841f13b976_mv2.jpeg",
          "/blog-images/school-leadership-summit-2023_inline_9_bf78a9_7fad1e0bda27498ebccc8a44f12b4189_mv2.jpeg",
          "/blog-images/school-leadership-summit-2023_inline_11_bf78a9_1424ca9654bd491db47181c6f3b134c1_mv2.jpeg",
          "/blog-images/school-leadership-summit-2023_inline_13_bf78a9_622310b622fe4d9d90920827ae420890_mv2.jpeg",
          "/blog-images/school-leadership-summit-2023_inline_15_bf78a9_aea7158021a143cf93cc50dc66d5a39f_mv2.jpeg"
        ]
      },`;

// Find the start of the image block we want to replace
const startMarker = `      {
        "type": "image",
        "src": "/blog-images/school-leadership-summit-2023_inline_1`;
const endMarker = `</div>"
      },`;

const startIdx = c.indexOf(startMarker);
if (startIdx !== -1) {
  const endIdx = c.indexOf(endMarker, startIdx);
  if (endIdx !== -1) {
    const toReplace = c.substring(startIdx, endIdx + endMarker.length);
    c = c.replace(toReplace, galleryBlock);
    fs.writeFileSync(p, c);
    console.log('Successfully replaced');
  } else {
    console.log('End marker not found');
  }
} else {
  console.log('Start marker not found');
}
