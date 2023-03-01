
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
        expect(browser).toHaveTitleContaining('Login')
        await this.inputUsername_tf.setValue(username);
        await this.inputPassword_tf.setValue(password);
        await this.btnSubmit_btn.click();
        // expect(browser).toHaveTitleContaining('Home')
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
