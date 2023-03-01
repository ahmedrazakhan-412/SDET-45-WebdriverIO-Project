
/*Login as admin and Navigate to application and click on Timetable 
and Add Timetable and add Assign to Teacher and logout as admin 
and then login has teacher to check Timetable is present or not. */

describe('My Login application', () => {

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
    it('should click on Timetable and add Timetable and assign to Teacher', async () => {
        await browser.$('//span[normalize-space()="Timetable"]').click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.$('#grade').selectByVisibleText('Grade 1');
        await browser.pause(3000);
        await browser.$("button[class='btn btn-primary']").click();
        await browser.$(".btn.btn-success.btn-sm.pull-right").click();
        await browser.$("#day").selectByVisibleText('Tuesday');
        await browser.$("#subject").selectByVisibleText('WebdriverIO683');
        await browser.$("#teacher").selectByVisibleText('Mr.Shabbir Ali 557');
        await browser.$("#classroom").selectByVisibleText('Class A');
        await browser.$("#start_time").setValue(8);
        await browser.$("#end_time").setValue(9);
        await browser.pause(3000);
        await browser.$("#btnSubmit").click();
        await browser.pause(3000);
        await browser.refresh();
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
    it('should check wheather Timetable is present or not', async () => {
        await browser.$('=Timetable').click()
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.$("a[href='my_timetable2.php']").click();
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