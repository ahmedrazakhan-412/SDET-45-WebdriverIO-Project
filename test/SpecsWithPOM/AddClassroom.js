import LoginPage from '../POMAdminLogin/Loginpage.js'
import Classroompage from '../POMAdminLogin/Classroompage.js'

/*Login as admin and Navigate to application click on classroom. 
and create classroom and check wheather classroom is created or not*/

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('admin@gmail.com','12345');
    })
    it('should click on classroom and create classroom', async () => {
        await Classroompage.addClassroom();
    })
    it('should check wheather classroom is created or not', async () => {
        await Classroompage.checkClassroom();
    })
    it('should signout from an application as admin', async () => {
        await LoginPage.signout();
    })
})