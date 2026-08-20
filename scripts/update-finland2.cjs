const fs = require("fs");

const p = "src/data/blogPosts.ts";
let c = fs.readFileSync(p, "utf8");

// 1. Remove the gallery I added at the top (which replaced the broken image block)
const topGallery = `      {
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
c = c.replace(topGallery + "\\n", ""); // remove it completely

// 2. Replace Day 1 image with a 3-column html block
const day1Img = `      {
        "type": "image",
        "src": "/blog-images/finland2023_inline_2_bf78a9_4acbffe485cb4d16832f7defe2bdeb5b_mv2.jpg",
        "caption": ""
      }`;
const day1Grid = `      {
        "type": "html",
        "content": "<div class=\\"grid grid-cols-1 md:grid-cols-3 gap-3 my-8\\"><img src=\\"/blog-images/finland2023_inline_1_bf78a9_70a70b1a2e594d099dca6809265365cd_mv2.jpg\\" class=\\"w-full aspect-square object-cover rounded-sm\\" /><img src=\\"/blog-images/finland2023_inline_2_bf78a9_4acbffe485cb4d16832f7defe2bdeb5b_mv2.jpg\\" class=\\"w-full aspect-square object-cover rounded-sm\\" /><img src=\\"/blog-images/finland2023_inline_3_bf78a9_4acbffe485cb4d16832f7defe2bdeb5b_mv2.jpg\\" class=\\"w-full aspect-square object-cover rounded-sm\\" /></div>"
      }`;
c = c.replace(day1Img, day1Grid);

// 3. Replace Day 2 image with a gallery block
const day2Img = `      {
        "type": "image",
        "src": "/blog-images/finland2023_inline_8_bf78a9_e79edfce892049a8a9cd2905f9967273_mv2.jpg",
        "caption": ""
      }`;
const day2Gallery = `      {
        "type": "gallery",
        "images": [
          "/blog-images/finland2023_inline_4_bf78a9_8c51708d36a843718cc0940d336719a7_mv2.jpg",
          "/blog-images/finland2023_inline_5_bf78a9_8c51708d36a843718cc0940d336719a7_mv2.jpg",
          "/blog-images/finland2023_inline_6_bf78a9_1c3bf5dbb03946f981ae1421958259cc_mv2.jpg",
          "/blog-images/finland2023_inline_7_bf78a9_1c3bf5dbb03946f981ae1421958259cc_mv2.jpg",
          "/blog-images/finland2023_inline_8_bf78a9_e79edfce892049a8a9cd2905f9967273_mv2.jpg"
        ]
      }`;
c = c.replace(day2Img, day2Gallery);

fs.writeFileSync(p, c);
console.log("Applied Day 1 and Day 2 layouts");
