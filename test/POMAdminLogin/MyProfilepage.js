import { expect } from "chai";

class MyProfileModule {
    
    get Profile_link () {
        return $('a[href="admin_profile.php"]');
    }
    get EditProfile_btn () {
        return $('a[id="btnEdit"]');
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
        return $('#gender2');
    }
    get Email_tf () {
        return $('input[name="email"]');
    }
    get PhoneNumber_tf () {
        return $('input[name="phone"]');
    }
    get Password_tf () {
        return $('input[name="password"]');
    }
    get FileToUpload_btn () {
        return $('input[name="fileToUpload"]');
    }
    get Update_btn () {
        return $('button[id="btnUpdate"]');
    }
    async editProfile () {
        await this.Profile_link.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await this.EditProfile_btn.click();
        await this.FullName_tf.clearValue();
        await this.FullName_tf.setValue("Md Ahmed Raza Khan");
        await this.NameWithInitials_tf.clearValue();
        await this.NameWithInitials_tf.setValue("Mr.Md Ahmed Raza Khan");
        await this.Address_tf.clearValue();
        await this.Address_tf.setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await this.Gender_dp.selectByVisibleText('Male');
        await this.Email_tf.clearValue();
        await this.Email_tf.setValue("admin@gmail.com");
        await this.PhoneNumber_tf.clearValue();
        await this.PhoneNumber_tf.setValue("948-019-6003");
        await this.Password_tf.clearValue();
        await this.Password_tf.setValue("12345");
        // let photo = "G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS JavaScript/Java Script WebdriverIO Project/Photos/MyPhoto.JPG";
        let photo = "../Photos/MyPhoto.JPG"
        await this.FileToUpload_btn.setValue(photo);
        await browser.pause(3000);
        await this.Update_btn.scrollIntoView();
        await browser.pause(3000);
        await this.Update_btn.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    }
}
export default new MyProfileModule();
