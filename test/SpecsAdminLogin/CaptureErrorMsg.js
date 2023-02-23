import LoginPage from '../OnlineFoodOrderingSystem/Loginpage.js'

describe('My Login application', () => {
    let text
    let ErrorText
    it('should wait until Error Text has appearance', async () => {
        await LoginPage.login('ahmedrazakha@gmail.com','khan@412');
        text = await (await browser.$("//span[normalize-space()='Invalid Username or Password!']"));
        ErrorText = await text.waitUntil(async function () {
            return (console.log("The Error Text : "+ await this.getText())) === 'Invalid Username or Password!'
        },{
            timeout: 5000,
            timeoutMsg: 'No such error has been occure'
        });
    });
})