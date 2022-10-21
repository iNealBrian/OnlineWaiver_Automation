const {Builder, By, until, Key} = require("selenium-webdriver");

async function signNewWaiverMyselfAndChild()
{
    // launch the browser
    var driver = new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("https://phqatesting.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/5");

    // enter email address and click continue button
    await driver.wait(until.elementLocated(By.id("email-input")), 10000);
    await driver.findElement(By.id("email-input")).sendKeys("bnavida@intercardinc.com");
    await driver.findElement(By.className("submit-button")).sendKeys(Key.RETURN);

    // click children option
    await driver.wait(until.elementsLocated(By.className("consent-option myself-and-children")), 10000);
    await driver.findElement(By.className("consent-option myself-and-children")).click();

    // close the browser
    // await driver.quit();
}
signNewWaiverMyselfAndChild()