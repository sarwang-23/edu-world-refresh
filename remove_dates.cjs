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
  'src/routes/ventures..tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Replace patterns like " - Mar 2026" or " March 2026" or " 2026"
  content = content.replace(/ - (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?:[a-z]*)? 202[0-9]/g, '');
  content = content.replace(/\s(January|February|March|April|May|June|July|August|September|October|November|December) 202[0-9]/g, '');
  content = content.replace(/\b202[0-9] Programmes\b/g, 'Programmes');
  content = content.replace(/\b202[0-9] Cohort(s)?\b/g, 'Cohort');
  content = content.replace(/\b202[0-9] season\b/g, 'season');
  content = content.replace(/GILP 2026/g, 'GILP');
  content = content.replace(/GILP \u2013 2026/g, 'GILP');
  content = content.replace(/Cambridge 2026/g, 'Cambridge');
  content = content.replace(/Agenda 2026/g, 'Agenda');
  content = content.replace(/ONGOING PROGRAMMES - 2026/g, 'ONGOING PROGRAMMES');
  content = content.replace(/ENQUIRE FOR 2026/g, 'ENQUIRE');
  content = content.replace(/\d{1,2}(st|nd|rd|th)? (January|February|March|April|May|June|July|August|September|October|November|December) 202[0-9]/g, 'Upcoming');
  content = content.replace(/\d{1,2}\u2013\d{1,2} (January|February|March|April|May|June|July|August|September|October|November|December) 202[0-9]/g, 'Upcoming');
  content = content.replace(/\d{1,2}-\d{1,2} (January|February|March|April|May|June|July|August|September|October|November|December) 202[0-9]/g, 'Upcoming');
  content = content.replace(/ \u00B7 202[0-9]/g, '');
  content = content.replace(/ \u00B7 (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)(?:[a-z]*)? 202[0-9]/g, '');
  content = content.replace(/2025\u20132026/g, 'Upcoming');
  content = content.replace(/2026 Intake/g, 'Upcoming Intake');
  content = content.replace(/Jul 2026/g, 'Upcoming');
  
  fs.writeFileSync(f, content);
});
