const fs = require('fs');

const p = 'src/data/blogPosts.ts';
let c = fs.readFileSync(p, 'utf8');

// 1. Replace the invalid image block
const badImgBlock = `      {
        "type": "image",
        "src": "true",
        "caption": ""
      },`;
const galleryBlock = `      {
        "type": "gallery",
        "images": [
          "/blog-images/finland2023_inline_1_bf78a9_70a70b1a2e594d099dca6809265365cd_mv2.jpg",
          "/blog-images/finland2023_inline_3_bf78a9_4acbffe485cb4d16832f7defe2bdeb5b_mv2.jpg",
          "/blog-images/finland2023_inline_5_bf78a9_8c51708d36a843718cc0940d336719a7_mv2.jpg",
          "/blog-images/finland2023_inline_7_bf78a9_1c3bf5dbb03946f981ae1421958259cc_mv2.jpg",
          "/blog-images/finland2023_inline_9_bf78a9_e79edfce892049a8a9cd2905f9967273_mv2.jpg",
          "/blog-images/finland2023_inline_11_bf78a9_cedccba3f14747de9add32ec9b24e384_mv2.jpg",
          "/blog-images/finland2023_inline_13_bf78a9_67a94ded88014a24af7240dae44db09f_mv2.jpg",
          "/blog-images/finland2023_inline_15_bf78a9_86afdb368b024fe7b1010843875dae33_mv2.jpg"
        ]
      },`;
c = c.replace(badImgBlock, galleryBlock);

// 2. Replace the paragraphs with headings
const headings = [
  "Finland programme highlights",
  "Day 1 (Helsinki)",
  "Day 2 (Kerava)",
  "Day 3 (Helsinki)",
  "Day 4 (Turku)",
  "Day 5 (Turku)"
];

headings.forEach(h => {
  const target = `      {
        "type": "paragraph",
        "text": "${h}"
      }`;
  const replacement = `      {
        "type": "heading",
        "text": "${h}"
      }`;
  // Replace all occurrences just in case, but there should be only one of each
  c = c.split(target).join(replacement);
});

fs.writeFileSync(p, c);
console.log('Updated Finland post');
