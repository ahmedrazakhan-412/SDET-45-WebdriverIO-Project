import { expect } from "chai";

class LoginModule {

    get inputUsername_tf () {
        return $("input[name='user_name']");
    }
    get inputPassword_tf () {
        return $("input[name='user_password']");
    }
    get btnSubmit_btn () {
        return $("#submitButton");
    }
    get btnLogout_img () {
        return $("img[src='themes/softed/images/user.PNG']");
    }
    get btnSignout_btn () {
        return $('//a[normalize-space()="Sign Out"]');
    }
    async login (username,password) {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver:8888/`);
        await browser.pause(2000);
        expect(await browser.getTitle()).to.equal('vtiger CRM 5 - Commercial Open Source CRM');
        await this.inputUsername_tf.setValue(username);
        await this.inputPassword_tf.setValue(password);
        await this.btnSubmit_btn.click();
        expect(await browser.getTitle()).to.equal('Administrator - Home - vtiger CRM 5 - Commercial O');
        await browser.pause(2000);
    }
    async signout () {
        await this.btnLogout_img.click();
        await browser.pause(2000);
        await this.btnSignout_btn.click();
        await browser.pause(2000);
    }
}
export default new LoginModule();
