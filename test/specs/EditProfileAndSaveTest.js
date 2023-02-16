import LoginPage from '../pageobjects/login.page.js'
import MyProfile from '../pageobjects/MyProfile.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('admin@gmail.com', '12345');
        await MyProfile.editProfile();
    })
})


