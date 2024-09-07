package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.en.Then;
import pages.AddNewAccPage;
import pages.DashboardPage;
import pages.LoginPage;
import pages.TestBase;

public class AddNewAccStepDefination extends TestBase{
	
	DashboardPage dbp;
	AddNewAccPage addnewaccpage;
	

	@Then("User clicks on {string}")
	public void user_clicks_on(String button) {
		dbp = PageFactory.initElements(driver,DashboardPage.class);
		addnewaccpage = PageFactory.initElements(driver,AddNewAccPage.class);
		if(button.equalsIgnoreCase("listAccounts")) {
			dbp.clickListAccount();
		}else if(button.equalsIgnoreCase("addAccount")) {
			addnewaccpage.click_AddAccount_button();
		}else if(button.equalsIgnoreCase("Save")) {
			addnewaccpage.clickOnSaveButton();
		}
	}

	@Then("User enters {string} in the {string} field in accounts page")
	public void user_enters_in_the_field_in_accounts_page(String addaccData, String field){
	  if(field.equalsIgnoreCase("accountName")) {
		  try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
		  addnewaccpage.insertAccountName(addaccData);
		  
	  }else if(field.equalsIgnoreCase("description")) {
		  addnewaccpage.insertDescription(addaccData);
	  }else if(field.equalsIgnoreCase("initialBalance")) {
		  try {
			addnewaccpage.insertInitialBalance(addaccData);
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
	  }else if(field.equalsIgnoreCase("accountNumber")) {
		  addnewaccpage.insertAccountNumber(addaccData);
	  }else if(field.equalsIgnoreCase("contactPerson")) {
		  addnewaccpage.insertContactPerson(addaccData);
	  }
			  
	}

	
	@Then("User should be able to validate account created successfully")
	public void user_should_be_able_to_validate_account_created_successfully() {
	try {
		Thread.sleep(2000);
	} catch (InterruptedException e) {
		e.printStackTrace();
	}
		takeScreenshot(driver);
	}
	
}
