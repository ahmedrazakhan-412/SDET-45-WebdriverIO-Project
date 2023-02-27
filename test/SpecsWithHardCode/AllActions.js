/* All Actions like moveTo, ScrollIntoView, DropDown, Calender PopUp, FindElements, getValue etc...
*/

describe('My Login application', async() => {
    let Workflows
    let DropDown
    let alltext
    let value
    
    /* moveTo mouseOver
    Move the mouse by an offset of the specified element. If no element is specified, the move is relative to the current mouse cursor. If an element is provided but no offset, the mouse will be moved to the center of the element. If the element is not visible, it will be scrolled into view.*/
    it('should demonstrate the moveTo method', async () => {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver:8888/`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        await browser.$("input[name='user_name']").setValue('admin');
        await browser.$("input[name='user_password']").setValue('admin');
        await browser.$("#submitButton").click();
        expect(browser).toHaveTitleContaining('Administrator - Home - vtiger CRM 5 - Commercial O')
        await browser.pause(2000);
        await (await browser.$("//a[@href='javascript:;'][normalize-space()='More']")).moveTo();
        await browser.pause(2000);
        await browser.$("img[src='themes/softed/images/user.PNG']").click();
        await browser.pause(2000);
        await browser.$('//a[normalize-space()="Sign Out"]').click();
        await browser.pause(2000);
    })

    /* ScrollIntoView */
    it('should demonstrate the ScrollIntoView method', async () => {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver:8888/`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        await browser.$("input[name='user_name']").setValue('admin');
        await browser.$("input[name='user_password']").setValue('admin');
        await browser.$("#submitButton").click();
        expect(browser).toHaveTitleContaining('Administrator - Home - vtiger CRM 5 - Commercial O')
        await browser.pause(2000);
        await (await browser.$("img[src='themes/softed/images/mainSettings.PNG']")).moveTo();
        await (await browser.$("//a[normalize-space()='CRM Settings']")).click();
        await browser.pause(2000);
        Workflows = await browser.$("//a[normalize-space()='Workflows']");
        await Workflows.scrollIntoView();
        await browser.pause(2000);
        await Workflows.click();
        await browser.pause(2000);
        await browser.$("img[src='themes/softed/images/user.PNG']").click();
        await browser.pause(2000);
        await browser.$('//a[normalize-space()="Sign Out"]').click();
        await browser.pause(2000);
    })

    /* DropDown */
    it('should demonstrate the DropDown selectByAttribute method', async () => {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver:8888/`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        await browser.$("input[name='user_name']").setValue('admin');
        await browser.$("input[name='user_password']").setValue('admin');
        await browser.$("#submitButton").click();
        expect(browser).toHaveTitleContaining('Administrator - Home - vtiger CRM 5 - Commercial O')
        await browser.pause(2000);
        DropDown = await browser.$('#qccombo');
        await DropDown.selectByAttribute('value','Products');
        await browser.pause(2000);
        await browser.$("img[src='themes/softed/images/user.PNG']").click();
        await browser.pause(2000);
        await browser.$('//a[normalize-space()="Sign Out"]').click();
        await browser.pause(2000);
    })

    /* Calender PopUp */
    it('should demonstrate the Calender PopUp', async () => {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver:8888/`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        await browser.$("input[name='user_name']").setValue('admin');
        await browser.$("input[name='user_password']").setValue('admin');
        await browser.$("#submitButton").click();
        expect(browser).toHaveTitleContaining('Administrator - Home - vtiger CRM 5 - Commercial O')
        await browser.pause(2000);
        await (await browser.$("img[title='Open Calendar...']")).click();
        await browser.pause(2000);
        await (await browser.$("//a[normalize-space()='24']")).click();
        await browser.pause(2000);
        await browser.$("img[src='themes/softed/images/user.PNG']").click();
        await browser.pause(2000);
        await browser.$('//a[normalize-space()="Sign Out"]').click();
        await browser.pause(2000);
    })

    /* FindElements */
    it('should demonstrate the FindElements $$', async () => {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver:8888/`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        await browser.$("input[name='user_name']").setValue('admin');
        await browser.$("input[name='user_password']").setValue('admin');
        await browser.$("#submitButton").click();
        expect(browser).toHaveTitleContaining('Administrator - Home - vtiger CRM 5 - Commercial O')
        await browser.pause(2000);
        await (await browser.$("//a[@href='index.php?module=Accounts&action=index'][normalize-space()='Organizations']")).click();
        await browser.pause(2000);
        console.log("All The text from table By Using findElements $$ : ");
        alltext = await browser.$$("//td/a[@title='Organizations']");
        alltext.forEach(async element => {
        console.log("Organizations----->"+await element.getText());
        });
        await browser.pause(2000);
        await browser.$("img[src='themes/softed/images/user.PNG']").click();
        await browser.pause(2000);
        await browser.$('//a[normalize-space()="Sign Out"]').click();
        await browser.pause(2000);
    })

    /* getValue */
    it('should demonstrate the getValue method', async () => {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Online_Food_Ordering_System/login.php`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('Login')
        await browser.$("input[placeholder='Username']").setValue('ahmedrazakhan412@gmail.com');
        await browser.$("input[placeholder='Password']").setValue('khan@412');
        await browser.$("#buttn").click();
        expect(browser).toHaveTitleContaining('Home')
        await browser.pause(3000);
        await browser.url(`http://testingserver/domain/Online_Food_Ordering_System/dishes.php?res_id=1`);
        value = await browser.$("//a[.='Yorkshire Lamb Patties']/../../../../following-sibling::div//input[@class='btn theme-btn']").getValue();
        console.log("By Using getValue method : "+value);
        await browser.pause(3000);
    })
})