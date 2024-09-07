package steps;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.AddNewAccPage;
import pages.DashboardPage;
import pages.LoginPage;
import pages.TestBase;

public class LoginTestDefination extends TestBase{
	
	LoginPage lp;
	DashboardPage dbp;
	AddNewAccPage addnewaccpage;
	
	@Before
	public void beforerun() {
		init_driver();
		lp = PageFactory.initElements(driver,LoginPage.class);
		dbp = PageFactory.initElements(driver, DashboardPage.class);
		addnewaccpage = PageFactory.initElements(driver,AddNewAccPage.class);
		
	}
	@Given("User is on the Codefios login Page")
	public void user_is_on_the_Codefios_login_Page() {
		driver.get("https://codefios.com/ebilling/");
	}

	@When("User enter the {string} in {string} field")
	public void user_enter_the_in_field(String logindata, String field) {
	   if(field.equalsIgnoreCase("username")) {
		   lp.insertUserName(logindata);
	   }else if(field.equalsIgnoreCase("password")) {
		   lp.insertPassword(logindata);
	   }
		  
	}

	
		@When("User clicks on {string} button")
	public void user_clicks_on_button(String button) {
			if(button.equalsIgnoreCase("signin")) {
				lp.clickSignin();
			}
	}

	@Then("User lands on the Codefios Dashboard Page")
	public void user_lands_on_the_Codefios_Dashboard_Page() {
	  String expectedText = "Codefios";
	  String actualText = driver.getTitle();
	  Assert.assertEquals("Dashboard Title Doesn't match!!", expectedText, actualText);
	}


}
