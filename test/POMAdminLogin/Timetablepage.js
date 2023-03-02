import { expect } from "chai";

class TimetableModule {

    get Timetable_link () {
        return $('//span[normalize-space()="Timetable"]');
    }
    get Grade_dp () {
        return $('#grade');
    }
    get btnSubmit_btn () {
        return $("button[class='btn btn-primary']");
    }
    get Add_btn () {
        return $(".btn.btn-success.btn-sm.pull-right");
    }
    get Day_tf () {
        return $("#day");
    }
    get Subject_dp () {
        return $("#subject");
    }
    get Teacher_dp () {
        return $("#teacher");
    }
    get Classroom_dp () {
        return $("#classroom");
    }
    get StartTime_tf() {
        return $("#start_time");
    }
    get EndTime_tf () {
        return $("#end_time");
    }
    get btnSubmitFinal_btn () {
        return $("#btnSubmit");
    }
    async addTimetable(Day,Subject,Teacher,Classroom) {
        await this.Timetable_link.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await this.Grade_dp.selectByVisibleText('Grade 1');
        await browser.pause(3000);
        await this.btnSubmit_btn.click();
        await this.Add_btn.click();
        await this.Day_tf.selectByVisibleText(Day);
        await this.Subject_dp.selectByVisibleText(Subject);
        await this.Teacher_dp.selectByVisibleText(Teacher);
        await this.Classroom_dp.selectByVisibleText(Classroom);
        await this.StartTime_tf.setValue(2);
        await this.EndTime_tf.setValue(3);
        await browser.pause(3000);
        await this.btnSubmitFinal_btn.click();
        expect(await browser.getTitle()).to.equal('Student Management System');
        await browser.pause(3000);
        await browser.refresh();
    }
}
export default new TimetableModule();
