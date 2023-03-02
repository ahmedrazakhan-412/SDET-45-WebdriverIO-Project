import { expect } from "chai";

class LoginModule {
    
    get inputUsername_tf () {
        return $('#email');
    }
    get inputPassword_tf () {
        return $('#password');
    }
    get btnSubmit_btn () {
        return $('button[type="submit"]');
    }
    get btnLogout_img () {
        return $('//span[@class="hidden-xs"]');
    }
    get btnSignout_btn () {
        return $('//a[normalize-space()="Sign out"]');
    }
    async login (username,password) {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Student_Management_System/view/login.php`);
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(2000);
        await this.inputUsername_tf.setValue(username);
        await this.inputPassword_tf.setValue(password);
        await this.btnSubmit_btn.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    }
    async signout () {
        await this.btnLogout_img.click();
        await browser.pause(3000);
        await this.btnSignout_btn.click();
        await browser.pause(3000);
    }
}
export default new LoginModule();
