const fs = require('fs');
const path = require('path');

const files = [
  'src/components/Nav.tsx',
  'src/routes/programmes.index.tsx',
  'src/routes/students_.architecture.tsx',
  'src/utils/sourceLabel.ts',
];

files.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  let code = fs.readFileSync(fullPath, 'utf8');
  const updated = code.replaceAll('/programmes/graduate', '/gsp');
  if (updated !== code) {
    fs.writeFileSync(fullPath, updated, 'utf8');
    console.log('Updated:', file);
  } else {
    console.log('No changes:', file);
  }
});

// Also add /gsp label to sourceLabel
const labelPath = path.join(__dirname, '../src/utils/sourceLabel.ts');
let labelCode = fs.readFileSync(labelPath, 'utf8');
if (!labelCode.includes('"/gsp"')) {
  labelCode = labelCode.replace('"/programmes/graduate": "Graduate Summer Programme",', '"/programmes/graduate": "Graduate Summer Programme",\n    "/gsp": "Graduate Summer Programme",');
  fs.writeFileSync(labelPath, labelCode, 'utf8');
  console.log('Added /gsp label to sourceLabel.ts');
}

console.log('All done!');
