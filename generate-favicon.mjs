import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';

// Create multiple sizes from the SVG design
const sizes = [16, 32, 48, 64, 128, 180, 192, 512];

sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#2563eb');
  gradient.addColorStop(1, '#1d4ed8');
  
  // Rounded rectangle background
  const radius = size * 0.1875; // 6/32 ratio
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  
  // Code icon (two polylines)
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = size * 0.078; // 2.5/32 ratio
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  const scale = size / 32;
  
  // First polyline (right bracket)
  ctx.beginPath();
  ctx.moveTo(20 * scale, 10 * scale);
  ctx.lineTo(26 * scale, 16 * scale);
  ctx.lineTo(20 * scale, 22 * scale);
  ctx.stroke();
  
  // Second polyline (left bracket)
  ctx.beginPath();
  ctx.moveTo(12 * scale, 22 * scale);
  ctx.lineTo(6 * scale, 16 * scale);
  ctx.lineTo(12 * scale, 10 * scale);
  ctx.stroke();
  
  // Save PNG
  const buffer = canvas.toBuffer('image/png');
  writeFileSync(`public/favicon-${size}x${size}.png`, buffer);
  console.log(`Generated favicon-${size}x${size}.png`);
});

// Also create .ico with multiple sizes
const icoSizes = [16, 32, 48];
const icoCanvases = icoSizes.map(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#2563eb');
  gradient.addColorStop(1, '#1d4ed8');
  const radius = size * 0.1875;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = size * 0.078;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  const scale = size / 32;
  ctx.beginPath();
  ctx.moveTo(20 * scale, 10 * scale);
  ctx.lineTo(26 * scale, 16 * scale);
  ctx.lineTo(20 * scale, 22 * scale);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(12 * scale, 22 * scale);
  ctx.lineTo(6 * scale, 16 * scale);
  ctx.lineTo(12 * scale, 10 * scale);
  ctx.stroke();
  return canvas;
});

// Save as ICO (simplified - just use largest as ico for now)
const icoBuffer = icoCanvases[1].toBuffer('image/png');
writeFileSync('public/favicon.ico', icoBuffer);
console.log('Generated favicon.ico');

// Create apple-touch-icon (180x180)
const appleCanvas = createCanvas(180, 180);
const appleCtx = appleCanvas.getContext('2d');
const appleGradient = appleCtx.createLinearGradient(0, 0, 180, 180);
appleGradient.addColorStop(0, '#2563eb');
appleGradient.addColorStop(1, '#1d4ed8');
const appleRadius = 180 * 0.1875;
appleCtx.beginPath();
appleCtx.moveTo(appleRadius, 0);
appleCtx.lineTo(180 - appleRadius, 0);
appleCtx.quadraticCurveTo(180, 0, 180, appleRadius);
appleCtx.lineTo(180, 180 - appleRadius);
appleCtx.quadraticCurveTo(180, 180, 180 - appleRadius, 180);
appleCtx.lineTo(appleRadius, 180);
appleCtx.quadraticCurveTo(0, 180, 0, 180 - appleRadius);
appleCtx.lineTo(0, appleRadius);
appleCtx.quadraticCurveTo(0, 0, appleRadius, 0);
appleCtx.closePath();
appleCtx.fillStyle = appleGradient;
appleCtx.fill();
appleCtx.strokeStyle = '#ffffff';
appleCtx.lineWidth = 180 * 0.078;
appleCtx.lineCap = 'round';
appleCtx.lineJoin = 'round';
const appleScale = 180 / 32;
appleCtx.beginPath();
appleCtx.moveTo(20 * appleScale, 10 * appleScale);
appleCtx.lineTo(26 * appleScale, 16 * appleScale);
appleCtx.lineTo(20 * appleScale, 22 * appleScale);
appleCtx.stroke();
appleCtx.beginPath();
appleCtx.moveTo(12 * appleScale, 22 * appleScale);
appleCtx.lineTo(6 * appleScale, 16 * appleScale);
appleCtx.lineTo(12 * appleScale, 10 * appleScale);
appleCtx.stroke();
writeFileSync('public/apple-touch-icon.png', appleCanvas.toBuffer('image/png'));
console.log('Generated apple-touch-icon.png');

// Create site.webmanifest
const manifest = {
  name: "Dominick Gianino - Personal Website",
  short_name: "Dominick Gianino",
  description: "Personal website of Dominick Gianino - Software Engineer",
  start_url: "/personal-website/",
  display: "standalone",
  background_color: "#2563eb",
  theme_color: "#2563eb",
  icons: sizes.map(size => ({
    src: `/personal-website/favicon-${size}x${size}.png`,
    sizes: `${size}x${size}`,
    type: "image/png",
    purpose: "any maskable"
  }))
};
writeFileSync('public/site.webmanifest', JSON.stringify(manifest, null, 2));
console.log('Generated site.webmanifest');

console.log('All favicon files generated!');
