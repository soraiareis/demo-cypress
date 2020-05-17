import LoginPage from '../pages/LoginPage';
import SecurePage from '../pages/SecurePage';
 
const loginPage = new LoginPage();
const securePage = new SecurePage();
 
context('Login', () => {
 
  it('Login successfully', () => {
    loginPage.visitLogin();
    loginPage.typeUsername("tomsmith");
    loginPage.typePassword("SuperSecretPassword!");
    loginPage.clickLogin();
    securePage.getMessage().should((actual) => {
      expect(actual).to.have.string("You logged into a secure area!");
    })
  })
 
})
