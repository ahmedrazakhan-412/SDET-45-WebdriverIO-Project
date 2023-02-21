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
    async addClassroom(classroomname,Count) {
        await this.Classroom.click();
        await expect(browser).toHaveTitleContaining('Student Management System');
        await this.Name.setValue(classroomname);
        await this.StudentCount.setValue(Count);
        await this.btnSubmit.click();
        await browser.pause(3000);
        await this.Classroom.click();
        await browser.pause(3000);
    }
}
export default new  ClassroomModule();
