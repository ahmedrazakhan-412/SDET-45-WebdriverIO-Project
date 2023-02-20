
class StudentModule {
    get Student () {
        return $("//span[normalize-space()='Student']");
    }
    get AddStudent () {
        return $("a[href='student.php']");
    }
    //Student Details
    get IndexNumber () {
        return $("#index_number");
    }
    get FullName () {
        return $("#full_name");
    }
    get NameWithInitials () {
        return $("#i_name");
    }
    get Address () {
        return $("#address");
    }
    get Email () {
        return $("#email");
    }
    get PhoneNumber () {
        return $("#phone");
    }
    get DateofBirth () {
        return $("#b_date");
    }
    get Gender () {
        return $("#gender");
    }
    get FileToUpload () {
        return $("#fileToUpload");
    }
    //Guardian Details Details
    get GuardianIndexNumber () {
        return $("#g_index");
    }
    get GuardianFullName () {
        return $("#g_full_name");
    }
    get GuardianNameWithInitials () {
        return $("#g_i_name");
    }
    get GuardianAddress () {
        return $("#g_address");
    }
    get GuardianEmail () {
        return $("#g_email");
    }
    get GuardianPhoneNumber () {
        return $("#g_phone");
    }
    get GuardianDateofBirth () {
        return $("#g_b_date");
    }
    get GuardianGender () {
        return $("#g_gender");
    }
    get GuardianFileToUpload () {
        return $("#g_fileToUpload");
    }
    get Update () {
        return $("#btnSubmit");
    }
    get Grade () {
        return $('#grade');
    }
    get AddStudentSubject () {
        return $$("//input[@id='checkbox']");
    }
    get Submit () {
        return$("#btnSubmit1");
    }
    async addStudent () {
        await this.Student.scrollIntoView();
        await this.Student.click();
        await expect(browser).toHaveTitleContaining('Student Management System')
        await browser.pause(2000);
        await this.AddStudent.click();
        //Student Details
        await this.IndexNumber.setValue("003");
        await this.FullName.setValue("Md Mustaq Student");
        await this.NameWithInitials.setValue("Mr.Md Mustaq Student");
        await this.Address.setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await this.Gender.selectByVisibleText('Male');
        await this.Email.setValue("mdmustaqa@gmail.com");
        await this.DateofBirth.setValue("22-10-1992");
        await this.PhoneNumber.setValue("948-019-6003");
        await this.FileToUpload.setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await browser.pause(3000);
        //Guardian Details Details
        await this.GuardianFullName.setValue("Md Kaleem Parent");
        await this.GuardianNameWithInitials.setValue("Mr.Md Kaleem Parent");
        await this.GuardianAddress.setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await this.GuardianGender.selectByVisibleText('Male');
        await this.GuardianEmail.setValue("mdkaleema@gmail.com");
        await this.GuardianDateofBirth.setValue("22-10-1957");
        await this.GuardianPhoneNumber.setValue("948-019-6003");
        await this.GuardianFileToUpload.setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await this.Update.scrollIntoView();
        await browser.pause(3000);
        await this.Update.click();
        await browser.pause(3000);
        await this.Grade.selectByVisibleText('Grade 1');
        for (const checkbox of this.AddStudentSubject) {
            checkbox.click();
        }
        await browser.pause(3000);
        await this.Update.click();
    }
}
export default new StudentModule();
