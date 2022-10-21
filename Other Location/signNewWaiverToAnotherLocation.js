// SignNewWaiver as pre-requisite
const {Builder, By, until, Key} = require("selenium-webdriver");

async function signNewWaiverToOtherLocation()
{
    // launch the browser
    var driver = new Builder().forBrowser("chrome").build();

    // navigate to application - using other location
    // await driver.get("https://phqatesting.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/6");
    // await driver.get("https://qaall.icardinc.net/OnlineWaiver/home/NTAwMA%3D%3D/l/26");
    await driver.get("https://phdevserver1.intercardinc.com/OnlineWaiver/home/NjAwMA%3D%3D/l/6");

    // enter email address and click continue button
    await driver.wait(until.elementLocated(By.id("email-input")), 10000);
    await driver.findElement(By.id("email-input")).sendKeys("bnavida@intercardinc.com");
    await driver.findElement(By.className("submit-button")).sendKeys(Key.RETURN);

    // click sign new waiver button
    await driver.wait(until.elementLocated(By.id("signed-new-waiver-btn")), 10000);
    await driver.findElement(By.id("signed-new-waiver-btn")).click();

    // set webdriver delay then click continue button
    await driver.sleep(20000);
    await driver.wait(until.elementLocated(By.id("dependents-continue")), 10000);
    await driver.findElement(By.id("dependents-continue")).click();

    // terms and conditions
    await driver.wait(until.elementLocated(By.css("label[for='ToCChkBx-0']")), 10000).click();
    // await driver.findElement(By.id("accept-button")).click();

    // allow notifications and continue
    // await driver.findElement(By.css("label[for='textSub']")).click();
    // await driver.findElement(By.css("label[for='email']")).click();
    // await driver.findElement(By.id("accept-button")).click();

    // go back to home page
    // await driver.findElement(By.className("continue")).click();
    // sign another waiver
    // await driver.findElement(By.className("previous")).click();

    // close the browser
    // await driver.quit();
    
}
signNewWaiverToOtherLocation()