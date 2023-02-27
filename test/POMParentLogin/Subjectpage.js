class SubjectModule {
    get Subject () {
        return $('=Subject');
    }
    get MySubject () {
        return $("a[href='my_subject2.php']");
    }
    get AllSubject () {
        return $("a[href='all_subject2.php']");
    }
    async mySubject() {
        await this.Subject.click()
        await this.MySubject.click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    }
}
export default new SubjectModule();
