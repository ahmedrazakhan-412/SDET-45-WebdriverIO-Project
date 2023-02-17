
class LoginPage {
    get inputUsername () {
        return $('#email');
    }
    get inputPassword () {
        return $('#password');
    }
    get btnSubmit () {
        return $('button[type="submit"]');
    }
    async login () {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Student_Management_System/view/login.php`);
        await this.inputUsername.setValue('ahmedrazakhan412@gmail.com');
        await this.inputPassword.setValue('12345');
        await this.btnSubmit.click();
    }
}
export default new LoginPage();
