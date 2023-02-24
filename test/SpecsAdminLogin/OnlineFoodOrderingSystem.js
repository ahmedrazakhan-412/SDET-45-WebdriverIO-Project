import LoginPage from '../OnlineFoodOrderingSystem/Loginpage.js'

describe('My Login application', async() => {
    let DishName
    let Price
    let Quantity
    let addtocart
    let InRestaurants = [];
    let YourCart = [];
    it('should login with valid credentials', async () => {
        await LoginPage.login('ahmedrazakhan412@gmail.com','khan@412');
    })
    it('should select Dish with Restaurants and view Menu', async () => {
        await (await browser.$("//a[normalize-space()='Restaurants']")).click();
        await browser.$("//a[normalize-space()='North Street Tavern']/../../../following-sibling::div//a[@href='dishes.php?res_id=1']").click();
    })
    it('should get Dish name along with quantity and price', async () => {   
        DishName = await (await browser.$("//a[.='Yorkshire Lamb Patties']")).getText();
        Price = await (await browser.$("//a[.='Yorkshire Lamb Patties']/../../../../following-sibling::div//span")).getText();
        Quantity = await (await browser.$("//a[.='Yorkshire Lamb Patties']/../../../../following-sibling::div//input[@name='quantity']")).getValue();
        InRestaurants.push(DishName);
        InRestaurants.push(Price);
        InRestaurants.push(Quantity);
    })
    it('should AddToCart Dish along with quantity', async () => {
        addtocart = await browser.$("//a[.='Yorkshire Lamb Patties']/../../../../following-sibling::div//input[@class='btn theme-btn']");
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
    console.log(+index+"--->"+InRestaurants[index]+" and "+YourCart[index]+" Both Data are same"); 
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
        await expect(browser).toHaveTitleContaining('My Orders');
        await browser.pause(3000);
    })
})