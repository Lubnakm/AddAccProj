package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddNewAccPage {

WebDriver driver;
	
	public AddNewAccPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH,using = "//button[text()='Add Account']") WebElement ADD_ACCOUNT_ELEMENT;
	@FindBy(how = How.XPATH,using = "//input[@id='account_name']") WebElement ACCOUNT_NAME_ELEMENT;
	@FindBy(how = How.XPATH,using = "//textarea[@id='description']") WebElement DESCRIPTION_ELEMENT;
	@FindBy(how = How.XPATH,using = "//input[@id='balance']") WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how = How.XPATH,using = "//input[@id='account_number']") WebElement ACCNUMBER_ELEMENT;
	@FindBy(how = How.XPATH,using = "//input[@id='contact_person']") WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how = How.XPATH,using = "//button[@id='accountSave']") WebElement SAVE_BUTTON_ELEMENT;
	
//	public String getAccountPageTile() {
//		return driver.getTitle();
//	}
	
	public void click_AddAccount_button() {
		ADD_ACCOUNT_ELEMENT.click();
	}

	public void insertAccountName(String accountname) {
		ACCOUNT_NAME_ELEMENT.sendKeys(accountname);
	}
	
	public void insertDescription(String description) {
		DESCRIPTION_ELEMENT.sendKeys(description);
	}
	
	public void insertInitialBalance(String balance) throws InterruptedException {
		Thread.sleep(2000);
		INITIAL_BALANCE_ELEMENT.sendKeys(balance);
	}
	
	public void insertAccountNumber(String accNumber) {
		ACCNUMBER_ELEMENT.sendKeys(accNumber);
	}
	public void insertContactPerson(String cPerson) {
		CONTACT_PERSON_ELEMENT.sendKeys(cPerson);
	}
	public void clickOnSaveButton() {
		SAVE_BUTTON_ELEMENT.click();
	}
}
