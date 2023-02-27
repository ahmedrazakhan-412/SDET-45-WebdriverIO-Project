
class TeacherModule {
    get Teacher () {
        return $('=Teacher');
    }
    get AddTeacher () {
        return $('a[href="teacher.php"]');
    }
    get IndexNumber () {
        return $('input[name="index_number"]');
    }
    get FullName () {
        return $('input[name="full_name"]');
    }
    get NameWithInitials () {
        return $('input[name="i_name"]');
    }
    get Address () {
        return $('input[name="address"]');
    }
    get Gender () {
        return $('#gender');
    }
    get PhoneNumber () {
        return $('input[name="phone"]');
    }
    get Email () {
        return $('input[name="email"]');
    }
    get FileToUpload () {
        return $('input[name="fileToUpload"]');
    }
    get Submit () {
        return $('button[id="btnSubmit"]');
    }
    async addTeacher () {
        await this.Teacher.click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(3000);
        await this.AddTeacher.click();
        expect(browser).toHaveTitleContaining('Student Management System')
        await this.IndexNumber.setValue("T002");
        await this.FullName.setValue("Shoukat Ali");
        await this.NameWithInitials.setValue("Mr.Shoukat Ali");
        await this.Address.setValue("LBS Nagar Raichur 584101");
        await this.Gender.selectByVisibleText('Male');
        await this.PhoneNumber.setValue("948-019-6003");
        await this.Email.setValue("shoukat@gmail.com");
        await this.FileToUpload.setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await browser.pause(3000);
        await this.Submit.scrollIntoView();
        await browser.pause(3000);
        await this.Submit.click();
        await browser.pause(3000);
    }
}
export default new TeacherModule();
