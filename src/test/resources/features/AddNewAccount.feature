@AddAccountFeature
Feature: Codefios Other Add New Account validation

  @AddNewAccountScenario1
  Scenario Outline: User should be able to loging succefully and add a new account
    Given User is on the Codefios login Page
    When User enter the "<username_variable>" in "username" field
    When User enter the "<password_variable>" in "password" field
    When User clicks on "Signin" button
    Then User lands on the Codefios Dashboard Page
    And User clicks on "listAccounts"
    And User clicks on "addAccount"
    And User enters "<accountName>" in the "accountName" field in accounts page
    And User enters "<description>" in the "description" field in accounts page
    And User enters "<initialBalance>" in the "initialBalance" field in accounts page
    And User enters "<accountNumber>" in the "accountNumber" field in accounts page
    And User enters "<contactPerson>" in the "contactPerson" field in accounts page
    And User clicks on "Save"
    Then User should be able to validate account created successfully

    Examples: 
      | username_variable | password_variable | accountName       | description                | initialBalance | accountNumber | contactPerson |
      | demo@codefios.com | abc123            | Indiana Jones LKm | adding new account for LKM |          30000 |        556677 | LubnaKM       |
