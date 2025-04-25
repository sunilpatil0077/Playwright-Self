const {test,expect}= require("@playwright/test");

test("Print All Names", async({page})=>{


    await page.goto("https://www.flipkart.com/");


    const Links =await page.$$("._1XjE3T")//.textContent()

    const categories = [];

   for(const link of Links)
   {
       const textContent = await link.textContent()

       if (textContent) {
        categories.push(textContent.trim());
      
   }
   }
   console.log(categories)
   
})

test("Open RC Website", async({page})=>{


    await page.goto("https://www.royalcanin.com/in");

    const menu=await page.locator('.sc-a6dbebca-1.hRThxe')
    await expect(menu).toHaveCount(7)
    const CTA=await page.locator("//div[@class='sc-7217a029-1 bvnhQm']//a[@title='Get the tailored product'][normalize-space()='Get the tailored product']").nth(0)
    await CTA.click();
    await page.waitForTimeout(4000)
    await expect(page).toHaveURL("https://www.royalcanin.com/in/pet-food-finder")




    //await page.pause()
})