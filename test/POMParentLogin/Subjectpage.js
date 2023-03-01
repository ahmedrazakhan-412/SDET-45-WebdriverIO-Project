class SubjectModule {
    get Subject_link () {
        return $('=Subject');
    }
    get MySubject_link () {
        return $("a[href='my_subject2.php']");
    }
    get AllSubject_link () {
        return $("a[href='all_subject2.php']");
    }
    async mySubject() {
        await this.Subject_link.click()
        await this.MySubject_link.click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    }
}
export default new SubjectModule();
