import { expect } from "chai";

/* Login to Online_Food_Ordering_System select Dish with Restaurants and view Menu.
 and get the Dish name along with quantity and price and AddToCart that same Dish.
 get the same Dish name along with quantity and price in Your Cart.
 should verify both data are same.Checkout the Dish and Order Now and accept the Alert PopUp.
 get Alert Text from Order Confirmation Message and print it on console.
 get Confirm that same Dish order from My Orders page.
*/

describe('My Login application', async() => {
    let DishName
    let Price
    let Quantity
    let addtocart
    let InRestaurants = [];
    let YourCart = [];

    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Online_Food_Ordering_System/login.php`);
        await browser.pause(2000);
        expect(await browser.getTitle()).to.equal('Login');
        await browser.$("input[placeholder='Username']").setValue('ahmedrazakhan412@gmail.com');
        await browser.$("input[placeholder='Password']").setValue('khan@412');
        await browser.$("#buttn").click();
        expect(await browser.getTitle()).to.equal('Login');
        await browser.pause(3000);
    })

    it('should select Dish with Restaurants and view Menu', async () => {
        let Restaurant = "'North Street Tavern'";
        await (await browser.$("//a[normalize-space()='Restaurants']")).click();
        await browser.$(`//a[normalize-space()=${Restaurant}]/../../../following-sibling::div//a[@href='dishes.php?res_id=1']`).click();
    })

    it('should get Dish name along with quantity and price', async () => {   
        let Dish = "'Stuffed Jacket Potatoes'";
        DishName = await (await browser.$(`//a[.=${Dish}]`)).getText();
        Price = await (await browser.$(`//a[.=${Dish}]/../../../../following-sibling::div//span`)).getText();
        Quantity = await (await browser.$(`//a[.=${Dish}]/../../../../following-sibling::div//input[@name='quantity']`)).getValue();
        InRestaurants.push(DishName);
        InRestaurants.push(Price);
        InRestaurants.push(Quantity);
    })

    it('should AddToCart Dish along with quantity', async () => {
        let Dish1 = "'Stuffed Jacket Potatoes'";
        addtocart = await browser.$(`//a[.=${Dish1}]/../../../../following-sibling::div//input[@class='btn theme-btn']`);
        await addtocart.scrollIntoView();
        await addtocart.click();
        await (await browser.$("//h3[normalize-space()='Your Cart']")).scrollIntoView();
        await browser.pause(3000);
    })

    it('should get Dish name along with quantity and price in Your Cart', async () => { 
        DishName = await (await browser.$("//div[@class='title-row']")).getText();
        Price = await (await browser.$("//div[@class='title-row']/following-sibling::div//input[@id='exampleSelect1']")).getValue();
        Quantity = await (await browser.$("//div[@class='title-row']/following-sibling::div//input[@id='example-number-input']")).getValue();
        YourCart.push(DishName);
        YourCart.push(Price);
        YourCart.push(Quantity);
    })

    it('should verify both data are same', async () => { 
        for (let index = 0; index < InRestaurants.length; index++) {
            if (InRestaurants[index]==YourCart[index]) {
    console.log(+index+") --->"+InRestaurants[index]+" and "+YourCart[index]+" Both Data are same"); 
            }
        } 
    })

    it('should Checkout the Dish', async () => { 
        await (await browser.$(".btn.btn-success.btn-lg.active")).click();
    })

    it('should Order Now and accept the Alert PopUp', async () => { 
        await (await browser.$("input[value='Order Now']")).click();
        await browser.pause(2000);
        await browser.acceptAlert();
    })

    it('should get Alert Text from Order Confirmation Message', async () => { 
        await browser.pause(2000);
        let order = await browser.getAlertText();
        console.log("Confirmation Message : "+order);
    })

    it('should get Confirm from My Orders', async () => {
        expect(await browser.getTitle()).to.equal('My Orders');     
        await browser.pause(3000);
    })
    it('should Logout from an application as user', async () => {
        await browser.pause(3000);
        await browser.$("//a[normalize-space()='Logout']").click();
        await browser.pause(3000);
    })
})