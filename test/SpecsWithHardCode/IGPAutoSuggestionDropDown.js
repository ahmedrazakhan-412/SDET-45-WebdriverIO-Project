/*   IGP: India's #1 Online Gift Shop | Send Unique Gifts to India Online
*/

describe('My IGP application', async () => {

    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await browser.url(`https://www.igp.com/login`);
        await browser.pause(2000);
        expect(browser).toHaveTitleContaining('Log in to IGP | Log In or Sign Up - IGP.com')
        await browser.$("(//input[@id='email'])[1]").setValue('ahmedrazakhan412@gmail.com');
        await browser.$("(//input[@id='passwd'])[1]").setValue('khan@412');
        await browser.$("button[data-action='login']").click();
        expect(browser).toHaveTitleContaining("IGP: India's #1 Online Gift Shop | Send Unique Gifts to India Online")
        await browser.pause(3000);
    })

    it('handling auto suggestions', async () => {
       const inputSearch = await browser.$('input[placeholder="Search for gifts"]')
       await inputSearch.setValue('cake')
       await browser.waitUntil(async()=>(await (await browser.$('div[id="searched-Items"]')).isDisplayed()))
       const suggestionsList = await browser.$$('//li[@class="cards-li"]/a/div')
       let suggestionsListText=await Promise.all(suggestionsList.map( async v=>await v.getText()))
       console.log(suggestionsListText);
    })
})