const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'post_sample.html'), 'utf-8');

// Match data-hook="time-to-read"
const match = html.match(/data-hook=["']time-to-read["'][^>]*>([\s\S]*?)<\/(?:span|div|p|a)>/i);
console.log('time-to-read text:', match ? match[1].replace(/<[^>]+>/g, '').trim() : 'Not found');

// Match read time patterns like "2 min read", "3 min read", etc.
const readTimeMatches = html.match(/\b\d+\s*min(?:\s*read)?\b/gi);
console.log('readTimeMatches:', readTimeMatches);
