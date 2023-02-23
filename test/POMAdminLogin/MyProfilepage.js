
class MyProfileModule {
    get Profile () {
        return $('a[href="admin_profile.php"]');
    }
    get EditProfile () {
        return $('a[id="btnEdit"]');
    }
    get FullName () {
        return $('input[name="full_name"]');
    }
    get NameWithInitials () {
        return $('input[name="i_name"]');
    }
    get Address () {
        return $('input[name="address"]');
    }
    get Gender () {
        return $('#gender2');
    }
    get Email () {
        return $('input[name="email"]');
    }
    get PhoneNumber () {
        return $('input[name="phone"]');
    }
    get Password () {
        return $('input[name="password"]');
    }
    get FileToUpload () {
        return $('input[name="fileToUpload"]');
    }
    get Update () {
        return $('button[id="btnUpdate"]');
    }
    async editProfile () {
        await this.Profile.click();
        await expect(browser).toHaveTitleContaining('Student Management System')
        await this.EditProfile.click();
        await this.FullName.clearValue();
        await this.FullName.setValue("Md Ahmed Raza Khan");
        await this.NameWithInitials.clearValue();
        await this.NameWithInitials.setValue("Mr.Md Ahmed Raza Khan");
        await this.Address.clearValue();
        await this.Address.setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await this.Gender.selectByVisibleText('Male');
        await this.Email.clearValue();
        await this.Email.setValue("admin@gmail.com");
        await this.PhoneNumber.clearValue();
        await this.PhoneNumber.setValue("948-019-6003");
        await this.Password.clearValue();
        await this.Password.setValue("12345");
        // let photo = "G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS JavaScript/Java Script WebdriverIO Project/Photos/MyPhoto.JPG";
        let photo = "../Photos/MyPhoto.JPG"
        await this.FileToUpload.setValue(photo);
        await browser.pause(3000);
        await this.Update.scrollIntoView();
        await browser.pause(3000);
        await this.Update.click();
        await browser.pause(3000);
    }
}
export default new MyProfileModule();
