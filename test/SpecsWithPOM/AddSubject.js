import AdminLoginPage from '../POMAdminLogin/Loginpage.js';
import Subjectpage from '../POMAdminLogin/Subjectpage.js';
import SubjectRoutingpage from '../POMAdminLogin/SubjectRoutingpage.js';
import TeacherLoginPage from '../POMTeacherLogin/Loginpage.js';
import TeacherSubjectPage from '../POMTeacherLogin/Subjectpage.js';

/*Login as admin and Navigate to application and click on subject 
and Add Subject and add that Subject Routing to Teacher and logout as admin.
and then login has teacher to check subject is present or not. */

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await AdminLoginPage.login('admin@gmail.com','12345');
    })
    it('should click on subject and add subject', async () => {
        await Subjectpage.addSubject();
    })
    it('should add same subject to teacher as Subject Routing', async () => {
        await SubjectRoutingpage.addSubjectRouting(Subjectpage.Subjectwithran);
    })
    it('should signout from an application as admin', async () => {
        await AdminLoginPage.signout();
    })
    it('should login as teacher with valid credentials', async () => {
        await TeacherLoginPage.login('shabbir557@gmail.com','12345');
    })
    it('should check wheather same subject is present or not', async () => {
        await TeacherSubjectPage.mySubject(Subjectpage.Subjectwithran);
    })
    it('should signout from an application as teacher', async () => {
        await TeacherLoginPage.signout();
    })
})