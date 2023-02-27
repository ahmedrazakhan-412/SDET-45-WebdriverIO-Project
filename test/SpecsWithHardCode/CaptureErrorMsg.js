
/*To capture the Error Text has appearance after entering wrong credentials*/

describe('My Login application',() => {
    let text
    let ErrorText

    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver:8888/`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        await browser.$("input[name='user_name']").setValue('ahmedrazakha@gmail.com');
        await browser.$("input[name='user_password']").setValue('khan@412');
        await browser.$("#submitButton").click();
        await browser.pause(2000);
    })
    it('should wait until Error Text has appearance', async () => {
        text = await (await browser.$("//div[@class='errorMessage']"));
        ErrorText = await text.waitUntil(async function () {
             (console.log("The Error Text : "+ await this.getText())) === 'You must specify a valid username and password.'
        },{
            timeout: 5000,
            timeoutMsg: 'No such error has been occure'
        });
        console.log("The Error has been occure : "+ErrorText);
    });
})