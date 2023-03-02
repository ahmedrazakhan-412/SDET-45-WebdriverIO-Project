import { expect } from "chai";

class LoginModule {

    get inputUsername_tf () {
        return $("(//input[@id='email'])[1]");
    }
    get inputPassword_tf () {
        return $("(//input[@id='passwd'])[1]");
    }
    get btnSubmit_btn () {
        return $("button[data-action='login']");
    }
    get btnLogout_img () {
        return $("//button[@data-action='login']");
    }
    get btnSignout_btn () {
        return $('//a[normalize-space()="Sign out"]');
    }
    async login (username,password) {
        await browser.maximizeWindow();
        await browser.url(`https://www.igp.com/login`);
        await browser.pause(2000);
        expect(await browser.getTitle()).to.equal('Log in to IGP | Log In or Sign Up - IGP.com');
        await this.inputUsername_tf.setValue(username);
        await this.inputPassword_tf.setValue(password);
        expect(await this.btnSubmit_btn.isDisplayed()).to.be.true
        await this.btnSubmit_btn.click();
        expect(await browser.getTitle()).to.equal("IGP: India's #1 Online Gift Shop | Send Unique Gifts to India Online");
        await browser.pause(3000);
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
