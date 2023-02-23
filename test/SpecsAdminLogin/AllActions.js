import LoginPage from '../Assignment/Loginpage.js'

describe('My Login application', async() => {
    let Workflows
    let DropDown
    let alltext
    /* moveTo mouseOver
    Move the mouse by an offset of the specified element. If no element is specified, the move is relative to the current mouse cursor. If an element is provided but no offset, the mouse will be moved to the center of the element. If the element is not visible, it will be scrolled into view.*/
    // it('should demonstrate the moveTo command', async () => {
    //     await LoginPage.login('admin','admin');
    //     await (await browser.$("//a[@href='javascript:;'][normalize-space()='More']")).moveTo();
    //     await browser.pause(2000);
    //     await LoginPage.signout();
    // })

    // /* ScrollIntoView */
    // it('should demonstrate the ScrollIntoView command', async () => {
    //     await LoginPage.login('admin','admin');
    //     await (await browser.$("img[src='themes/softed/images/mainSettings.PNG']")).moveTo();
    //     await (await browser.$("//a[normalize-space()='CRM Settings']")).click();
    //     await browser.pause(2000);
    //     Workflows = await browser.$("//a[normalize-space()='Workflows']");
    //     await Workflows.scrollIntoView();
    //     await browser.pause(2000);
    //     await Workflows.click();
    //     await LoginPage.signout();
    // })

    // /* DropDown */
    // it('should demonstrate the DropDown command', async () => {
    //     await LoginPage.login('admin','admin');
    //     DropDown = await browser.$('#qccombo');
    //     await DropDown.selectByAttribute('value','Products');
    //     await browser.pause(2000);
    //     await LoginPage.signout();
    // })

    // /* Calender PopUp */
    // it('should demonstrate the Calender PopUp command', async () => {
    //     await LoginPage.login('admin','admin');
    //     await (await browser.$("img[title='Open Calendar...']")).click();
    //     await browser.pause(2000);
    //     await (await browser.$("//a[normalize-space()='24']")).click();
    //     await LoginPage.signout();
    // })

    /* FindElements */
    it('should demonstrate the FindElements command', async () => {
        await LoginPage.login('admin','admin');
        await (await browser.$("//a[@href='index.php?module=Accounts&action=index'][normalize-space()='Organizations']")).click();
        await browser.pause(2000);
        alltext = await (await browser.$$('//td[@id="linkForSelectAll"]/../following-sibling::tr/td[3]'));
        var arr = [];
        alltext.forEach(async element => {
           let ele=await element.getText();
            arr.push(ele);
        });
        console.log("All The text from findElements are : "+arr);
        await LoginPage.signout();
    })

    // /* getValue */
    // it('should demonstrate the moveTo command', async () => {
    //     await LoginPage.login();
    //     await (await browser.$("//div[contains(text(),'Fashion')]")).moveTo();
    //     await browser.pause(3000);
    // })
})