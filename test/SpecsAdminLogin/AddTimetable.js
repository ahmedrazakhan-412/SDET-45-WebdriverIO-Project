import AdminLoginPage from '../POMAdminLogin/Loginpage.js';
import Timetablepage from '../POMAdminLogin/Timetablepage.js';
import TeacherLoginPage from '../POMTeacherLogin/Loginpage.js';
import TeacherTimetablePage from '../POMTeacherLogin/Timetablepage.js';

/*Login as admin and Navigate to application and click on Timetable 
and Add Timetable and add Assign to Teacher and logout as admin 
and then login has teacher to check Timetable is present or not. */

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await AdminLoginPage.login('admin@gmail.com','12345');
        await Timetablepage.addTimetable('Tuesday','WebdriverIO','Mr.Imran Ahmed','Class A');
        await AdminLoginPage.signout();
        await TeacherLoginPage.login('imran@gmail.com','12345');
        await TeacherTimetablePage.myTimetable();
        await TeacherLoginPage.signout();
    })
})