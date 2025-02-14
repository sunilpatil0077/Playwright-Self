const {test,expect}= require("@playwright/test");

test("test", async({page})=>{


    await page.goto("https://www.royalcanin.com/in");

    const menu=await page.locator('.sc-a6dbebca-1.hRThxe')
    await expect(menu).toHaveCount(7)
    const CTA=await page.locator("//div[@class='sc-7217a029-1 bvnhQm']//a[@title='Get the tailored product'][normalize-space()='Get the tailored product']").nth(0)
    await CTA.click();
    await page.waitForTimeout(4000)
    await expect(page).toHaveURL("https://www.royalcanin.com/in/pet-food-finder")




    //await page.pause()
})