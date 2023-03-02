import { expect } from "chai";

class RestaurantsModule {

    Restaurant = "'North Street Tavern'";
    Dish = "'Stuffed Jacket Potatoes'";
    InRestaurants = [];
    YourCart = [];

    get Restaurants_link () {
        return $("//a[normalize-space()='Restaurants']");
    }
    get ViewMenu_btn () {
        return $("//a[normalize-space()="+this.Restaurant+"]/../../../following-sibling::div//a[@href='dishes.php?res_id=1']");
    }
    get DishName_text () {
        return $("//a[.="+this.Dish+"]");
    }
    get Price_text () {
        return $("//a[.="+this.Dish+"]/../../../../following-sibling::div//span");
    }
    get Quantity_text () {
        return $("//a[.="+this.Dish+"]/../../../../following-sibling::div//input[@name='quantity']");
    }
    get Addtocart_btn () {
        return $("//a[.="+this.Dish+"]/../../../../following-sibling::div//input[@class='btn theme-btn']");
    }
    get YourCart_link () {
        return $("//h3[normalize-space()='Your Cart']");
    }
    get YourCartDishName_text () {
        return $("//div[@class='title-row']");
    }
    get YourCartPrice_text () {
        return $("//div[@class='title-row']/following-sibling::div//input[@id='exampleSelect1']");
    }
    get YourCartQuantity_text () {
        return $("//div[@class='title-row']/following-sibling::div//input[@id='example-number-input']");
    }
    get Checkout_btn () {
        return $(".btn.btn-success.btn-lg.active");
    }
    get OrderNow_btn () {
        return $("input[value='Order Now']");
    }

    async Restaurants_viewMenu () {
        await this.Restaurants_link.click();
        expect(await browser.getTitle()).to.equal('Restaurants');
        await this.ViewMenu_btn.click();
        expect(await browser.getTitle()).to.equal('Dishes');
        await browser.pause(2000);
    }
    async getDishNameFromRestaurants () {
        let DishName = await this.DishName_text.getText();
        let Price = await this.Price_text.getText();
        let Quantity = await this.Quantity_text.getValue();
        this.InRestaurants.push(DishName);
        this.InRestaurants.push(Price);
        this.InRestaurants.push(Quantity);
        await browser.pause(2000);
    }
    async AddtocartDish () {
        await this.Addtocart_btn.scrollIntoView();
        await this.Addtocart_btn.click();
        await this.YourCart_link.scrollIntoView();
        await browser.pause(2000);
    }
    async getDishNameFromYourCart () {
        let DishName = await this.YourCartDishName_text.getText();
        let Price = await this.YourCartPrice_text.getValue();
        let Quantity = await this.YourCartQuantity_text.getValue();
        this.YourCart.push(DishName);
        this.YourCart.push(Price);
        this.YourCart.push(Quantity);
        await browser.pause(2000);
    }
    async verifyBothData () {
        for (let index = 0; index < this.InRestaurants.length; index++) {
        if (this.InRestaurants[index]==this.YourCart[index]) {
        console.log(+index+"--->"+this.InRestaurants[index]+" and "+this.YourCart[index]+" Both Data are same"); 
            }
        } 
    }
    async CheckoutTheDish () {
        expect(await this.Checkout_btn.isDisplayed()).to.be.true
        await this.Checkout_btn.click();
        await browser.pause(2000);
    }
    async OrderNow () {
        await this.OrderNow_btn.click();
        await browser.pause(2000);
        await browser.acceptAlert();
    }
    async getAlertText () {
        await browser.pause(2000);
        let order = await browser.getAlertText();
        console.log("Confirmation Message : "+order);
    }
    async MyOrders () {
        expect(await browser.getTitle()).to.equal('My Orders');
        await browser.pause(2000);
    }
}
export default new RestaurantsModule();
