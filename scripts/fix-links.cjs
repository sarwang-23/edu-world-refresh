const fs = require('fs');
const path = require('path');
const dir = './src/routes';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const regex = /<Link([^>]*?)to="\/contact"([^>]*)>([\s\n]*)Apply Now/g;
  if (regex.test(content)) {
    console.log('Updating ' + filePath);
    const updated = content.replace(regex, '<Link$1to="/apply-now"$2>$3Apply Now');
    fs.writeFileSync(filePath, updated);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walk(dir);
console.log('Done');
