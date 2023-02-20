class SubjectRoutingModule {
    get SubjectRouting () {
        return $('//span[normalize-space()="Subject Routing"]');
    }
    get AddSubjectRouting () {
        return $("//a[normalize-space()='Add']");
    }
    get Grade () {
        return $('#grade');
    }
    get Subject () {
        return $("#subject");
    }
    get Teacher () {
        return $("#teacher");
    }
    get Fee () {
        return $("#fee");
    }
    get btnSubmit () {
        return $("#btnSubmit");
    }
    async addSubjectRouting(sub) {
        await this.SubjectRouting.click();
        await expect(browser).toHaveTitleContaining('Student Management System')
        await this.AddSubjectRouting.click();
        await this.Grade.selectByVisibleText('Grade 1');
        await this.Subject.selectByVisibleText(sub);
        await this.Teacher.selectByVisibleText('Mr.Imran Ahmed');
        await this.Fee.setValue("850");
        await browser.pause(3000);
        await this.btnSubmit.click();
        await browser.pause(3000);
    }
}
export default new SubjectRoutingModule();
