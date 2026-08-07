const fs = require('fs');
const path = require('path');

const posts = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'migrated_posts.json'), 'utf-8'));
const gilpPost = posts.find(p => p.slug.includes('inside-the-global-india-leadership'));

if (gilpPost) {
  console.log('GILP Title:', gilpPost.title);
  console.log('GILP Date:', gilpPost.date);
  console.log('GILP Read Time:', gilpPost.readTime);
  console.log('GILP Author:', gilpPost.author);
  console.log('Total Images:', gilpPost.images ? gilpPost.images.length : 0);
  console.log('Raw HTML contains "Cohort Representation:":', gilpPost.rawHtml.includes('Cohort Representation:'));
  console.log('Raw HTML contains "Course Modules and Faculty:":', gilpPost.rawHtml.includes('Course Modules and Faculty:'));
  console.log('Raw HTML contains "Critical Takeaways":', gilpPost.rawHtml.includes('Critical Takeaways'));
} else {
  console.log('GILP post not found');
}
