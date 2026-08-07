const fs = require('fs');
const p = 'src/routes/blog.$slug.tsx';
let c = fs.readFileSync(p, 'utf8');

c = c.replace(/className=\\{\\\\\\`relative aspect/g, 'className={`relative aspect');
c = c.replace(/\\}\\\\\\`\\}/g, '}`}');

fs.writeFileSync(p, c);
console.log('Fixed backticks');
