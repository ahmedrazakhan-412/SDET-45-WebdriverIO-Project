import GenericUtilityPage from '../POMAdminLogin/GenericUtilitypage.js'

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
        return  browser.$$("//input[@id='checkbox']");
    }
    get Submit () {
        return $("#btnSubmit1");
    }
    get Paid () {
        return $("//div[@id='msk123456']//button[@id='btnSubmit1']");
    }
    ranWithEmail="";
    async addStudent () {
        await this.Student.scrollIntoView();
        await this.Student.click();
        expect(browser).toHaveTitleContaining('Student Management System');
        let ran = await GenericUtilityPage.randombetween(500,900);
        await browser.pause(2000);
        await this.AddStudent.click();

        // Student Details

        await this.IndexNumber.setValue("00"+ran);
        await this.FullName.setValue("Md Mustaq Student "+ran);
        await this.NameWithInitials.setValue("Mr.Md Mustaq Student "+ran);
        await this.Address.setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await this.Gender.selectByVisibleText('Male');
        let studentEmail = "mustaq"+ran+"@gmail.com"
        await this.Email.setValue(studentEmail);
        await this.DateofBirth.setValue("22-10-1992");
        await this.PhoneNumber.setValue("948-019-6003");
        await this.FileToUpload.setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await browser.pause(3000);

        // Guardian Details 

        await this.GuardianFullName.setValue("Md Kaleem Parent "+ran);
        await this.GuardianNameWithInitials.setValue("Mr.Md Kaleem Parent "+ran);
        await this.GuardianAddress.setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await this.GuardianGender.selectByVisibleText('Male');
        let parentEmail = "kaleem"+ran+"@gmail.com"
        await this.GuardianEmail.setValue(parentEmail);
        this.ranWithEmail=parentEmail;
        await this.GuardianDateofBirth.setValue("22-10-1957");
        await this.GuardianPhoneNumber.setValue("948-019-6003");
        await this.GuardianFileToUpload.setValue("G:/Md Ahmed Raza Khan/Test Yantra Software Solutions/TYSS Project/Photos/MyPhoto2.jpg");
        await this.Update.scrollIntoView();
        await browser.pause(3000);
        await this.Update.click();
        await browser.pause(2000);
        await this.Grade.selectByVisibleText('Grade 1');
        await browser.pause(2000);
        this.AddStudentSubject.forEach(async element => {
        await element.click();
        });
        await browser.pause(3000);
        await this.Submit.click();
        await this.Paid.click();
    }
}
export default new StudentModule();
