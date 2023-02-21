
class LoginModule {
    get inputUsername () {
        return $("(//input[@id='email'])[1]");
    }
    get inputPassword () {
        return $("(//input[@id='passwd'])[1]");
    }
    get btnSubmit () {
        return $("#buttn");
    }
    get btnLogout () {
        return $("//button[@data-action='login']");
    }
    get btnSignout() {
        return $('//a[normalize-space()="Sign out"]');
    }
    async login (username,password) {
        await browser.maximizeWindow();
        await browser.url(`https://www.igp.com/login`);
        await browser.pause(2000);
        await expect(browser).toHaveTitleContaining('Log in to IGP | Log In or Sign Up - IGP.com')
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await expect(browser).toHaveTitleContaining('Online Gifts Delivery: Buy/Send Gifts to India, Un')
        await browser.pause(3000);
    }
    async signout () {
        await this.btnLogout.click();
        await browser.pause(3000);
        await this.btnSignout.click();
        await browser.pause(3000);
    }
}
export default new LoginModule();
