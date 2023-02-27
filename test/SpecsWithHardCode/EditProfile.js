
/* Login as admin and Navigate to application click on MyProfile 
and click on edit button and enter all details and click on update and save the details and Logout.*/

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
    it('should click on MyProfile and enter all details and save', async () => {
        await browser.$('a[href="admin_profile.php"]').click();
        expect(browser).toHaveTitleContaining('Student Management System');
        await browser.$('a[id="btnEdit"]').click();
        await browser.$('input[name="full_name"]').clearValue();
        await browser.$('input[name="full_name"]').setValue("Md Ahmed Raza Khan");
        await browser.$('input[name="i_name"]').clearValue();
        await browser.$('input[name="i_name"]').setValue("Mr.Md Ahmed Raza Khan");
        await browser.$('input[name="address"]').clearValue();
        await browser.$('input[name="address"]').setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await browser.$('#gender2').selectByVisibleText('Male');
        await browser.$('input[name="email"]').clearValue();
        await browser.$('input[name="email"]').setValue("admin@gmail.com");
        await browser.$('input[name="phone"]').clearValue();
        await browser.$('input[name="phone"]').setValue("948-019-6003");
        await browser.$('input[name="password"]').clearValue();
        await browser.$('input[name="password"]').setValue("12345");
        let photo = "G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS JavaScript/Java Script WebdriverIO Project/Photos/MyPhoto.JPG";
        await browser.$('input[name="fileToUpload"]').setValue(photo);
        await browser.pause(3000);
        await browser.$('button[id="btnUpdate"]').scrollIntoView();
        await browser.pause(3000);
        await browser.$('button[id="btnUpdate"]').click();
        await browser.pause(3000);
    })
    it('should check wheather Profile is updated or not', async () => {
        await browser.url(`http://testingserver/domain/Student_Management_System/view/login.php`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.$('#email').setValue('admin@gmail.com');
        await browser.$('#password').setValue('12345');
        await browser.$('button[type="submit"]').click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
        await browser.$('a[href="admin_profile.php"]').click();
        expect(browser).toHaveTitleContaining('Student Management System');

    })
    it('should signout from an application as admin', async () => {
        await browser.$('//span[@class="hidden-xs"]').click();
        await browser.pause(3000);
        await browser.$('//a[normalize-space()="Sign out"]').click();
        await browser.pause(3000);
    })
})