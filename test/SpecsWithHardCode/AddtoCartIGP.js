/*   IGP: India's #1 Online Gift Shop | Send Unique Gifts to India Online
*/

describe('My Login application', async() => {
    let total
    let totalValue
    let addtocart
    
    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await browser.url(`https://www.igp.com/login`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('Log in to IGP | Log In or Sign Up - IGP.com')
        await browser.$("(//input[@id='email'])[1]").setValue('ahmedrazakhan412@gmail.com');
        await browser.$("(//input[@id='passwd'])[1]").setValue('khan@412');
        await browser.$("button[data-action='login']").click();
        expect(browser).toHaveTitleContaining("IGP: India's #1 Online Gift Shop | Send Unique Gifts to India Online")
        await browser.pause(3000);
    })

    it('should select cake as Brithday Cake', async () => {
        await (await browser.$("(//span[@class='selection-panel-text'][normalize-space()='Cakes'])[1]")).click();
        await browser.$("(//img[@alt='Order Birthday Cake Online'])[2]").click();
        addtocart = await browser.$("//p[normalize-space()='Chocolate Delight Cake (Half Kg)']");
        await addtocart.scrollIntoView();
        await addtocart.click();
        await browser.pause(3000);
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
        expect(browser).toHaveTitleContaining('My Orders');
        await browser.pause(3000);
    })
})