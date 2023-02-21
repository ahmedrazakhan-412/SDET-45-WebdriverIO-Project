import LoginPage from '../IGPGiftsIndia/Loginpage.js'

describe('My Login application', async() => {
    let total
    let totalValue
    let addtocart
    it('should login with valid credentials', async () => {
        await LoginPage.login('ahmedrazakhan412@gmail.com','Khan@412');
        await (await browser.$("(//span[@class='selection-panel-text'][normalize-space()='Cakes'])[1]")).click();
        await browser.$("(//img[@alt='Order Birthday Cake Online'])[2]").click();
        addtocart = await browser.$("//p[normalize-space()='Chocolate Delight Cake (Half Kg)']");
        await addtocart.scrollIntoView();
        await addtocart.click();
        await (await browser.$("//h3[normalize-space()='Your Cart']")).scrollIntoView();
        await browser.pause(3000);
        total = await (await browser.$("h3[class='value'] strong"));
        totalValue = await total.getText();
        console.log("TOTAL Amount : "+ totalValue);
        expect(totalValue).toHaveValueContaining('28')
        await browser.pause(3000);
    })
})