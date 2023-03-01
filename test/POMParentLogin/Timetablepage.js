class TimetableModule {
    get Timetable_link () {
        return $('=Timetable');
    }
    get MyTimetable_link () {
        return $("a[href='my_timetable2.php']");
    }
    get AllTimetable_link () {
        return $("a[href='all_timetable2.php']");
    }
    async myTimetable() {
        await this.Timetable_link.click()
        expect(browser).toHaveTitleContaining('Student Management System')
        await this.MyTimetable_link.click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
    }
}
export default new TimetableModule();
