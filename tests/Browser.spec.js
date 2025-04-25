import { chromium } from "@playwright/test"

// Use the imported 'chromium' object to start a browser
(async()=>{


const browser = await chromium.launch();
const context = await browser.newContext();
const page= await context.newPage();

await page.goto("https://www.royalcanin.com/in")

})


