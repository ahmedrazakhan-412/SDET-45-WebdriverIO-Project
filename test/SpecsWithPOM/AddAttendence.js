import LoginPage from '../POMAdminLogin/Loginpage.js'
import Attendencepage from '../POMAdminLogin/Attendencepage.js'
import TeacherLoginPage from '../POMTeacherLogin/Loginpage.js';

/*Login as admin and Navigate to application and click on attendence 
and Add attendence to Teacher and logout as admin 
and then login has teacher to check attendence is present or not. */

describe('My Login application', () => {

   it('should login with valid credentials as Admin', async () => {
        await LoginPage.login('admin@gmail.com','12345');
    })
    it('should click on attendence and add attendence to teacher', async () => {
        await Attendencepage.addAttendence("007557");
    }) 
    it('should signout from an application as admin', async () => {
        await LoginPage.signout();
    }) 
    it('should login as teacher with valid credentials', async () => {
        await TeacherLoginPage.login('shabbir557@gmail.com','12345');
    }) 
    it('should signout from an application as teacher', async () => {
        await TeacherLoginPage.signout();
    }) 
})