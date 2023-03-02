import LoginPage from '../POMAdminLogin/Loginpage.js'
import MyProfile from '../POMAdminLogin/MyProfilepage.js'

/* Login as admin and Navigate to application click on MyProfile 
and click on edit button and enter all details and click on update and save the details and Logout.*/

describe('My Login application', () => {

   it('should login with valid credentials as Admin', async () => {
        await LoginPage.login('admin@gmail.com','12345');
    }) 
    it('should click on MyProfile and enter all details and save', async () => {
        await MyProfile.editProfile();
    })
    it('should signout from an application as admin', async () => {
        await LoginPage.signout();
    })
})