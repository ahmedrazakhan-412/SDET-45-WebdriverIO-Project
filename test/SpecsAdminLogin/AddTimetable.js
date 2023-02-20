import AdminLoginPage from '../POMAdminLogin/Loginpage.js';
import Timetablepage from '../POMAdminLogin/Timetablepage.js';
import TeacherLoginPage from '../POMTeacherLogin/Loginpage.js';
import TeacherTimetablePage from '../POMTeacherLogin/Timetablepage.js';

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