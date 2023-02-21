class AttendenceModule {
    get Attendence () {
        return $("//span[normalize-space()='Attendance']");
    }
    get AddAttendance () {
        return $("a[href='add_attendance.php']");
    }
    get IndexNumber () {
        return $("#index_number");
    }
    get btnSubmit () {
        return $("#btnSubmit");
    }
    async addAttendence(indexNumber) {
        await this.Attendence.click();
        await this.Attendence.click();
        await expect(browser).toHaveTitleContaining('Student Management System');
        await this.IndexNumber.setValue(indexNumber);
        await this.btnSubmit.click();
        await browser.pause(3000);
    }
}
export default new  AttendenceModule();
