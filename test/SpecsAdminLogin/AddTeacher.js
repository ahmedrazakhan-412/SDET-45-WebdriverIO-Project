import LoginPage from '../POMAdminLogin/Loginpage.js'
import TeacherPage from '../POMAdminLogin/Teacherpage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin@gmail.com','12345');
        await TeacherPage.addTeacher();
        await LoginPage.signout();
        await LoginPage.login('shoukat@gmail.com','12345');
    })
})