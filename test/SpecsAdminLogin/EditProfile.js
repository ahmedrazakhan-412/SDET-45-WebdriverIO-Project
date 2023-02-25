import LoginPage from '../POMAdminLogin/Loginpage.js'
import MyProfile from '../POMAdminLogin/MyProfilepage.js'

/* Login as admin and Navigate to application click on MyProfile 
and click on edit button and enter all details and click on update and save the details and Logout.*/

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin@gmail.com','12345');
        await MyProfile.editProfile();
        await LoginPage.signout();
    })
})