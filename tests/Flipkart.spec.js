const {test,expect}= require("@playwright/test");

test("test", async({page})=>{


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

test("Verify the Flipkart title",async({page})=>{

    await page.goto("https://www.flipkart.com/");
    expect(page).toHaveURL("https://www.flipkart.com/")
})