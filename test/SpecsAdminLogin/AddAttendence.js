import LoginPage from '../POMAdminLogin/Loginpage.js'
import Attendencepage from '../POMAdminLogin/Attendencepage.js'
import TeacherLoginPage from '../POMTeacherLogin/Loginpage.js';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin@gmail.com','12345');
        await Attendencepage.addAttendence("001");
        await LoginPage.signout();
        await TeacherLoginPage.login('mdkale@gmail.com','12345');
        await TeacherLoginPage.signout();

    })
})