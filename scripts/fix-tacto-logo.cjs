const fs = require('fs');
const file = 'src/routes/ventures.$slug.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'className="w-20 h-20 object-contain drop-shadow-xl"',
  'className="w-12 h-12 object-contain drop-shadow-md"'
);

// Just to be sure the grids are fixed if I missed anything, no changes needed for grids.

fs.writeFileSync(file, content, 'utf8');
console.log('Tacto logo alignment fixed.');
