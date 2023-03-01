import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

class ClassroomModule {
    get Classroom_link () {
        return $("//span[normalize-space()='Classroom']");
    }
    get Name_tf () {
        return $("#name");
    }
    get StudentCount_tf () {
        return $("#student_count");
    }
    get btnSubmit_btn () {
        return $("#btnSubmit");
    }
    get allclassroom_table () {
        return $$("//tr[@role='row']/td[2]");
    }
    static classroomwithran="";

    async addClassroom() {
        let randomNumber = await GenericUtilityPage.randombetween(500,900);
        ClassroomModule.classroomwithran = "JavaScript"+randomNumber;
        await this.Classroom_link.click();
        expect(browser).toHaveTitleContaining('Student Management System');
        await this.Name_tf.setValue(ClassroomModule.classroomwithran);
        await this.StudentCount_tf.setValue(12);
        await this.btnSubmit_btn.click();
        await browser.pause(3000);
        await this.Classroom_module.click();
        await browser.pause(3000);
        await browser.scroll(0,500);
        await browser.pause(3000);
    }
    async checkClassroom() {
        await this.Classroom_link.click();
        expect(browser).toHaveTitleContaining('Student Management System');
        await this.allclassroom_table.forEach(async element => {
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
