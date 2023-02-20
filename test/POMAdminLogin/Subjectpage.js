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
    async addSubject(Subject) {
        await this.Subject.click()
        await expect(browser).toHaveTitleContaining('Student Management System')
        await this.SubjectName.setValue(Subject);
        await this.btnSubmit.click();
        await browser.pause(3000);
    }
}
export default new SubjectModule();
