exports.LoginPage =
class LoginPage{

    constructor(page)
    {
        this.page=page;
        this.loginLink=" ",
        this.username=' '
        this.password=' '
        this.submit=' '
    }

    async openPage()
    {
        await this.page.goto("https://www.royalcanin.com/in")
    }
 async login(username,password){
    await this.page.locator(this.loginLink).click()
    await this.page.locator(this.username).fill()
    await this.page.locator(this.password).fill()
    await this.page.click(this.submit)
 }

}

// test