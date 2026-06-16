import sharp from 'sharp';
import { readFileSync } from 'fs';

const svg = readFileSync('./public/images/og-image.svg');
await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .png()
  .toFile('./public/images/og-image.png');

console.log('OG image generated: public/images/og-image.png');
