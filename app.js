const puppeteer = require('puppeteer');
require('dotenv/config'); 

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://bbps.canarabank.in/AgentService/invokeBillFetchPage');

  await page.select("#BillerCategoryLists", "Electricity");
  await page.select("#BillerLists", "KSEBL0000KER01");
  await page.type('#inputMobile', process.env.MOBILE_NUMBER);
  await page.type('[data-name="Consumer Number"]',process.env.CONSUMER_NUMBER);
  await page.click("#btnFetchBill");
  
})();