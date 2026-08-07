import fitz
import sys
import shutil

pdf_path = r"C:\Users\Sarwang\OneDrive\Pictures\2026_May_Frugal_AI_Executive_Agenda_Research_Report (1).pdf"
public_pdf_path = "public/frugal-ai-agenda.pdf"
image_path = "src/assets/frugal-ai-yellow-hq.jpg"

try:
    # 1. Copy the PDF to public directory
    shutil.copyfile(pdf_path, public_pdf_path)
    print(f"Copied PDF to {public_pdf_path}")
    
    # 2. Extract first page as image
    doc = fitz.open(pdf_path)
    page = doc.load_page(0)  # first page
    pix = page.get_pixmap(dpi=300) # High quality
    pix.save(image_path)
    print(f"Saved high-quality image to {image_path}")
    
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
