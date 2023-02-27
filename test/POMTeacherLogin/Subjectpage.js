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
    get mySubject () {
        return browser.$$("//tr[@role='row']/td[3]");
    }
    async mySubject() {
        await this.Subject.click()
        await this.MySubject.click();
        await this.mySubject.forEach(async element => {
        let subject = await element.getText();
        console.log("MySubject----->"+subject);
        if (subject == Subject) {
        expect(subject).toStrictEqual(Subject);
        console.log("The Subject has been Verfied : "+subject);
        }
        });
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    }
}
export default new SubjectModule();
