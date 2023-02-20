import LoginPage from '../POMAdminLogin/Loginpage.js'
import Studentpage from '../POMAdminLogin/Studentpage.js'
import ParentLoginPage from '../POMParentLogin/Loginpage.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin@gmail.com','12345');
        await Studentpage.addStudent();
        await LoginPage.signout();
        await ParentLoginPage.login('mdkaleema@gmail.com','12345');
        await ParentLoginPage.signout();

    })
})