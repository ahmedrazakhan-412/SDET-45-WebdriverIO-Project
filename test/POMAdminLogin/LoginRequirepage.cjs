
/* class LoginModule2 {
    a = 50;
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
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('Student Management System')
        await this.inputUsername_tf.setValue(username);
        await this.inputPassword_tf.setValue(password);
        await this.btnSubmit_btn.click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    }
    async signout () {
        await this.btnLogout_img.click();
        await browser.pause(3000);
        await this.btnSignout_btn.click();
        await browser.pause(3000);
    }
}

let LoginRequirepage = new LoginModule2();
module.exports = LoginRequirepage; */
