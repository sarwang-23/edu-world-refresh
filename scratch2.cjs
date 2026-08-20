const fs = require("fs");

// Update index.tsx
let indexCode = fs.readFileSync("src/routes/index.tsx", "utf-8");

// Add import
if (!indexCode.includes("import { Voices }")) {
  indexCode = indexCode.replace(
    'import { Footer } from "@/components/Footer";',
    'import { Footer } from "@/components/Footer";\nimport { Voices } from "@/components/Voices";',
  );
}

// Remove imports from index.tsx
const importsToRemove = [
  "import rosalindHowell from '@/assets/people/rosalind_howell.jpg';",
  "import samTully from '@/assets/people/sam_tully.jpg';",
  "import yvonneWalburga from '@/assets/people/yvonne_walburga.jpg';",
  "import lakshmiKothaImg from '@/assets/lakshmi_kotha.jpg';",
  "import jaideepPrabhuImg from '@/assets/jaideep_prabhu.jpg';",
];
importsToRemove.forEach((imp) => {
  indexCode = indexCode.replace(imp + "\n", "");
  indexCode = indexCode.replace(imp + "\r\n", "");
  indexCode = indexCode.replace(imp, "");
});

// Remove function Voices from index.tsx
const voicesStart = indexCode.indexOf("function Voices() {");
if (voicesStart !== -1) {
  const ctaStart = indexCode.indexOf("function CTA() {", voicesStart);
  if (ctaStart !== -1) {
    indexCode = indexCode.substring(0, voicesStart) + indexCode.substring(ctaStart);
  }
}

fs.writeFileSync("src/routes/index.tsx", indexCode);

// Update about.tsx
let aboutCode = fs.readFileSync("src/routes/about.tsx", "utf-8");

if (!aboutCode.includes("import { Voices }")) {
  aboutCode = aboutCode.replace(
    "import { SharedTestimonials } from '@/components/SharedTestimonials';",
    'import { Voices } from "@/components/Voices";',
  );
}

// Remove unused imports
const aboutImportsToRemove = [
  "import jivikaVikamshi from '@/assets/people/jivika_vikamshi.jpg';",
  "import amarjitSingh from '@/assets/people/amarjit_singh.jpg';",
  "import lindaTang from '@/assets/people/linda_tang.jpg';",
];
aboutImportsToRemove.forEach((imp) => {
  aboutCode = aboutCode.replace(imp + "\n", "");
  aboutCode = aboutCode.replace(imp + "\r\n", "");
  aboutCode = aboutCode.replace(imp, "");
});

// Remove aboutTestimonials
const arrStart = aboutCode.indexOf("const aboutTestimonials = [");
if (arrStart !== -1) {
  const returnStart = aboutCode.indexOf("return (", arrStart);
  if (returnStart !== -1) {
    aboutCode = aboutCode.substring(0, arrStart) + aboutCode.substring(returnStart);
  }
}

// Replace component
aboutCode = aboutCode.replace(
  "<SharedTestimonials customTestimonials={aboutTestimonials} />",
  "<Voices />",
);

fs.writeFileSync("src/routes/about.tsx", aboutCode);

console.log("done");
