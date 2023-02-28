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
    get myAllSubject () {
        return browser.$$("//tr[@role='row']/td[3]");
    }
    async mySubject(Subject2) {
        await this.Subject.click()
        await this.MySubject.click();
        await this.myAllSubject.forEach(async element => {
        let subject1 = await element.getText();
        console.log("MySubject----->"+subject1);
        if (subject1 == Subject2) {
        expect(subject1).toStrictEqual(Subject2);
        console.log("The Subject has been Verfied : "+subject1);
        }
        });
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    }
}
export default new SubjectModule();
