
class LoginModule {
    get inputUsername () {
        return $("input[placeholder='Username']");
    }
    get inputPassword () {
        return $("input[placeholder='Password']");
    }
    get btnSubmit () {
        return $("#buttn");
    }
    get btnLogout () {
        return $('//span[@class="hidden-xs"]');
    }
    get btnSignout() {
        return $('//a[normalize-space()="Sign out"]');
    }
    async login (username,password) {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Online_Food_Ordering_System/login.php`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('Login')
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        // expect(browser).toHaveTitleContaining('Home')
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
