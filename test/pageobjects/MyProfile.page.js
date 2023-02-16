import Page from './page.js';
class MyProfile extends Page {
    get Profile () {
        return $('a[href="admin_profile.php"]');
    }
    get EditProfile () {
        return $('a[type="button"]');
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
    get Email () {
        return $('#tdEmail1');
    }
    get PhoneNumber () {
        return $('#tdPhone1');
    }
    get UserName () {
        return $('#User Name');
    }
    get Password () {
        return $('#tdPassword1');
    }
    get FileToUpload () {
        return $('input[id="fileToUpload"]');
    }
    get Update () {
        return $('button[id="btnUpdate"]');
    }
    async editProfile () {
        await this.Profile.click();
        await this.EditProfile.click();
        await this.FullName.setValue("Md Ahmed Raza Khan");
        await this.NameWithInitials.setValue("Mr.");
        await this.Address.setValue("A R Enclave Ground Floor #10,2nd Cross K K Lane Cottonpet Bangalore 560053");
        await this.Email.setValue("ahmedrazakhan412@gmail.com");
        await this.PhoneNumber.setValue("9480196003");
        await this.UserName.setValue("admin@gmail.com");
        await this.Password.setValue("12345");
        await this.FileToUpload.setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto.jpg");
        await this.Update.click();
    }
}

export default new MyProfile();
