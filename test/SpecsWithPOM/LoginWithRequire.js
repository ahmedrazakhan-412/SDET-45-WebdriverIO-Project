let importClass = require('../POMAdminLogin/LoginRequirepage.cjs');

/* Login as admin and Navigate to application click on MyProfile 
and click on edit button and enter all details and click on update and save the details and Logout.*/

describe('My Login application', () => {

    it('should login with valid credentials as Admin', async () => {
        console.log("The value of a : "+importClass.a);
        await importClass.login('admin@gmail.com','12345');
    })
    it('should signout from an application as teacher', async () => {
        await importClass.signout();
    })
})

//  Error: ReferenceError: require is not defined in ES module scope, you can use import instead
