import LoginPage from '../POMAdminLogin/Loginpage.js'
import Classroompage from '../POMAdminLogin/Classroompage.js'

/*Login as admin and Navigate to application click on classroom. 
and create classroom and check wheather classroom is created or not*/

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin@gmail.com','12345');
        await Classroompage.addClassroom("JavaScript",12);
        await LoginPage.signout();
    })
})