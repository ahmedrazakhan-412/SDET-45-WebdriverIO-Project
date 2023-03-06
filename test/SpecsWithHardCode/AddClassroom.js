import { expect } from "chai";

import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

/*Login as admin and Navigate to application click on classroom. 
and create classroom and check wheather classroom is created or not*/

describe('My Login application', () => {

    let allclassroom_table
    let classroomwithran

    it('should login as admin with valid credentials', async () => {
        // await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Student_Management_System/view/login.php`);
        await browser.pause(2000);
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.$('#email').setValue('admin@gmail.com');
        await browser.$('#password').setValue('12345');
        await browser.$('button[type="submit"]').click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    })

    it('should click on classroom and create classroom', async () => {
        let randomNumber = await GenericUtilityPage.randombetween(500,900);
        await browser.$("//span[normalize-space()='Classroom']").click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        classroomwithran = "JavaScript"+randomNumber;
        await browser.$("#name").setValue(classroomwithran);
        await browser.$("#student_count").setValue(randomNumber);
        await browser.$("#btnSubmit").click();
        await browser.pause(3000);
    })

    it('should check wheather classroom is created or not', async () => {
        await browser.$("//span[normalize-space()='Classroom']").click();
        await browser.scroll(0,500);
        await browser.pause(3000);
        allclassroom_table = await browser.$$("//tr[@role='row']/td[2]");
        allclassroom_table.forEach(async element => {
        let classroom = await element.getText();
        console.log("classrooms----->"+classroom);
        if (classroom == classroomwithran) {
        expect(classroom).to.equal(classroomwithran);
        console.log("The Classroom has been Verfied : "+classroom);
        }
        });
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    })

    it('should signout from an application as admin', async () => {
        await browser.$('//span[@class="hidden-xs"]').click();
        await browser.pause(3000);
        await browser.$('//a[normalize-space()="Sign out"]').click();
        await browser.pause(3000);
    })

})