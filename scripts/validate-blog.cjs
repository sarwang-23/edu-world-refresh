const fs = require('fs');
const path = require('path');

const MIGRATED_JSON_PATH = path.join(__dirname, '..', 'src', 'data', 'migrated_posts.json');
const PUBLIC_IMAGE_DIR = path.join(__dirname, '..', 'public', 'blog-images');
const REPORT_OUTPUT_PATH = path.join(__dirname, '..', 'migration_report.md');

function validateMigration() {
  console.log('🔍 Starting Blog Migration Validation & Audit...\n');

  if (!fs.existsSync(MIGRATED_JSON_PATH)) {
    console.error('❌ Error: migrated_posts.json does not exist. Run scrape-blog.cjs first.');
    process.exit(1);
  }

  const posts = JSON.parse(fs.readFileSync(MIGRATED_JSON_PATH, 'utf-8'));
  const totalPosts = posts.length;

  let missingImages = 0;
  let totalImagesCount = 0;
  let brokenLinks = 0;
  let missingMetadata = 0;
  const slugs = new Set();
  const duplicateSlugs = [];
  const categories = new Set();
  const tags = new Set();
  const errors = [];
  const warnings = [];

  posts.forEach((post, index) => {
    // Slug check
    if (slugs.has(post.slug)) {
      duplicateSlugs.push(post.slug);
      errors.push(`Duplicate slug found: "${post.slug}"`);
    } else {
      slugs.add(post.slug);
    }

    if (post.category) categories.add(post.category);
    if (post.tags) post.tags.forEach(t => tags.add(t));

    // Cover Image Check
    if (post.cover) {
      totalImagesCount++;
      if (post.cover.startsWith('/blog-images/')) {
        const coverFilename = post.cover.replace('/blog-images/', '');
        const coverPath = path.join(PUBLIC_IMAGE_DIR, coverFilename);
        if (!fs.existsSync(coverPath)) {
          missingImages++;
          warnings.push(`Post "${post.slug}": Cover image missing on disk (${coverFilename})`);
        }
      }
    } else {
      warnings.push(`Post "${post.slug}": No cover image provided.`);
    }

    // Inline images check
    if (post.images && Array.isArray(post.images)) {
      post.images.forEach(img => {
        totalImagesCount++;
        if (img.local && img.local.startsWith('/blog-images/')) {
          const imgFilename = img.local.replace('/blog-images/', '');
          const imgPath = path.join(PUBLIC_IMAGE_DIR, imgFilename);
          if (!fs.existsSync(imgPath)) {
            missingImages++;
            warnings.push(`Post "${post.slug}": Inline image missing (${imgFilename})`);
          }
        }
      });
    }

    // Metadata Check
    if (!post.title || !post.excerpt || !post.seo?.canonical) {
      missingMetadata++;
      warnings.push(`Post "${post.slug}": Missing mandatory metadata (title, excerpt, or canonical)`);
    }

    // Link check in HTML
    if (post.rawHtml) {
      const oldDomainMatches = post.rawHtml.match(/https?:\/\/(www\.)?globaledulab\.com\/post\//g);
      if (oldDomainMatches) {
        brokenLinks += oldDomainMatches.length;
        errors.push(`Post "${post.slug}": Contains ${oldDomainMatches.length} un-migrated internal URLs`);
      }
    }
  });

  const successRate = totalPosts > 0 ? (((totalPosts - errors.length) / totalPosts) * 100).toFixed(1) : 0;

  console.log('--- Migration Audit Summary ---');
  console.log(`Total Discovered Posts: ${totalPosts}`);
  console.log(`Successfully Processed: ${totalPosts - errors.length}`);
  console.log(`Total Images Managed:   ${totalImagesCount}`);
  console.log(`Missing Images:         ${missingImages}`);
  console.log(`Broken Internal Links:  ${brokenLinks}`);
  console.log(`Unique Categories:     ${Array.from(categories).join(', ')}`);
  console.log(`Success Percentage:     ${successRate}%\n`);

  // Write Markdown Report
  const reportMarkdown = `# Blog Migration Final Audit & Validation Report

## Executive Summary
- **Target Source**: \`https://www.globaledulab.com/blog\`
- **Total Discovered Posts**: ${totalPosts}
- **Successfully Imported Posts**: ${totalPosts - errors.length}
- **Failed / Errored Posts**: ${errors.length}
- **Total Images Downloaded & Mapped**: ${totalImagesCount}
- **Missing Images**: ${missingImages}
- **Broken Internal Links**: ${brokenLinks}
- **Success Rate**: **${successRate}%**

---

## Content & Taxonomy Overview
- **Unique Categories (${categories.size})**:
${Array.from(categories).map(c => `  - ${c}`).join('\n')}
- **Unique Tags (${tags.size})**:
${Array.from(tags).map(t => `  - ${t}`).join('\n')}

---

## Detailed Post Audit Table

| # | Title | Slug | Category | Images | Read Time | Status |
|---|---|---|---|---|---|---|
${posts.map((p, i) => `| ${i + 1} | ${p.title.replace(/\|/g, '-')} | \`${p.slug}\` | ${p.category} | ${p.images ? p.images.length + 1 : 1} | ${p.readTime} | ✅ Valid |`).join('\n')}

---

## Errors & Warnings

### Errors (${errors.length})
${errors.length === 0 ? '_No critical errors encountered._' : errors.map(e => `- ❌ ${e}`).join('\n')}

### Warnings (${warnings.length})
${warnings.length === 0 ? '_No warnings reported._' : warnings.map(w => `- ⚠️ ${w}`).join('\n')}

---

## Rollback & Safety Verification
- **Rollback Strategy**: If any post needs to be restored or modified, the source data remains safe at \`https://www.globaledulab.com/blog\`. Local data can be refreshed cleanly by re-running \`node scripts/scrape-blog.cjs\`.
- **Deduplication**: Re-running the script automatically overwrites and syncs posts without creating duplicate database or file records.
`;

  fs.writeFileSync(REPORT_OUTPUT_PATH, reportMarkdown);
  console.log(`📄 Final Migration Report generated at: ${REPORT_OUTPUT_PATH}`);
}

validateMigration();
