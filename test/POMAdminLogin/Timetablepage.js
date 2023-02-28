class TimetableModule {
    get Timetable () {
        return $('//span[normalize-space()="Timetable"]');
    }
    get Grade () {
        return $('#grade');
    }
    get btnSubmit () {
        return $("button[class='btn btn-primary']");
    }
    get Add () {
        return $(".btn.btn-success.btn-sm.pull-right");
    }
    get Day () {
        return $("#day");
    }
    get Subject () {
        return $("#subject");
    }
    get Teacher () {
        return $("#teacher");
    }
    get Classroom () {
        return $("#classroom");
    }
    get StartTime () {
        return $("#start_time");
    }
    get EndTime () {
        return $("#end_time");
    }
    get btnSubmitFinal () {
        return $("#btnSubmit");
    }
    async addTimetable(Day,Subject,Teacher,Classroom) {
        await this.Timetable.click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await this.Grade.selectByVisibleText('Grade 1');
        await browser.pause(3000);
        await this.btnSubmit.click();
        await this.Add.click();
        await this.Day.selectByVisibleText(Day);
        await this.Subject.selectByVisibleText(Subject);
        await this.Teacher.selectByVisibleText(Teacher);
        await this.Classroom.selectByVisibleText(Classroom);
        await this.StartTime.setValue(2);
        await this.EndTime.setValue(3);
        await browser.pause(3000);
        await this.btnSubmitFinal.click();
        await browser.pause(3000);
        await browser.refresh();
    }
}
export default new TimetableModule();
