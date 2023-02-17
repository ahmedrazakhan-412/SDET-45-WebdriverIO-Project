import LoginPage from '../pageobjects/loginpage.js'
import MyProfile from '../pageobjects/MyProfilepage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login();
        await MyProfile.editProfile();
    })
})