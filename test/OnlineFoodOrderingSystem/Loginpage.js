import { expect } from "chai";

class LoginModule {

    get inputUsername_tf () {
        return $("input[placeholder='Username']");
    }
    get inputPassword_tf () {
        return $("input[placeholder='Password']");
    }
    get btnSubmit_btn () {
        return $("#buttn");
    }
    get btnLogout_img () {
        return $('//span[@class="hidden-xs"]');
    }
    get btnSignout_btn () {
        return $('//a[normalize-space()="Sign out"]');
    }
    async login (username,password) {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Online_Food_Ordering_System/login.php`);
        await browser.pause(2000);
        expect(await browser.getTitle()).to.equal('Login');
        await this.inputUsername_tf.setValue(username);
        await this.inputPassword_tf.setValue(password);
        expect(await this.btnSubmit_btn.isDisplayed()).to.be.true
        await this.btnSubmit_btn.click();
        expect(await browser.getTitle()).to.equal('Login');
        await browser.pause(2000);
    }
    async signout () {
        expect(await this.btnLogout_img.isDisplayed()).to.be.true
        await this.btnLogout_img.click();
        await browser.pause(3000);
        expect(await this.btnSignout_btn.isDisplayed()).to.be.true
        await this.btnSignout_btn.click();
        await browser.pause(3000);
    }
}
export default new LoginModule();
