import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { loginPage } from "../../pageObjects/loginPage";


When('user launch the Login page', () => {

    cy.visit("https://membersvic.returnit.com.au/");
})

Then('Login page should be displayed with CDS logo', () => {

    loginPage.verifyCDSLogoDisplayed();
})

When('user click on the Forgot Password link', () => {

    loginPage.clickOnForgotPasswordLink();
})

Then('Forgot password section should be displayed', () => {

    loginPage.verifyForgotPasswordHeadingDisplayed();
    loginPage.verifyForgotPasswordDescriptionDisplayed();
})

And('user verify the forgot password section', () => {

})

When('user enters the email id {string}', (inputEmail) => {

    loginPage.enterEmailAddress(inputEmail);
})

And('user click on continue button', () => {

    loginPage.clickOnContinueButton();
})

Then('forgot password flow success screen should be displayed', () => {

    loginPage.verifyForgotPasswordSuccessScreenDisplayed();
})

Then('Invalid Email Error message should be displayed',()=>{

    loginPage.verifyInvalidEmailErrorMessageIsDisplayed();
})

