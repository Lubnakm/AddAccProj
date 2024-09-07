package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {

	WebDriver driver;
	
	public DashboardPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH,using = "//strong[text()='Dashboard']") WebElement DASHBOARD_HEADER_ELEMENT;
	@FindBy(how = How.XPATH,using ="//span[text()='List Accounts']") WebElement LISTACCOUNT_ELEMENT;
	
	public void clickListAccount() {
		LISTACCOUNT_ELEMENT.click();
	}
}
  