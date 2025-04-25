const {test,expect}= require("@playwright/test");

test("test", async({page})=>{


    await page.goto("https://www.flipkart.com/");


    const Links =await page.$$("._1XjE3T")

    await page.locator("").scrollIntoViewIfNeeded()
    await page.mouse.wheel()

    for(let links of Links)
    {
        const AllLinks= await links.textContent()
        console.log(AllLinks)
    }



})
