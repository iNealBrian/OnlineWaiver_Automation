const {Builder, By, until, Key} = require("selenium-webdriver");

async function verifyEmailAddress()
{
    // launch the browser
    var driver = new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("https://phqatesting.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/5");

    // await driver.wait(until.elementLocated(By.id("email-input")), 10000);
    // await driver.findElement(By.id("email-input")).sendKeys(Key.TAB);

    var emailTextField = await driver.wait(until.elementLocated(By.id("email-input")), 10000);
    emailTextField.sendKeys(Key.TAB);
    emailTextField.sendKeys("bnavida@intercardinc.com");
    await driver.findElement(By.className("submit-button")).sendKeys(Key.RETURN);

    // close the browser
    // await driver.quit();

}
verifyEmailAddress()