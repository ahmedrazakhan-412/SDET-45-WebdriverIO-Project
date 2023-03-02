import { expect } from "chai";

import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

class StudentModule {

    get Student_link () {
        return $("//span[normalize-space()='Student']");
    }
    get AddStudent_link () {
        return $("a[href='student.php']");
    }

    //Student Details

    get IndexNumber_tf () {
        return $("#index_number");
    }
    get FullName_tf () {
        return $("#full_name");
    }
    get NameWithInitials_tf () {
        return $("#i_name");
    }
    get Address_tf () {
        return $("#address");
    }
    get Email_tf () {
        return $("#email");
    }
    get PhoneNumber_tf () {
        return $("#phone");
    }
    get DateofBirth_tf () {
        return $("#b_date");
    }
    get Gender_dp () {
        return $("#gender");
    }
    get FileToUpload_btn () {
        return $("#fileToUpload");
    }

    //Guardian Details Details
    
    get GuardianIndexNumber_tf () {
        return $("#g_index");
    }
    get GuardianFullName_tf () {
        return $("#g_full_name");
    }
    get GuardianNameWithInitials_tf () {
        return $("#g_i_name");
    }
    get GuardianAddress_tf () {
        return $("#g_address");
    }
    get GuardianEmail_tf () {
        return $("#g_email");
    }
    get GuardianPhoneNumber_tf () {
        return $("#g_phone");
    }
    get GuardianDateofBirth_tf () {
        return $("#g_b_date");
    }
    get GuardianGender_dp () {
        return $("#g_gender");
    }
    get GuardianFileToUpload_btn () {
        return $("#g_fileToUpload");
    }
    get Update_btn () {
        return $("#btnSubmit");
    }
    get Grade_btn () {
        return $('#grade');
    }
    get AddStudentSubject_cb () {
        return  browser.$$("//input[@id='checkbox']");
    }
    get Submit_btn () {
        return $("#btnSubmit1");
    }
    get Paid_btn () {
        return $("//div[@id='msk123456']//button[@id='btnSubmit1']");
    }
    ranWithEmail="";
    
    async addStudent () {
        await this.Student_link.scrollIntoView();
        await this.Student_link.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        let ran = await GenericUtilityPage.randombetween(500,900);
        await browser.pause(2000);
        await this.AddStudent_link.click();
        expect(await browser.getTitle()).to.equal('Student Management System');

        // Student Details

        await this.IndexNumber_tf.setValue("00"+ran);
        await this.FullName_tf.setValue("Md Mustaq Student "+ran);
        await this.NameWithInitials_tf.setValue("Mr.Md Mustaq Student "+ran);
        await this.Address_tf.setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await this.Gender_dp.selectByVisibleText('Male');
        let studentEmail = "mustaq"+ran+"@gmail.com"
        await this.Email_tf.setValue(studentEmail);
        await this.DateofBirth_tf.setValue("22-10-1992");
        await this.PhoneNumber_tf.setValue("948-019-6003");
        await this.FileToUpload_btn.setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await browser.pause(3000);

        // Guardian Details 

        await this.GuardianFullName_tf.setValue("Md Kaleem Parent "+ran);
        await this.GuardianNameWithInitials_tf.setValue("Mr.Md Kaleem Parent "+ran);
        await this.GuardianAddress_tf.setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await this.GuardianGender_dp.selectByVisibleText('Male');
        let parentEmail = "kaleem"+ran+"@gmail.com"
        await this.GuardianEmail_tf.setValue(parentEmail);
        this.ranWithEmail=parentEmail;
        await this.GuardianDateofBirth_tf.setValue("22-10-1957");
        await this.GuardianPhoneNumber_tf.setValue("948-019-6003");
        await this.GuardianFileToUpload_btn.setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await this.Update_btn.scrollIntoView();
        await browser.pause(3000);
        await this.Update_btn.click();
        await browser.pause(2000);
        await this.Grade_btn.selectByVisibleText('Grade 1');
        await browser.pause(2000);
        this.AddStudentSubject_cb.forEach(async element => {
        await element.click();
        });
        await browser.pause(3000);
        await this.Submit_btn.click();
        await this.Paid_btn.click();
    }
}
export default new StudentModule();
