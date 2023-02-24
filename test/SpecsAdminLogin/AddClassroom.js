import LoginPage from '../POMAdminLogin/Loginpage.js'
import Classroompage from '../POMAdminLogin/Classroompage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin@gmail.com','12345');
        await Classroompage.addClassroom("JavaScript",12);
        await LoginPage.signout();
    })
})