
class LoginModule {
    get inputUsername () {
        return $("input[name='user_name']");
    }
    get inputPassword () {
        return $("input[name='user_password']");
    }
    get btnSubmit () {
        return $("#submitButton");
    }
    get btnLogout () {
        return $("img[src='themes/softed/images/user.PNG']");
    }
    get btnSignout() {
        return $('//a[normalize-space()="Sign Out"]');
    }
    async login (username,password) {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver:8888/`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        expect(browser).toHaveTitleContaining('Administrator - Home - vtiger CRM 5 - Commercial O')
        await browser.pause(2000);
    }
    async signout () {
        await this.btnLogout.click();
        await browser.pause(2000);
        await this.btnSignout.click();
        await browser.pause(2000);
    }
}
export default new LoginModule();
