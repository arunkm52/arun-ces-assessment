class LoginPage {

    elements = {

        cdsLogo: () => cy.get('#prompt-logo-center'),
        forgotPasswordLink: () => cy.contains('Forgot password?'),
        forgotPasswordHeading: () => cy.contains('Forgot Your Password?'),
        forgotPasswordDescription: () => cy.contains('Enter your email address and we will send you instructions to reset your password.'),
        continueButton: () => cy.contains('Continue'),
        emailAddressField: () => cy.get('#email'),
        checkYourEmailText:()=>cy.contains('Check Your Email'),
        invalidEmailError:()=>cy.contains('Email is not valid.')
    }


    verifyCDSLogoDisplayed() {

        this.elements.cdsLogo().should('exist');
    }

    clickOnForgotPasswordLink() {

        this.elements.forgotPasswordLink().click();
    }

    verifyForgotPasswordHeadingDisplayed() {

        this.elements.forgotPasswordHeading().should('exist');
    }

    verifyForgotPasswordDescriptionDisplayed() {

        this.elements.forgotPasswordDescription().should('exist');
    }

    enterEmailAddress(inputEmail){

        this.elements.emailAddressField().type(inputEmail);
    }

    clickOnContinueButton(){

        this.elements.continueButton().click();
    }

    verifyInvalidEmailErrorMessageIsDisplayed(){

        this.elements.invalidEmailError().should('exist');
    }

    verifyForgotPasswordSuccessScreenDisplayed(){

        this.elements.checkYourEmailText().should('exist');
    }
}

export const loginPage = new LoginPage();