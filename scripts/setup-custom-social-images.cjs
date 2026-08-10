const fs = require('fs');
const path = require('path');

const workspaceRoot = path.join(__dirname, '..');
const srcAssets = path.join(workspaceRoot, 'src', 'assets');
const publicImages = path.join(workspaceRoot, 'public', 'images');

if (!fs.existsSync(publicImages)) {
  fs.mkdirSync(publicImages, { recursive: true });
}

const imageCopies = {
  'business-leaders.jpg': 'business-leaders.jpg',
  'school-leaders.jpg': 'cslp.jpg',
  'finland_helsinki.jpg': 'finland.jpg',
  'bali_new_1.jpg': 'bali.jpg',
  'house_of_lords_group.jpg': 'house-of-lords.jpg',
  'frugal-ai-cover.jpg': 'frugal-ai.jpg',
  'students.jpg': 'students.jpg',
  'teachers.jpg': 'teachers.jpg',
  'transformational-global-education.png': 'about.png',
  'executive-education.jpg': 'programmes.jpg',
  'global_ventures_hero.jpg': 'global-ventures.jpg',
  'hero-classroom.jpg': 'our-impact.jpg'
};

for (const [srcName, destName] of Object.entries(imageCopies)) {
  const srcPath = path.join(srcAssets, srcName);
  const destPath = path.join(publicImages, destName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${srcName} -> public/images/${destName}`);
  } else {
    console.log(`Src image missing: ${srcName}`);
  }
}
