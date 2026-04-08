import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CHROME_PATH =
  process.env.CHROME_PATH ||
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

// Auto-increment screenshot filename
const screenshotsDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });

let n = 1;
while (fs.existsSync(path.join(screenshotsDir, label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`))) n++;
const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const outPath  = path.join(screenshotsDir, filename);

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1440, height: 900 },
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 800));

  // Scroll to trigger IntersectionObserver reveals
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  let scrollPos = 0;
  while (scrollPos < pageHeight) {
    scrollPos += 600;
    await page.evaluate((y) => window.scrollTo(0, y), scrollPos);
    await new Promise(r => setTimeout(r, 180));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 400));

  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();

  console.log(`Screenshot saved: temporary screenshots/${filename}`);
})();
