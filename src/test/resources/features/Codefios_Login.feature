@LoginFeature @Regression
Feature: This Feature will Validate the Login Page of Codefios

  @ValidLoginScenario
  Scenario Outline: User Logins with different set of Data
    Given User is on the Codefios login Page
    When User enter the "<username_variable>" in "username" field
    When User enter the "<password_variable>" in "password" field
    When User clicks on "Signin" button
    Then User lands on the Codefios Dashboard Page
  

    Examples: 
      | username_variable | password_variable |
      | demo@codefios.com | abc123            |
