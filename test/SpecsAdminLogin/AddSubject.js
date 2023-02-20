import AdminLoginPage from '../POMAdminLogin/Loginpage.js';
import Subjectpage from '../POMAdminLogin/Subjectpage.js';
import SubjectRoutingpage from '../POMAdminLogin/SubjectRoutingpage.js';
import TeacherLoginPage from '../POMTeacherLogin/Loginpage.js';
import TeacherSubjectPage from '../POMTeacherLogin/Subjectpage.js';


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await AdminLoginPage.login('admin@gmail.com','12345');
        await Subjectpage.addSubject('WebdriverIO');
        await SubjectRoutingpage.addSubjectRouting('WebdriverIO');
        await AdminLoginPage.signout();
        await TeacherLoginPage.login('imran@gmail.com','12345');
        await TeacherSubjectPage.mySubject();
        await TeacherLoginPage.signout();
    })
})