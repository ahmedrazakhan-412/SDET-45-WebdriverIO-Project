import LoginPage from '../POMAdminLogin/Loginpage.js'
import Studentpage from '../POMAdminLogin/Studentpage.js'
import ParentLoginPage from '../POMParentLogin/Loginpage.js';
import ParentProfilePage from '../POMParentLogin/MyProfilepage.js';

/*Login as admin and add student along with student and parent details and logout as admin.
And then login has a parent to check wheather student is added or not.*/

describe('My Login application', () => {
    it('should login with valid credentials as Admin', async () => {
        await LoginPage.login('admin@gmail.com','12345');
    })
    it('should click on student and add student along with student and parent details', async () => {
        await Studentpage.addStudent();
    })
    it('should signout from an application as admin', async () => {
        await LoginPage.signout();
    })
    it('should login as parent with valid credentials', async () => {
        await ParentLoginPage.login(Studentpage.ranWithEmail,'12345');
    })
    it('should check wheather parent details is available or not', async () => {
        await ParentProfilePage.clickEditMyProfile();
    })
    it('should check wheather student details is added or not', async () => {
        await ParentProfilePage.clickEditMySonProfile();
    })
    it('should signout from an application as parent', async () => {
        await ParentLoginPage.signout();
    })
})