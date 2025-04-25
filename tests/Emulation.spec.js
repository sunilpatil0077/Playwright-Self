import { test, expect } from '@playwright/test';


test('my test', async ({ page }) => {
  
    await page.goto("https://testautomationpractice.blogspot.com/")
   await page.waitForTimeout(3000)
   
   await page.keyboard.press("PageDown");
   const select=await page.locator('#country')
   await page.waitForTimeout(3000)
  

    // Emulate an iPhone device (iPhone 11 in this case)
    const iPhone = devices['iPhone 11'];
    await page.emulate(iPhone);  // This emulates the iPhone screen size, touch events, etc.

    // Navigate to the mobile web app URL
    await page.goto('https://your-mobile-web-app-url.com'); 

    // Interact with the page like a mobile user
    await page.fill('input[name="username"]', 'testuser'); // Fill a username field
    await page.fill('input[name="password"]', 'password123'); // Fill a password field
    await page.click('button[type="submit"]'); // Click on a submit button

    // Take a screenshot to verify the UI
    await page.screenshot({ path: 'mobile-screenshot.png' });

    // You can also assert or check elements
    const title = await page.title();
    console.log('Page title:', title);

    // Close the browser
    await browser.close();
});
