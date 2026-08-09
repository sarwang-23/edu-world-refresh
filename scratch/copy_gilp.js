const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../src/routes/programmes.gilp.tsx');
const destPath = path.join(__dirname, '../src/routes/indialeadership.tsx');

let code = fs.readFileSync(srcPath, 'utf8');
code = code.replace("createFileRoute('/programmes/gilp')", "createFileRoute('/indialeadership')");
fs.writeFileSync(destPath, code, 'utf8');
console.log('Successfully updated indialeadership.tsx');
