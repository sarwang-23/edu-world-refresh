const fs = require("fs");

const file = "src/routes/ventures.$slug.tsx";
let content = fs.readFileSync(file, "utf8");

// Update Logo
content = content.replace(
  /logo: <Network className="h-12 w-12 text-white" \/>/,
  'logo: <img src="/tacto/logo.png" alt="Project TACTO Logo" className="w-20 h-20 object-contain drop-shadow-xl" />,\n    heroImg: \'/tacto/hero.png\'',
);

// Update Gaurang
content = content.replace(
  /{ name: 'Gaurang Pant', role: 'Co-Founder', bio: 'Innovator and developer/g,
  "{ name: 'Gaurang Pant', role: 'Co-Founder', img: '/tacto/gaurang.png', bio: 'Innovator and developer",
);

// Update Shristi
content = content.replace(
  /{ name: 'Shristi Mandoliya', role: 'Co-Founder', bio: 'Passionate about creating/g,
  "{ name: 'Shristi Mandoliya', role: 'Co-Founder', img: '/tacto/shristi.png', bio: 'Passionate about creating",
);

// Update Kavya
content = content.replace(
  /{ name: 'Kavya Singh', role: 'Co-Founder', bio: 'Dedicated to leveraging/g,
  "{ name: 'Kavya Singh', role: 'Co-Founder', img: '/tacto/kavya.png', bio: 'Dedicated to leveraging",
);

// Fix the smart quotes â€” -> — if any
content = content.replace(/â€”/g, "—");

fs.writeFileSync(file, content, "utf8");
console.log("Tacto data updated.");
