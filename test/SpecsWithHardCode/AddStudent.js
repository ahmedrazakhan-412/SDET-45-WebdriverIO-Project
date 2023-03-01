import { expect } from "chai";


import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

/*Login as admin and add student along with student and parent details and logout as admin.
And then login has a parent to check wheather student is added or not.*/

describe('My Login application', () => {
    let parentEmail
    
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
    it('should click on student and add student along with student and parent details', async () => {
        let randomNumber = await GenericUtilityPage.randombetween(500,900);
        await browser.$("//span[normalize-space()='Student']").scrollIntoView();
        await browser.$("//span[normalize-space()='Student']").click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(2000);
        await browser.$("a[href='student.php']").click();

        // Student Details
        await browser.$("#index_number").setValue("00"+randomNumber);
        await browser.$("#full_name").setValue("Md Mustaq Student "+randomNumber);
        await browser.$("#i_name").setValue("Mr.Md Mustaq Student "+randomNumber);
        await browser.$("#address").setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await browser.$("#gender").selectByVisibleText('Male');
        let studentEmail = "mustaq"+randomNumber+"@gmail.com"
        await browser.$("#email").setValue(studentEmail);
        await browser.$("#b_date").setValue("22-10-1992");
        await browser.$("#phone").setValue("948-019-6003");
        await browser.$("#fileToUpload").setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await browser.pause(3000);

        // Guardian Details 

        await browser.$("#g_full_name").setValue("Md Kaleem Parent "+randomNumber);
        await browser.$("#g_i_name").setValue("Mr.Md Kaleem Parent "+randomNumber);
        await browser.$("#g_address").setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await browser.$("#g_gender").selectByVisibleText('Male');
        parentEmail = "kaleem"+randomNumber+"@gmail.com"
        await browser.$("#g_email").setValue(parentEmail);
        await browser.$("#g_b_date").setValue("22-10-1957");
        await browser.$("#g_phone").setValue("948-019-6003");
        await browser.$("#g_fileToUpload").setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await browser.$("#btnSubmit").scrollIntoView();
        await browser.pause(3000);
        await browser.$("#btnSubmit").click();
        await browser.pause(2000);
        await browser.$('#grade').selectByVisibleText('Grade 1');
        await browser.pause(2000);
        browser.$$("//input[@id='checkbox']").forEach(async element => {
        await element.click();
        });
        await browser.pause(3000);
        await browser.$("#btnSubmit1").click();
        await browser.$("//div[@id='msk123456']//button[@id='btnSubmit1']").click();
        await browser.pause(3000);
    })
    it('should signout from an application as admin', async () => {
        await browser.$('//span[@class="hidden-xs"]').click();
        await browser.pause(3000);
        await browser.$('//a[normalize-space()="Sign out"]').click();
        await browser.pause(3000);
    })
    it('should login as parent with valid credentials', async () => {
        await browser.pause(2000);
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.$('#email').setValue(parentEmail);
        await browser.$('#password').setValue('12345');
        await browser.$('button[type="submit"]').click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    })
    it('should check wheather parent details is available or not', async () => {
        await browser.$("//span[normalize-space()='Profile']").click();
        await browser.$("a[href='parents_profile.php']").click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.$(".glyphicon.glyphicon-edit").scrollIntoView();
        await browser.$(".glyphicon.glyphicon-edit").click();
        await browser.pause(3000);
    })
    it('should check wheather student details is added or not', async () => {
        await browser.$("//span[normalize-space()='Profile']").click();
        await browser.$("a[href='my_sons_profile.php']").click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    })
    it('should signout from an application as parent', async () => {
        await browser.$('//span[@class="hidden-xs"]').click();
        await browser.pause(3000);
        await browser.$('//a[normalize-space()="Sign out"]').click();
        await browser.pause(3000);
    })
})