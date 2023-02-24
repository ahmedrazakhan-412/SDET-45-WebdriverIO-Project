import LoginPage from '../Assignment/Loginpage.js'

describe('My Login application',() => {
    let text
    let ErrorText
    it('should wait until Error Text has appearance', async () => {
        await LoginPage.login('ahmedrazakha@gmail.com','khan@412');
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