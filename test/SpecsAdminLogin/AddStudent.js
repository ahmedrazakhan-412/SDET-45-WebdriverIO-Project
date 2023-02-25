import LoginPage from '../POMAdminLogin/Loginpage.js'
import Studentpage from '../POMAdminLogin/Studentpage.js'
import ParentLoginPage from '../POMParentLogin/Loginpage.js';
import ParentProfilePage from '../POMParentLogin/MyProfilepage.js';

/*Login as admin and add student along with student and parent details and logout as admin.
And then login has a parent to check wheather student is added or not.*/

describe('My Login application', () => {
    it('should login with valid credentials as Admin', async () => {
        await LoginPage.login('admin@gmail.com','12345');
        await Studentpage.addStudent();
        await LoginPage.signout();
    })
    it('should login with valid credentials as Parent', async () => {
        await ParentLoginPage.login(Studentpage.ranWithEmail,'12345');
        await ParentProfilePage.clickEditMyProfile();
        await ParentLoginPage.signout();
    })
    it('should login with valid credentials as Parent', async () => {
        await ParentLoginPage.login(Studentpage.ranWithEmail,'12345');
        await ParentProfilePage.clickEditMySonProfile();
        await ParentLoginPage.signout();
    })
})