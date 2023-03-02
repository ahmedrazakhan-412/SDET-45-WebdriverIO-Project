import { expect } from "chai";

class SubjectRoutingModule {
    
    get SubjectRouting_link () {
        return $('//span[normalize-space()="Subject Routing"]');
    }
    get AddSubjectRouting_link () {
        return $("//a[normalize-space()='Add']");
    }
    get Grade_dp () {
        return $('#grade');
    }
    get Subject_dp () {
        return $("#subject");
    }
    get Teacher_dp () {
        return $("#teacher");
    }
    get Fee_tf () {
        return $("#fee");
    }
    get btnSubmit_btn () {
        return $("#btnSubmit");
    }
    async addSubjectRouting(sub) {
        await this.SubjectRouting_link.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await this.AddSubjectRouting_link.click();
        await this.Grade_dp.selectByVisibleText('Grade 1');
        await this.Subject_dp.selectByVisibleText(sub);
        await this.Teacher_dp.selectByVisibleText('Mr.Shabbir Ali 557');
        await this.Fee_tf.setValue("850");
        await browser.pause(3000);
        await this.btnSubmit_btn.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
    }
}
export default new SubjectRoutingModule();
