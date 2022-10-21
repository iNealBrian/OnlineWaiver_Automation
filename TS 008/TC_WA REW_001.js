// SignNewWaiver as pre-requisite
const {Builder, By, until, Key} = require("selenium-webdriver");

async function retrieveExistingWaiver()
{
    // launch browser
    var driver = new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("https://phqatesting.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/5");

    // enter email address and click continue button
    await driver.wait(until.elementLocated(By.id("email-input")), 10000);
    await driver.findElement(By.id("email-input")).sendKeys("bnavida@intercardinc.com");
    await driver.findElement(By.className("submit-button")).sendKeys(Key.RETURN);

    // retrieve existing waiver
    await driver.wait(until.elementLocated(By.id("retrieve-existing-btn")), 10000);
    await driver.findElement(By.id("retrieve-existing-btn")).click();
    
    // click okay button
    // await driver.wait(until.elementLocated(By.className("modal-button")), 10000);
    // await driver.findElement(By.className("modal-button")).click();

    // close the browser
    // await driver.quit();
}
retrieveExistingWaiver()