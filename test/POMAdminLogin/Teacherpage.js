import { expect } from "chai";

import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

class TeacherModule {
    
    get Teacher_link () {
        return $('=Teacher');
    }
    get AddTeacher_link () {
        return $('a[href="teacher.php"]');
    }
    get IndexNumber_tf () {
        return $('input[name="index_number"]');
    }
    get FullName_tf () {
        return $('input[name="full_name"]');
    }
    get NameWithInitials_tf () {
        return $('input[name="i_name"]');
    }
    get Address_tf () {
        return $('input[name="address"]');
    }
    get Gender_dp () {
        return $('#gender');
    }
    get PhoneNumber_tf () {
        return $('input[name="phone"]');
    }
    get Email_tf () {
        return $('input[name="email"]');
    }
    get FileToUpload_btn () {
        return $('input[name="fileToUpload"]');
    }
    get Submit_btn () {
        return $('button[id="btnSubmit"]');
    }
    ranWithEmail="";
    async addTeacher () {
        let ran = await GenericUtilityPage.randombetween(10,200);
        await this.Teacher_link.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
        await this.AddTeacher_link.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await this.IndexNumber_tf.setValue("007"+ran);
        await this.FullName_tf.setValue("Shabbir Ali "+ran);
        await this.NameWithInitials_tf.setValue("Mr.Shabbir Ali "+ran);
        await this.Address_tf.setValue("LBS Nagar Raichur 584101");
        await this.Gender_dp.selectByVisibleText('Male');
        await this.PhoneNumber_tf.setValue("948-019-6003");
        let email = "shabbir"+ran+"@gmail.com"
        await this.Email_tf.setValue(email);
        this.ranWithEmail=email;
        await this.FileToUpload_btn.setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await browser.pause(3000);
        await this.Submit_btn.scrollIntoView();
        await browser.pause(3000);
        await this.Submit_btn.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    }
}
export default new TeacherModule();
