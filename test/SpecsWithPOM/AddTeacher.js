import LoginPage from '../POMAdminLogin/Loginpage.js'
import TeacherPage from '../POMAdminLogin/Teacherpage.js'
import TeacherLoginPage from '../POMTeacherLogin/Loginpage.js';
import TeacherProfilePage from '../POMTeacherLogin/MyProfilepage.js';

/*Login as admin and click on teacher and create teacher profile and logout as admin.
And then login has a teacher to check wheather teacher is account is created or not.*/

describe('My Login application', async() => {
    
    it('should login with valid credentials as Admin', async () => {
        await LoginPage.login('admin@gmail.com','12345');
    })  
    it('should click on teacher and create teacher profile', async () => {
        await TeacherPage.addTeacher();
    })
    it('should signout from an application as admin', async () => {
        await LoginPage.signout();
    })
    it('should login as teacher with valid credentials', async () => {
        await TeacherLoginPage.login(TeacherPage.ranWithEmail,'12345');
    })
    it('should check wheather teacher details is available or not', async () => {
        await TeacherProfilePage.clickEditProfile();
    })
    it('should signout from an application as teacher', async () => {
        await TeacherLoginPage.signout();
    })
})