import LoginPage from '../pageobjects/loginpage.js'
import TeacherPage from '../pageobjects/Teacherpage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login();
        await TeacherPage.addTeacher();
    })
})