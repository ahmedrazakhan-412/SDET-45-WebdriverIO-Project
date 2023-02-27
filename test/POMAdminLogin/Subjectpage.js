import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

class SubjectModule {
    get Subject () {
        return $('=Subject');
    }
    get SubjectName () {
        return $("#name");
    }
    get btnSubmit () {
        return $("button[type='submit']");
    }
    Subject="";
    async addSubject() {
        let randomNumber = await GenericUtilityPage.randombetween(500,900);
        this.Subject = "WebdriverIO"+randomNumber;
        await this.Subject.click()
        expect(browser).toHaveTitleContaining('Student Management System')
        await this.SubjectName.setValue(Subject);
        await this.btnSubmit.click();
        await browser.pause(3000);
    }
}
export default new SubjectModule();
