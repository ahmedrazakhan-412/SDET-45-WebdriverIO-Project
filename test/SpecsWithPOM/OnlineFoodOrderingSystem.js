import LoginPage from '../OnlineFoodOrderingSystem/Loginpage.js'
import RestaurantPage from '../OnlineFoodOrderingSystem/Restaurants.js'


describe('My Login application', async() => {

    it('should login with valid credentials as user', async () => {
        await LoginPage.login('ahmedrazakhan412@gmail.com','khan@412');
    })

    it('should select Dish with Restaurants and view Menu', async () => {
        await RestaurantPage.Restaurants_viewMenu();
    })

    it('should get Dish name along with quantity and price', async () => {   
        await RestaurantPage.getDishNameFromRestaurants();
    })

    it('should AddToCart Dish along with quantity', async () => {
        await RestaurantPage.AddtocartDish();
    })

    it('should get Dish name along with quantity and price in Your Cart', async () => { 
        await RestaurantPage.getDishNameFromYourCart();
    })

    it('should verify both data are same', async () => { 
        await RestaurantPage.verifyBothData();
    })

    it('should Checkout the Dish', async () => { 
        await RestaurantPage.CheckoutTheDish();
    })

    it('should Order Now and accept the Alert PopUp', async () => { 
        await RestaurantPage.OrderNow();
    })

    it('should get Alert Text from Order Confirmation Message', async () => { 
        await RestaurantPage.getAlertText();
    })

    it('should get Confirm from My Orders', async () => {     
        await RestaurantPage.MyOrders();
    })
    
})