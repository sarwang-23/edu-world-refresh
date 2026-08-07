const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://www.globaledulab.com/post/finlandeducation';

https.get(url, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    fs.writeFileSync(path.join(__dirname, 'post_sample.html'), d);
    console.log('Saved post_sample.html, length:', d.length);

    console.log('--- META TAGS ---');
    const metas = d.match(/<meta[^>]+>/gi) || [];
    metas.forEach(m => {
      if (m.includes('date') || m.includes('time') || m.includes('og:') || m.includes('article:')) {
        console.log(m);
      }
    });

    console.log('--- JSON-LD ---');
    const jsonLds = d.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
    jsonLds.forEach(j => console.log(j));
  });
});
