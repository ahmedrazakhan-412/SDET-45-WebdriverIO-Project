import LoginPage from '../Assignment/Loginpage.js'
import LoginPage1 from '../OnlineFoodOrderingSystem/Loginpage.js'

describe('My Login application', async() => {
    let Workflows
    let DropDown
    let alltext
    let value
    
    /* moveTo mouseOver
    Move the mouse by an offset of the specified element. If no element is specified, the move is relative to the current mouse cursor. If an element is provided but no offset, the mouse will be moved to the center of the element. If the element is not visible, it will be scrolled into view.*/
    it('should demonstrate the moveTo method', async () => {
        await LoginPage.login('admin','admin');
        await (await browser.$("//a[@href='javascript:;'][normalize-space()='More']")).moveTo();
        await browser.pause(2000);
        await LoginPage.signout();
    })

    /* ScrollIntoView */
    it('should demonstrate the ScrollIntoView method', async () => {
        await LoginPage.login('admin','admin');
        await (await browser.$("//span[.=' Administrator']/../following-sibling::td[last()]/img")).moveTo();
        await (await browser.$("//a[normalize-space()='CRM Settings']")).click();
        await browser.pause(2000);
        Workflows = await browser.$("//a[normalize-space()='Workflows']");
        await Workflows.scrollIntoView();
        await browser.pause(2000);
        await Workflows.click();
        await LoginPage.signout();
    })

    /* DropDown */
    it('should demonstrate the DropDown selectByAttribute method', async () => {
        await LoginPage.login('admin','admin');
        DropDown = await browser.$('#qccombo');
        await DropDown.selectByAttribute('value','Products');
        await browser.pause(2000);
        await LoginPage.signout();
    })

    /* Calender PopUp */
    it('should demonstrate the Calender PopUp', async () => {
        await LoginPage.login('admin','admin');
        await (await browser.$("img[title='Open Calendar...']")).click();
        await browser.pause(2000);
        await (await browser.$("//a[normalize-space()='24']")).click();
        await LoginPage.signout();
    })

    /* FindElements */
    it('should demonstrate the FindElements $$', async () => {
        await LoginPage.login('admin','admin');
        await (await browser.$("//a[@href='index.php?module=Accounts&action=index'][normalize-space()='Organizations']")).click();
        await browser.pause(2000);
        console.log("All The text from table By Using findElements $$ : ");
        alltext = await browser.$$("//td/a[@title='Organizations']");
        alltext.forEach(async element => {
        console.log("Organizations----->"+await element.getText());
        });
        await LoginPage.signout();
    })

    /* getValue */
    it('should demonstrate the getValue method', async () => {
        await LoginPage1.login('ahmedrazakhan412@gmail.com','khan@412');
        await browser.url(`http://testingserver/domain/Online_Food_Ordering_System/dishes.php?res_id=1`);
        value = await browser.$("//a[.='Yorkshire Lamb Patties']/../../../../following-sibling::div//input[@class='btn theme-btn']").getValue();
        console.log("By Using getValue method : "+value);
        await browser.pause(3000);
    })
})