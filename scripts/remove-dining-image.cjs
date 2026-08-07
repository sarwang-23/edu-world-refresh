const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'src', 'data', 'migrated_posts.json');
const posts = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

const targetFilename = 'bf78a9_35f0268999244458bc4d5957b61892ee~mv2.jpg';

let count = 0;

posts.forEach(post => {
  if (post.rawHtml && post.rawHtml.includes(targetFilename)) {
    console.log(`Found target dining image in post: "${post.title}"`);
    
    // Remove figure, gallery item, or img block containing this image
    // Find the enclosing element if present or remove the <img> tag
    const reg = new RegExp(`<figure[^>]*>[\\s\\S]*?${targetFilename}[\\s\\S]*?<\\/figure>|<div[^>]*class=["'][^"']*gallery[^"']*["'][^>]*>[\\s\\S]*?${targetFilename}[\\s\\S]*?<\\/div>|<img[^>]*${targetFilename}[^>]*\\/?>`, 'gi');

    post.rawHtml = post.rawHtml.replace(reg, '');

    // Also remove from post.images array
    if (post.images) {
      post.images = post.images.filter(img => !img.original.includes(targetFilename) && !img.local.includes(targetFilename));
    }

    count++;
  }
});

if (count > 0) {
  console.log(`Successfully removed dining image from ${count} post(s). Writing updated JSON...`);
  fs.writeFileSync(jsonPath, JSON.stringify(posts, null, 2));
} else {
  console.log('Target dining image not found.');
}
