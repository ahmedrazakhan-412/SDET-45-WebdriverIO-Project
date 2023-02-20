import LoginPage from '../POMAdminLogin/Loginpage.js'
import MyProfile from '../POMAdminLogin/MyProfilepage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin@gmail.com','12345');
        await MyProfile.editProfile();
        await LoginPage.signout();
    })
})