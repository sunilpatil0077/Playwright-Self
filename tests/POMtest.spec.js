const{test,expect}=require ("@playwright/test")
import {LoginPage} from "../Pages/LoginPage"

test("POM Test", async({page})=>{

const login =new LoginPage(page)


await login.openPage()


})