i//mport { chromium } from 'playwright'; // Import Playwright
const { chromium } = require('playwright');
const browser = await chromium.launch({ headless: false });  // Open the browser in non-headless mode

// (async()=>{
//     const browser = await chromium.launch({ headless: false });
// //const browser=await chromium.launch()
// const context =await browser.newContext()
// const page=await context.newPage()

// await page.goto("https://www.google.com/search?client=firefox-b-d&channel=entpr&q=npm+install+dotenv+--save")

//})()