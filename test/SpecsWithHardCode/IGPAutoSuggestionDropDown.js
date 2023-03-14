/*   IGP: India's #1 Online Gift Shop | Send Unique Gifts to India Online
*/
import { assert } from 'chai';
import { expect } from "chai";
import data from '../users.json' assert {type:"json"}


describe('My IGP application', async () => {

    it('should login with valid credentials', async () => {
        await browser.maximizeWindow();
        await browser.url(`https://www.igp.com/login`);
        await browser.pause(2000);
        expect(await browser.getTitle()).to.equal('Log in to IGP | Log In or Sign Up - IGP.com');
        expect(data).to.be.an('array').and.not.empty;
        // expect(data[0]).to.have.nested.property('email').that.is.a('ahmedrazakhan412@gmail.com');
        await browser.$("(//input[@id='email'])[1]").setValue(data[0].email);
        await browser.$("(//input[@id='passwd'])[1]").setValue(data[0].password);
        await browser.$("button[data-action='login']").click();
        await browser.pause(3000);
        expect(await browser.getTitle()).to.equal("Online Gifts Delivery: Buy/Send Gifts to India, Unique Gift Shop")
        await browser.pause(3000);
    })

    it('handling auto suggestions', async () => {
       const inputSearch = await browser.$('input[placeholder="Search for gifts"]')
       await inputSearch.setValue('cake')
    // await browser.waitUntil(async()=>(await (await browser.$('div[id="searched-Items"]')).isDisplayed()));
       expect(browser.waitUntil(async() => {
       const searchedItems = await browser.$('div[id="searched-Items"]');
       return await searchedItems.isDisplayed();
      })).to.be.true;
      
       const suggestionsList = await browser.$$('//li[@class="cards-li"]/a/div')
       let suggestionsListText=await Promise.all(suggestionsList.map( async v=>await v.getText()))
       console.log(suggestionsListText);
    })
})