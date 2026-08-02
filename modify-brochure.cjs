const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function modifyBrochure() {
  const originalPath = path.join(__dirname, 'public', 'gilp-brochure-original.pdf');
  const outputPath = path.join(__dirname, 'public', 'gilp-brochure.pdf');

  const existingPdfBytes = fs.readFileSync(originalPath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pages = pdfDoc.getPages();
  const { width, height } = pages[0].getSize();
  console.log(`PDF: ${pages.length} pages, ${Math.round(width)}x${Math.round(height)}`);

  // Colors
  const white = rgb(1, 1, 1);
  const darkGreen = rgb(0.04, 0.19, 0.11);
  const gold = rgb(0.72, 0.50, 0.04);
  const cream = rgb(0.93, 0.89, 0.83);

  // Custom replacement text
  const CUSTOM_DATE_TEXT = 'Flexible Dates  |  Rolling Cohorts';
  const CUSTOM_YEAR_TEXT = 'Available Year-Round';
  const CUSTOM_SCHEDULE = 'Contact us to schedule your cohort';

  pages.forEach((page, idx) => {
    const pw = page.getSize().width;
    const ph = page.getSize().height;

    // ─── Strategy: Cover ALL potential date areas with white boxes ───
    // Dates in PDFs usually appear in these common regions:
    
    // 1. Near top of page (header dates like "14–18 September, 2026")
    page.drawRectangle({ x: 20, y: ph - 130, width: pw - 40, height: 50, color: white, opacity: 1 });
    
    // 2. Mid-upper section (programme dates in content)
    page.drawRectangle({ x: 20, y: ph - 280, width: pw - 40, height: 30, color: white, opacity: 1 });
    page.drawRectangle({ x: 20, y: ph - 320, width: pw - 40, height: 30, color: white, opacity: 1 });
    
    // 3. Mid section  
    page.drawRectangle({ x: 20, y: ph / 2 + 50, width: pw - 40, height: 25, color: white, opacity: 1 });
    page.drawRectangle({ x: 20, y: ph / 2 + 20, width: pw - 40, height: 25, color: white, opacity: 1 });
    page.drawRectangle({ x: 20, y: ph / 2 - 10, width: pw - 40, height: 25, color: white, opacity: 1 });
    
    // 4. Bottom section
    page.drawRectangle({ x: 20, y: ph - 730, width: pw - 40, height: 30, color: white, opacity: 1 });

    // ─── Now add Custom text in key positions ───
    if (idx === 0) {
      // Page 1 hero - add big custom date label
      page.drawRectangle({ x: 20, y: ph - 180, width: 360, height: 45, color: darkGreen, opacity: 0.92 });
      page.drawText('Flexible Programme Dates', {
        x: 30, y: ph - 150, size: 14, font: helveticaBold, color: gold,
      });
      page.drawText('Rolling cohorts available | Contact us to schedule', {
        x: 30, y: ph - 168, size: 9, font: helvetica, color: white,
      });
    }

    // Add "Flexible Dates" text over covered areas on all pages
    page.drawText(CUSTOM_DATE_TEXT, {
      x: 22, y: ph - 108, size: 9.5, font: helveticaBold, color: gold,
    });

    page.drawText(CUSTOM_YEAR_TEXT, {
      x: 22, y: ph - 120, size: 8, font: helvetica, color: darkGreen,
    });

    // Replace year mentions mid-page
    page.drawText(CUSTOM_SCHEDULE, {
      x: 22, y: ph - 270, size: 8.5, font: helvetica, color: darkGreen,
    });
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('✅ Brochure PDF modified and saved!');
  console.log(`   Output: ${outputPath}`);
}

modifyBrochure().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
