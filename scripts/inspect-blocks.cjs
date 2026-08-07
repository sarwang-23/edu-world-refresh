const fs = require('fs');
const path = require('path');

const posts = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'migrated_posts.json'), 'utf-8'));
const gilpPost = posts.find(p => p.slug.includes('inside-the-global-india-leadership'));

if (gilpPost) {
  console.log('GILP Post Title:', gilpPost.title);
  console.log('Total blocks:', gilpPost.content.length);
  console.log('First 5 blocks:', JSON.stringify(gilpPost.content.slice(0, 8), null, 2));
} else {
  console.log('GILP post not found');
}
