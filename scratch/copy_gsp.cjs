const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../src/routes/programmes.graduate.tsx');
const destPath = path.join(__dirname, '../src/routes/gsp.tsx');

let code = fs.readFileSync(srcPath, 'utf8');
code = code.replace("createFileRoute('/programmes/graduate')", "createFileRoute('/gsp')");
fs.writeFileSync(destPath, code, 'utf8');
console.log('Successfully created gsp.tsx');
