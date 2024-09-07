$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddNewAccount.feature");
formatter.feature({
  "name": "Codefios Other Add New Account validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddAccountFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to loging succefully and add a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewAccountScenario1"
    }
  ]
});
formatter.step({
  "name": "User is on the Codefios login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter the \"\u003cusername_variable\u003e\" in \"username\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User enter the \"\u003cpassword_variable\u003e\" in \"password\" field",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on \"Signin\" button",
  "keyword": "When "
});
formatter.step({
  "name": "User lands on the Codefios Dashboard Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on \"listAccounts\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on \"addAccount\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountName\u003e\" in the \"accountName\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cdescription\u003e\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cinitialBalance\u003e\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003caccountNumber\u003e\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccontactPerson\u003e\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on \"Save\"",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username_variable",
        "password_variable",
        "accountName",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123",
        "Indiana Jones LKm",
        "adding new account for LKM",
        "30000",
        "556677",
        "LubnaKM"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to loging succefully and add a new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddAccountFeature"
    },
    {
      "name": "@AddNewAccountScenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the Codefios login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.LoginTestDefination.user_is_on_the_Codefios_login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"demo@codefios.com\" in \"username\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginTestDefination.user_enter_the_in_field(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"abc123\" in \"password\" field",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginTestDefination.user_enter_the_in_field(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Signin\" button",
  "keyword": "When "
});
formatter.match({
  "location": "steps.LoginTestDefination.user_clicks_on_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on the Codefios Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.LoginTestDefination.user_lands_on_the_Codefios_Dashboard_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"listAccounts\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccStepDefination.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"addAccount\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccStepDefination.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Indiana Jones LKm\" in the \"accountName\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccStepDefination.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"adding new account for LKM\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccStepDefination.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"30000\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccStepDefination.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"556677\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccStepDefination.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"LubnaKM\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccStepDefination.user_enters_in_the_field_in_accounts_page(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"Save\"",
  "keyword": "And "
});
formatter.match({
  "location": "steps.AddNewAccStepDefination.user_clicks_on(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.AddNewAccStepDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "passed"
});
});