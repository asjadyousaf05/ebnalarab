const puppeteer = require("puppeteer-core");
(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    headless: true,
    defaultViewport: { width: 430, height: 900 }
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/', { waitUntil: 'networkidle0' });
  await page.click('button[aria-label="Open menu"]');
  await page.waitForTimeout(500);
  const bodyText = await page.$eval('body', el => el.innerText);
  console.log('TEXT', bodyText.slice(0, 400));
  await page.screenshot({ path: 'puppeteer-menu.png', fullPage: true });
  await browser.close();
})();
