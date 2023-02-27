
class LoginModule {
    get inputUsername () {
        return $('#email');
    }
    get inputPassword () {
        return $('#password');
    }
    get btnSubmit () {
        return $('button[type="submit"]');
    }
    get btnLogout () {
        return $('//span[@class="hidden-xs"]');
    }
    get btnSignout() {
        return $('//a[normalize-space()="Sign out"]');
    }
    async login (username , password) {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Student_Management_System/view/login.php`);
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(2000);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        expect(browser).toHaveTitleContaining('Student Management System')
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
