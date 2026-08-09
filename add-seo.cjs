const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === '__root.tsx' || file.includes('$slug')) continue;
  
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // strict check for head property in TanStack Route options
  const hasRouteHead = /head:\s*\(/.test(content) || /head\s*\(/.test(content);
  if (hasRouteHead) {
    console.log(`Skipping ${file} - already has head`);
    continue;
  }
  
  let routePath = '/' + file.replace(/\.tsx$/, '').replace(/\.index$/, '').replace(/\./g, '/').replace(/_/g, '');
  if (routePath === '/index') routePath = '/';
  
  // add import
  if (!content.includes("import { buildMeta }")) {
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLine = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfLine + 1) + `import { buildMeta } from "@/lib/seo";\n` + content.slice(endOfLine + 1);
    } else {
      content = `import { buildMeta } from "@/lib/seo";\n` + content;
    }
  }
  
  const routeRegex = /createFileRoute\(['"`](.*?)['"`]\)\(\{/;
  const match = content.match(routeRegex);
  if (match) {
    const matchedRoutePath = match[1];
    
    // Check if we haven't already injected buildMeta
    if (!content.includes(`buildMeta("${matchedRoutePath}")`)) {
      const insertIndex = match.index + match[0].length;
      content = content.slice(0, insertIndex) + `\n  head: () => buildMeta("${matchedRoutePath}"),` + content.slice(insertIndex);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${file} with buildMeta("${matchedRoutePath}")`);
    }
  }
}
