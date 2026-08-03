const fs = require('fs');
const files = [
  'src/routes/apply-now.tsx',
  'src/routes/business-leaders.tsx',
  'src/routes/gilp-delegate.tsx',
  'src/routes/insights.tsx',
  'src/routes/programmes.gilp.tsx',
  'src/routes/programmes.graduate.tsx',
  'src/routes/programmes.house-of-lords.tsx',
  'src/routes/programmes.student-camps.tsx',
  'src/routes/programmes.teacher-training.tsx',
  'src/routes/programmes.zero-to-one.tsx',
  'src/routes/school-leaders.tsx',
  'src/routes/students.tsx',
  'src/routes/students_.architecture.tsx',
  'src/routes/students_.entrepreneurship.tsx',
  'src/routes/students_.stem-research.tsx',
  'src/routes/teachers.tsx',
  'src/routes/ventures.$slug.tsx'
];

files.forEach(f => {
  if (!fs.existsSync(f)) { console.log('not found: ' + f); return; }
  let content = fs.readFileSync(f, 'utf8');
  
  content = content.replace(/ - (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?:[a-z]*)? 202[0-9]/g, '');
  content = content.replace(/\s(January|February|March|April|May|June|July|August|September|October|November|December) 202[0-9]/g, '');
  content = content.replace(/\b202[0-9] Programmes\b/g, 'Programmes');
  content = content.replace(/\b202[0-9] Cohort(?:s)?\b/g, 'Cohorts');
  content = content.replace(/\b202[0-9] season\b/g, 'season');
  content = content.replace(/GILP 202[0-9]/g, 'GILP');
  content = content.replace(/GILP \u2013 202[0-9]/g, 'GILP');
  content = content.replace(/Cambridge 202[0-9]/g, 'Cambridge');
  content = content.replace(/Agenda 202[0-9]/g, 'Agenda');
  content = content.replace(/ONGOING PROGRAMMES - 202[0-9]/g, 'ONGOING PROGRAMMES');
  content = content.replace(/ENQUIRE FOR 202[0-9]/g, 'ENQUIRE');
  content = content.replace(/\d{1,2}(st|nd|rd|th)? (January|February|March|April|May|June|July|August|September|October|November|December) 202[0-9]/g, 'Upcoming');
  content = content.replace(/\d{1,2}\u2013\d{1,2} (January|February|March|April|May|June|July|August|September|October|November|December) 202[0-9]/g, 'Upcoming');
  content = content.replace(/\d{1,2}-\d{1,2} (January|February|March|April|May|June|July|August|September|October|November|December) 202[0-9]/g, 'Upcoming');
  content = content.replace(/ \u00B7 202[0-9]/g, '');
  content = content.replace(/ \u00B7 (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?:[a-z]*)? 202[0-9]/g, '');
  content = content.replace(/202[0-9]\u2013202[0-9]/g, 'Upcoming');
  content = content.replace(/202[0-9] Intake/g, 'Upcoming Intake');
  content = content.replace(/Jul 202[0-9]/g, 'Upcoming');
  content = content.replace(/August 202[0-9]/g, 'Upcoming');
  content = content.replace(/September 202[0-9]/g, 'Upcoming');
  content = content.replace(/October 202[0-9]/g, 'Upcoming');
  
  // also target bare years like 'in 2026' or similar, but safely.
  // Actually, replacing all bare "2026" with "Upcoming" might be too aggressive, 
  // Let's rely on specific regex replacements for now and see what's left.
  
  fs.writeFileSync(f, content);
});
