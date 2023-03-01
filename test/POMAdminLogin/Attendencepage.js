class AttendenceModule {
    get Attendence_link () {
        return $("//span[normalize-space()='Attendance']");
    }
    get AddAttendance_link () {
        return $("a[href='add_attendance.php']");
    }
    get IndexNumber_tf () {
        return $("#index_number");
    }
    get btnSubmit_btn () {
        return $("#btnSubmit");
    }
    async addAttendence(indexNumber) {
        await this.Attendence_link.click();
        await this.AddAttendance_link.click();
        expect(browser).toHaveTitleContaining('Student Management System');
        await this.IndexNumber_tf.setValue(indexNumber);
        await this.btnSubmit_btn.click();
        await browser.pause(3000);
    }
}
export default new  AttendenceModule();
