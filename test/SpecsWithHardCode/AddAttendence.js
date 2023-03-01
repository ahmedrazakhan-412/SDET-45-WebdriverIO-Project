import { expect } from "chai";

/*Login as admin and Navigate to application and click on attendence 
and Add attendence to Teacher and logout as admin 
and then login has teacher to check attendence is present or not. */

describe('My Login application', () => {

    it('should login as admin with valid credentials', async () => {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Student_Management_System/view/login.php`);
        await browser.pause(2000);
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.$('#email').setValue('admin@gmail.com');
        await browser.$('#password').setValue('12345');
        await browser.$('button[type="submit"]').click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    })
    it('should click on attendence and add attendence to teacher', async () => {
        await browser.$("//span[normalize-space()='Attendance']").click();
        await browser.$("a[href='add_attendance.php']").click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.$("#index_number").setValue("001");
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
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.$('#email').setValue('mdkale@gmail.com');
        await browser.$('#password').setValue('12345');
        await browser.$('button[type="submit"]').click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    })
    it('should signout from an application as teacher', async () => {
        await browser.$('//span[@class="hidden-xs"]').click();
        await browser.pause(3000);
        await browser.$('//a[normalize-space()="Sign out"]').click();
        await browser.pause(3000);
    })
})