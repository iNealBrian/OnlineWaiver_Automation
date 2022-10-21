// SignNewWaiver as pre-requisite
const {Builder, By, untli, Key} = require("selenium-webdriver");

async function verifyVerificationCode()
{
    // launch browser
    var driver = new Builder().forBrowser("chrome").build();

    // navigate to application
    await driver.get("https://phqatesting.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/5");

    // enter email address and click continue button
    await driver.wait(until.elementLocated(By.id("email-input")), 10000);
    await driver.findElement(By.id("email-input")).sendKeys("bnavida@intercardinc.com");
    await driver.findElement(By.className("submit-button")).sendKeys(Key.RETURN);

    // click add dependents button
    await driver.wait(until.elementLocated(By.id("add-dependents-btn")), 10000);
    await driver.findElement(By.id("add-dependents-btn")).click();

    // set webdriver delay then click continue button
    await driver.sleep(20000);
    await driver.wait(until.elementLocated(By.id("dependents-continue")), 10000);
    await driver.findElement(By.id("dependents-continue")).click();

    // close the browser
    // await driver.quit();
}
verifyVerificationCode()
