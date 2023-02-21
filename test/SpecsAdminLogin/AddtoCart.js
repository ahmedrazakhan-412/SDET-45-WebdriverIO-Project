import LoginPage from '../OnlineFoodOrderingSystem/Loginpage.js'

describe('My Login application', async() => {
    let total
    let totalValue
    let addtocart
    it('should login with valid credentials', async () => {
        await LoginPage.login('ahmedrazakhan412@gmail.com','khan@412');
        await (await browser.$("//a[normalize-space()='Restaurants']")).click();
        await browser.$("//div[@class='col-xs-12 col-sm-7 col-md-7 col-lg-9']//div[2]//div[1]//div[1]//a[1]").click();
        addtocart = await browser.$("(//input[@value='Add To Cart'])[1]");
        await addtocart.scrollIntoView();
        await addtocart.click();
        await (await browser.$("//h3[normalize-space()='Your Cart']")).scrollIntoView();
        await browser.pause(3000);
        total = await (await browser.$("h3[class='value'] strong"));
        totalValue = await total.getText();
        console.log("TOTAL Amount : "+ totalValue);
        expect(totalValue).toHaveValueContaining('14')
        await browser.pause(3000);
    })
})