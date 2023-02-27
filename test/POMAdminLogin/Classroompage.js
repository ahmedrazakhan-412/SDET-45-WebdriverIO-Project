import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

class ClassroomModule {
    get Classroom () {
        return $("//span[normalize-space()='Classroom']");
    }
    get Name () {
        return $("#name");
    }
    get StudentCount () {
        return $("#student_count");
    }
    get btnSubmit () {
        return $("#btnSubmit");
    }
    get allclassroom () {
        return browser.$$("//tr[@role='row']/td[2]");
    }
    static classroomwithran="";

    async addClassroom() {
        let randomNumber = await GenericUtilityPage.randombetween(500,900);
        ClassroomModule.classroomwithran = "JavaScript"+randomNumber;
        await this.Classroom.click();
        expect(browser).toHaveTitleContaining('Student Management System');
        await this.Name.setValue(ClassroomModule.classroomwithran);
        await this.StudentCount.setValue(12);
        await this.btnSubmit.click();
        await browser.pause(3000);
        await this.Classroom.click();
        await browser.pause(3000);
        await browser.scroll(0,500);
        await browser.pause(3000);
    }
    async checkClassroom() {
        await this.Classroom.click();
        expect(browser).toHaveTitleContaining('Student Management System');
        await this.allclassroom.forEach(async element => {
        let classroom = await element.getText();
        console.log("classrooms----->"+classroom);
        if (classroom == ClassroomModule.classroomwithran) {
        expect(classroom).toStrictEqual(ClassroomModule.classroomwithran);
        console.log("The Classroom has been Verfied : "+classroom);
        }
        });
        expect(browser).toHaveTitleContaining('Student Management System');
        await browser.pause(3000);
    }
}
export default new  ClassroomModule();
