import LoginPage from '../Assignment/Loginpage.js'

/*To capture the Error Text has appearance after entering wrong credentials*/

describe('My Login application',() => {
    let text
    let ErrorText

    it('should login with valid credentials', async () => {
        await LoginPage.login('ahmedrazakha@gmail.com','khan@412');
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
    })
})