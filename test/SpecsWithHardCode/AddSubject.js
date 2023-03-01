import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

/*Login as admin and Navigate to application and click on subject 
and Add Subject and add that Subject Routing to Teacher and logout as admin.
and then login has teacher to check subject is present or not. */

describe('My Login application', () => {
    let Subject
    let mySubject_table
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
    it('should click on subject and add subject', async () => {
        let randomNumber = await GenericUtilityPage.randombetween(500,900);
        Subject = "WebdriverIO"+randomNumber;
        await browser.$('=Subject').click()
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.$("#name").setValue(Subject);
        await browser.$("button[type='submit']").click();
        await browser.pause(2000);
        await browser.scroll(0,500);
        await browser.pause(3000);
    })
    it('should add same subject to teacher as Subject Routing', async () => {
        await browser.$('//span[normalize-space()="Subject Routing"]').click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.$("//a[normalize-space()='Add']").click();
        await browser.$('#grade').selectByVisibleText('Grade 1');
        await browser.$("#subject").selectByVisibleText(Subject);
        await browser.$("#teacher").selectByVisibleText('Mr.Shabbir Ali 557');
        await browser.$("#fee").setValue("850");
        await browser.pause(3000);
        await browser.$("#btnSubmit").click();
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
        await browser.$('#email').setValue('shabbir557@gmail.com');
        await browser.$('#password').setValue('12345');
        await browser.$('button[type="submit"]').click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    })
    it('should check wheather same subject is present or not', async () => {
        await browser.$('=Subject').click()
        await browser.$("a[href='my_subject2.php']").click();
        mySubject_table = await browser.$$("//tr[@role='row']/td[3]");
        mySubject_table.forEach(async element => {
        let subject = await element.getText();
        console.log("MySubject----->"+subject);
        if (subject == Subject) {
        expect(subject).toStrictEqual(Subject);
        console.log("The Subject has been Verfied : "+subject);
        }
        });
        expect(browser).toHaveTitleContaining('Student Management System');
        await browser.pause(3000);
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    })
    it('should signout from an application as teacher', async () => {
        await browser.$('//span[@class="hidden-xs"]').click();
        await browser.pause(3000);
        await browser.$('//a[normalize-space()="Sign out"]').click();
        await browser.pause(3000);
    })
})