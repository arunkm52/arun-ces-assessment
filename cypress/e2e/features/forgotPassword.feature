Feature: Forgot Password Scenarios

    Background: Launch Login Page and start the forgot password flow
        When user launch the Login page
        Then Login page should be displayed with CDS logo
        When user click on the Forgot Password link
        Then Forgot password section should be displayed

    Scenario: Forgot Password Success Flow
        When user enters the email id "abcd@gmail.com"
        And user click on continue button
        Then forgot password flow success screen should be displayed

    Scenario Outline: Forgot Password Invalid Email Flow
        When user enters the email id "<emailAddress>"
        And user click on continue button
        Then Invalid Email Error message should be displayed

        Examples:
            | emailAddress | Scenarios          |
            | abcd234      | alphanumeric       |
            | 1234         | Numbers            |
            | !@#%SDF!@    | Special characters |
