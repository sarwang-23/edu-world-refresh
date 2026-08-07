const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'src', 'data', 'migrated_posts.json');
const posts = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
const gilp = posts.find(p => p.slug.includes('inside-the-global-india-leadership'));

if (gilp) {
  console.log('GILP Images count:', gilp.images.length);
  gilp.images.forEach((img, i) => {
    console.log(`[${i + 1}] Original: ${img.original} | Local: ${img.local}`);
  });

  // Print all <img> tags in rawHtml
  const imgTags = gilp.rawHtml.match(/<img\s+[^>]*>/gi) || [];
  console.log('\nHTML Image Tags count:', imgTags.length);
  imgTags.forEach((tag, i) => {
    console.log(`Tag [${i + 1}]:`, tag);
  });
}
