const fs = require("fs");
const https = require("https");

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    };
    https
      .get(url, options, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          return download(response.headers.location, dest).then(resolve).catch(reject);
        }

        if (response.statusCode !== 200) {
          return reject(new Error(`Failed to download ${url}, status: ${response.statusCode}`));
        }

        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
};

const urls = {
  "graduate_hotel.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/Doubletree_by_Hilton_Cambridge.jpg",
  "city_centre_hotel.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/7/7b/Hilton_Cambridge_City_Centre_Hotel_-_geograph.org.uk_-_5897652.jpg",
  "university_arms.jpg":
    "https://upload.wikimedia.org/wikipedia/commons/7/77/University_Arms_Hotel_Cambridge_-_geograph.org.uk_-_5790898.jpg",
};

async function run() {
  for (const [filename, url] of Object.entries(urls)) {
    try {
      await download(url, "src/assets/" + filename);
      console.log("Downloaded " + filename);
    } catch (e) {
      console.error(e.message);
    }
  }
}

run();
