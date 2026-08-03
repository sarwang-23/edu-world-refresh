const fs = require('fs');
const file = 'src/routes/ventures.$slug.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix Metrics Grid
content = content.replace(
  '<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">',
  '<div className={`grid gap-4 ${v.metrics.length % 4 === 0 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"}`}>'
);

// Fix Team Grid
content = content.replace(
  '<div className="grid sm:grid-cols-2 gap-5">',
  '<div className={`grid gap-5 ${v.team.length === 3 || v.team.length === 6 ? "sm:grid-cols-2 xl:grid-cols-3" : "sm:grid-cols-2"}`}>'
);

// Fix Progress Grid (if needed, but space-y-5 is fine)
// Make Roadmap more responsive (from 4 cols to 2 on tablets, and 4 on huge screens, or dynamically based on length)
content = content.replace(
  '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">',
  '<div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 ${v.roadmap.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Dynamic grid layouts updated!');
