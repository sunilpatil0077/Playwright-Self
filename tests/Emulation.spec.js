import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 800, height: 800 },
});

test('my test', async ({ page }) => {
  
    await page.goto("https://www.flipkart.com/")
});