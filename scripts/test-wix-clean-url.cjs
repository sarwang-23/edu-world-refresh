const https = require('https');

// Sample blurred Wix image URL from HTML
const blurredUrl = 'https://static.wixstatic.com/media/7e2606_7a4942d6c35549ceab277b93f911cd96~mv2.jpg/v1/fill/w_645,h_250,fp_0.50_0.50,q_30,blur_30,enc_auto/7e2606_7a4942d6c35549ceab277b93f911cd96~mv2.jpg';

function cleanWixImageUrl(url) {
  if (!url) return '';
  // Extract base wix media URL before /v1/fill
  const match = url.match(/(https:\/\/static\.wixstatic\.com\/media\/[^\/]+)/i);
  if (match) {
    return match[1];
  }
  // Otherwise remove blur parameters
  return url.replace(/,blur_\d+/g, '').replace(/q_\d+/g, 'q_90');
}

const cleanUrl = cleanWixImageUrl(blurredUrl);

console.log('Blurred URL:', blurredUrl);
console.log('Clean High-Res URL:', cleanUrl);

https.get(cleanUrl, res => {
  console.log('Response Status:', res.statusCode);
  console.log('Content-Type:', res.headers['content-type']);
  console.log('Content-Length:', res.headers['content-length']);
});
