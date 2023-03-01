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
    get myAllSubject_table() {
        return browser.$$("//tr[@role='row']/td[3]");
    }
    async mySubject(Subject2) {
        await this.Subject_link.click()
        await this.MySubject_link.click();
        await this.myAllSubject_table.forEach(async element => {
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
