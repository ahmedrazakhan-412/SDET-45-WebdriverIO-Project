import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

/*Login as admin and click on teacher and create teacher profile and logout as admin.
And then login has a teacher to check wheather teacher is account is created or not.*/

describe('My Login application', async() => {
    let teacherEmail

    it('should login as admin with valid credentials', async () => {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Student_Management_System/view/login.php`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.$('#email').setValue('admin@gmail.com');
        await browser.$('#password').setValue('12345');
        await browser.$('button[type="submit"]').click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    })
    it('should click on teacher and create teacher profile', async () => {
        let randomNumber = await GenericUtilityPage.randombetween(500,900);
        await browser.$('=Teacher').click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
        await browser.$('a[href="teacher.php"]').click();
        expect(browser).toHaveTitleContaining('Student Management System');
        await browser.$('input[name="index_number"]').setValue("007"+randomNumber);
        await browser.$('input[name="full_name"]').setValue("Shabbir Ali "+randomNumber);
        await browser.$('input[name="i_name"]').setValue("Mr.Shabbir Ali "+randomNumber);
        await browser.$('input[name="address"]').setValue("LBS Nagar Raichur 584101");
        await browser.$('#gender').selectByVisibleText('Male');
        await browser.$('input[name="phone"]').setValue("948-019-6003");
        teacherEmail = "shabbir"+randomNumber+"@gmail.com"
        await browser.$('input[name="email"]').setValue(teacherEmail);
        await browser.$('input[name="fileToUpload"]').setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await browser.pause(3000);
        await browser.$('button[id="btnSubmit"]').scrollIntoView();
        await browser.pause(3000);
        await browser.$('button[id="btnSubmit"]').click();
        await browser.pause(3000);
    })
    it('should signout from an application as admin', async () => {
        await browser.$('//span[@class="hidden-xs"]').click();
        await browser.pause(3000);
        await browser.$('//a[normalize-space()="Sign out"]').click();
        await browser.pause(3000);
    })
    it('should login as teacher with valid credentials', async () => {
        await browser.pause(2000);
        await browser.$('#email').setValue(teacherEmail);
        await browser.$('#password').setValue('12345');
        await browser.$('button[type="submit"]').click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    })
    it('should check wheather teacher details is available or not', async () => {
        await browser.$("//span[normalize-space()='My Profile']").click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.$(".glyphicon.glyphicon-edit").click();
        await browser.pause(3000);
    })
    it('should signout from an application as teacher', async () => {
        await browser.$('//span[@class="hidden-xs"]').click();
        await browser.pause(3000);
        await browser.$('//a[normalize-space()="Sign out"]').click();
        await browser.pause(3000);
    })
})