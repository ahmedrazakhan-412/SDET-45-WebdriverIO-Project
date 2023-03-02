import { expect } from "chai";

import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

class SubjectModule {
    get Subject_link () {
        return $('=Subject');
    }
    get SubjectName_tf () {
        return $("#name");
    }
    get btnSubmit_btn () {
        return $("button[type='submit']");
    }
    
    Subjectwithran="";

    async addSubject() {
        let randomNumber = await GenericUtilityPage.randombetween(500,900);
        let Subjectwithran2 = "WebdriverIO"+randomNumber;
        this.Subjectwithran=Subjectwithran2;
        await this.Subject_link.click()
        expect(await browser.getTitle()).to.equal('Student Management System');
        await this.SubjectName_tf.setValue(Subjectwithran2);
        await this.btnSubmit_btn.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    }
}
export default new SubjectModule();
