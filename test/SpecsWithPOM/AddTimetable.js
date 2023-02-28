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
    })
    it('should click on Timetable and add Timetable and assign to Teacher', async () => {
        await Timetablepage.addTimetable('Monday','WebdriverIO683','Mr.Shabbir Ali 557','Class A');
    })
    it('should signout from an application as admin', async () => {
        await AdminLoginPage.signout();
    })
    it('should login as teacher with valid credentials', async () => {
        await TeacherLoginPage.login('shabbir557@gmail.com','12345');
    })
    it('should check wheather Timetable is present or not', async () => {
        await TeacherTimetablePage.myTimetable();
    })
    it('should signout from an application as teacher', async () => {
        await TeacherLoginPage.signout();
    })
})