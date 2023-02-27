class TimetableModule {
    get Timetable () {
        return $('=Timetable');
    }
    get MyTimetable() {
        return $("a[href='my_timetable2.php']");
    }
    get AllTimetable () {
        return $("a[href='all_timetable2.php']");
    }
    async myTimetable() {
        await this.Timetable.click()
        expect(browser).toHaveTitleContaining('Student Management System')
        await this.MyTimetable.click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    }
}
export default new TimetableModule();
