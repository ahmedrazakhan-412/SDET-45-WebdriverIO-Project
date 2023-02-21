import LoginPage from '../POMAdminLogin/Loginpage.js'
import TeacherPage from '../POMAdminLogin/Teacherpage.js'
import TeacherLoginPage from '../POMTeacherLogin/Loginpage.js';
import TeacherProfilePage from '../POMTeacherLogin/MyProfilepage.js';

describe('My Login application', async() => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin@gmail.com','12345');
        await TeacherPage.addTeacher();
        await LoginPage.signout();
        await TeacherLoginPage.login(TeacherPage.ranWithEmail,'12345');
        await TeacherProfilePage.clickEditProfile();
        await TeacherLoginPage.signout();
    })
})